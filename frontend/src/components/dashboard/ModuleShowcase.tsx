"use client";

import React from "react";
import TiltCard from "@/components/ui/TiltCard";
import { motion } from "framer-motion";
import { Brain, MessageSquare, Terminal, Network, Rocket, Flag, type LucideIcon } from "lucide-react";
import Link from "next/link";
import type { ModuleCard as ModuleCardData } from "@/lib/dashboard-data";

const premiumEasing: [number, number, number, number] = [0.22, 1, 0.36, 1];

const ICON_MAP: Record<ModuleCardData["icon"], LucideIcon> = {
  brain: Brain,
  message: MessageSquare,
  terminal: Terminal,
  network: Network,
  rocket: Rocket,
  flag: Flag,
};

const ACCENT_MAP: Record<ModuleCardData["accent"], { gradient: string; shadow: string }> = {
  rose: { gradient: "from-pink-500 to-rose-500", shadow: "shadow-rose-500/20" },
  orange: { gradient: "from-amber-400 to-orange-500", shadow: "shadow-orange-500/20" },
  violet: { gradient: "from-[#8b7bff] to-blue-500", shadow: "shadow-[#8b7bff]/20" },
  teal: { gradient: "from-emerald-400 to-teal-500", shadow: "shadow-teal-500/20" },
  sky: { gradient: "from-sky-400 to-blue-500", shadow: "shadow-sky-500/20" },
  amber: { gradient: "from-amber-400 to-yellow-500", shadow: "shadow-amber-500/20" },
};

interface ModuleShowcaseProps {
  modules: ModuleCardData[];
}

export default function ModuleShowcase({ modules }: ModuleShowcaseProps) {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { ease: premiumEasing, duration: 0.8 } }
  };

  return (
    <div className="w-full">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Módulos Destacados</h2>
          <p className="text-sm text-gray-500 mt-1">Explora la academia tridimensional</p>
        </div>
        <Link href="/dashboard/modules" className="text-sm font-medium text-[#8b7bff] hover:text-white transition-colors">
          Ver todos &rarr;
        </Link>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {modules.map((mod) => {
          const Icon = ICON_MAP[mod.icon];
          const accent = ACCENT_MAP[mod.accent];
          return (
            <motion.div key={mod.id} variants={item} className="h-[280px]">
              <Link href={mod.href} className="block h-full outline-none">
                <TiltCard className="h-full group">
                  <div className="absolute inset-0 p-6 flex flex-col justify-between" style={{ transform: "translateZ(40px)" }}>
                    <div className="relative w-16 h-16 mb-4">
                      <div className={`absolute inset-0 bg-gradient-to-tr ${accent.gradient} rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500`} />
                      <div className={`relative w-full h-full bg-gradient-to-tr ${accent.gradient} rounded-2xl p-0.5 shadow-lg ${accent.shadow} transform group-hover:scale-110 transition-transform duration-500`}>
                        <div className="w-full h-full bg-[#111111] rounded-[14px] flex items-center justify-center relative overflow-hidden">
                          <div className="absolute inset-0 bg-white/10 mix-blend-overlay" />
                          <Icon className="w-8 h-8 text-white drop-shadow-md" />
                        </div>
                      </div>
                    </div>

                    <div style={{ transform: "translateZ(20px)" }}>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Módulo {mod.id}</p>
                        {mod.isPlaceholder && (
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-400/80 bg-amber-400/10 px-1.5 py-0.5 rounded">
                            Próximamente
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-[#8b7bff] transition-colors">{mod.title}</h3>
                      <p className="text-sm text-gray-400 line-clamp-2">{mod.description}</p>
                    </div>
                  </div>
                </TiltCard>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}