"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = "" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Valores de movimiento del ratón
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Físicas de resorte premium (Apple Easing)
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30, mass: 1 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30, mass: 1 });

  // Transformación a rotación 3D (Límites de giro sutiles para no marear)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  // Brillo dinámico (Glare effect)
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Normalizar de -0.5 a 0.5
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Volver al centro suavemente
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative w-full rounded-3xl cursor-pointer ${className}`}
    >
      {/* Contenedor principal con Glassmorphism */}
      <div 
        className="absolute inset-0 rounded-3xl bg-[#111111]/80 backdrop-blur-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden"
        style={{ transform: "translateZ(0px)" }} // Base layer
      >
        {/* Efecto de Luz Ambiental (Glare) */}
        <motion.div
          className="absolute inset-0 z-50 pointer-events-none opacity-0 transition-opacity duration-300"
          style={{
            background: "radial-gradient(circle at var(--x) var(--y), rgba(255,255,255,0.1) 0%, transparent 50%)",
            opacity: isHovered ? 1 : 0,
            //@ts-ignore
            "--x": glareX,
            "--y": glareY,
          }}
        />
        {children}
      </div>
    </motion.div>
  );
}