"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface SplitScreenRevealProps {
  children: React.ReactNode;
}

type RevealSource = "login" | "onboarding";

const VALID_SOURCES: RevealSource[] = ["login", "onboarding"];

const WELCOME_COPY: Record<RevealSource, string> = {
  login: "Bienvenido de nuevo",
  onboarding: "Tu ruta de aprendizaje está lista",
};

// Curva Bezier de nivel industrial (suavidad típica de Linear/Vercel)
const cinematicEasing: [number, number, number, number] = [0.16, 1, 0.3, 1];

// ⬇️ AUMENTAMOS LA DURACIÓN PARA QUE SEA MÁS LENTA
const CURTAIN_DURATION = 3.0;          // antes 1.1
const UNMOUNT_BUFFER = 0.1;

function isRevealSource(value: string | null): value is RevealSource {
  return value !== null && VALID_SOURCES.includes(value as RevealSource);
}

export default function SplitScreenReveal({ children }: SplitScreenRevealProps) {
  const [source, setSource] = useState<RevealSource | null>(null);
  const [isRevealing, setIsRevealing] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion === null) return;

    const params = new URLSearchParams(window.location.search);
    const fromParam = params.get("from");
    if (!fromParam) return;

    const cleanUrl = () => window.history.replaceState({}, "", window.location.pathname);

    if (!isRevealSource(fromParam) || prefersReducedMotion) {
      cleanUrl();
      return;
    }

    setSource(fromParam);
    setIsRevealing(true);

    const timer = setTimeout(() => {
      setIsRevealing(false);
      cleanUrl();
    }, (CURTAIN_DURATION + UNMOUNT_BUFFER) * 1000);

    return () => clearTimeout(timer);
  }, [prefersReducedMotion]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-background">
      <AnimatePresence>
        {isRevealing && source && (
          <div key="reveal-layer" className="absolute inset-0 pointer-events-none">
            {/* CORTINAS */}
            <div className="absolute inset-0 z-40 flex overflow-hidden">
              <motion.div
                initial={{ x: 0, opacity: 1, filter: "blur(0px)", scale: 1 }}
                animate={{ x: "-55vw", opacity: 0, filter: "blur(12px)", scale: 0.98 }}
                exit={{ opacity: 0 }}
                transition={{ duration: CURTAIN_DURATION, ease: cinematicEasing }}
                className="w-1/2 h-full bg-background border-r border-white/10 relative overflow-hidden shadow-2xl origin-left"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#8b7bff]/5 to-[#8b7bff]/10" />
              </motion.div>

              <motion.div
                initial={{ x: 0, opacity: 1, filter: "blur(0px)", scale: 1 }}
                animate={{ x: "55vw", opacity: 0, filter: "blur(12px)", scale: 0.98 }}
                exit={{ opacity: 0 }}
                transition={{ duration: CURTAIN_DURATION, ease: cinematicEasing }}
                className="w-1/2 h-full bg-background border-l border-white/10 relative overflow-hidden shadow-2xl origin-right"
              >
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#8b7bff]/5 to-[#8b7bff]/10" />
              </motion.div>
            </div>

            {/* MARCA + MENSAJE, centrados sobre las cortinas */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: CURTAIN_DURATION, times: [0, 0.18, 0.62, 1], ease: cinematicEasing }}
              className="absolute inset-0 z-50 flex flex-col items-center justify-center gap-3"
            >
              <span className="text-2xl font-bold tracking-tight text-white">
                SMART <span className="text-[#8b7bff]">SOLUTION</span>
              </span>
              <span className="text-sm text-gray-400">{WELCOME_COPY[source]}</span>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* CONTENIDO REAL, emergiendo con profundidad 3D */}
      <motion.div
        initial={isRevealing ? { opacity: 0, scale: 0.94, filter: "blur(8px)" } : { opacity: 1, scale: 1, filter: "blur(0px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{
          // ⬇️ Aumentamos duración y retraso para que vaya a la par de la cortina
          duration:2,        // antes 1.0
          delay: isRevealing ? 0.1 : 0,   // antes 0.15
          ease: cinematicEasing,
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}