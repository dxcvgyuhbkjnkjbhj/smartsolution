"use client";

import React from "react";
import { motion } from "framer-motion";
import { PlayCircle, Award, Sparkles } from "lucide-react";
import Link from "next/link";
import type { UserProfile } from "@/lib/dashboard-data";

const premiumEasing: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface WelcomeHeroProps {
  profile: UserProfile;
}

export default function WelcomeHero({ profile }: WelcomeHeroProps) {
  const { name, level, streakDays, currentModule } = profile;
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (currentModule.progress / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: premiumEasing }}
      className="relative w-full rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#16161a] to-[#050505] border border-white/10 shadow-2xl"
    >
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#8b7bff]/15 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex items-center gap-6 w-full md:w-auto">
          <div className="relative group">
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#8b7bff] to-blue-500 p-1 transition-transform duration-500 group-hover:scale-105">
              <div className="w-full h-full rounded-full bg-[#111] flex items-center justify-center border-4 border-[#050505] overflow-hidden relative">
                <img
                  src={`https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(profile.avatarSeed)}&baseColor=8b7bff`}
                  alt={`Avatar de ${name}`}
                  className="w-full h-full object-cover scale-110"
                />
                <div className="absolute inset-0 bg-white/10 mix-blend-overlay"></div>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-[#8b7bff] text-white text-xs font-bold px-3 py-1 rounded-full border-2 border-[#050505] shadow-lg flex items-center gap-1">
              <Award className="w-3 h-3" /> Nvl. {level}
            </div>
          </div>

          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium mb-3 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Racha de {streakDays} {streakDays === 1 ? "día" : "días"} activa
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">
              ¡Hola de nuevo, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b7bff] to-blue-400">{name}</span>!
            </h1>
            <p className="text-gray-400 text-sm md:text-base max-w-md">
              Estás a punto de dominar la Arquitectura de Proyectos con IA. Continúa donde lo dejaste.
            </p>
          </div>
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="w-full md:w-auto bg-[#1a1a1a]/50 backdrop-blur-xl border border-white/10 rounded-2xl p-5 flex flex-col gap-4 shadow-xl"
        >
          <div className="flex justify-between items-start gap-8">
            <div className="min-w-0">
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Próximo Objetivo</p>
              <h3 className="text-white font-medium truncate">{currentModule.title}</h3>
            </div>
            <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="24" cy="24" r={radius} stroke="rgba(255,255,255,0.1)" strokeWidth="4" fill="none" />
                <circle
                  cx="24" cy="24" r={radius}
                  stroke="#8b7bff" strokeWidth="4" fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  strokeLinecap="round"
                  className="transition-all duration-1000"
                />
              </svg>
              <span className="absolute text-xs font-bold text-white">{currentModule.progress}%</span>
            </div>
          </div>

          <Link href={currentModule.href} className="w-full bg-[#8b7bff] hover:bg-[#796ae6] text-white font-medium py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(139,123,255,0.3)] group">
            <PlayCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Continuar Lección
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}