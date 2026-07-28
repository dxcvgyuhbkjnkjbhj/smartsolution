"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Target, BookOpen, Trophy, type LucideIcon } from "lucide-react";
import type { DashboardStat } from "@/lib/dashboard-data";

const premiumEasing: [number, number, number, number] = [0.22, 1, 0.36, 1];

const ICON_MAP: Record<DashboardStat["icon"], LucideIcon> = {
  zap: Zap,
  book: BookOpen,
  target: Target,
  trophy: Trophy,
};

const STYLE_MAP: Record<DashboardStat["icon"], { text: string; bg: string }> = {
  zap: { text: "text-amber-400", bg: "bg-amber-400/10" },
  book: { text: "text-[#8b7bff]", bg: "bg-[#8b7bff]/10" },
  target: { text: "text-emerald-400", bg: "bg-emerald-400/10" },
  trophy: { text: "text-rose-400", bg: "bg-rose-400/10" },
};

interface StatsGridProps {
  stats: DashboardStat[];
}

export default function StatsGrid({ stats }: StatsGridProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: premiumEasing }}
      className="grid grid-cols-2 md:grid-cols-4 gap-4"
    >
      {stats.map((stat) => {
        const Icon = ICON_MAP[stat.icon];
        const style = STYLE_MAP[stat.icon];
        return (
          <div key={stat.id} className="bg-[#111111] border border-white/5 rounded-2xl p-5 hover:bg-white/[0.03] hover:border-white/10 hover:-translate-y-0.5 transition-all duration-300 shadow-sm">
            <div className="flex flex-col gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${style.bg}`}>
                <Icon className={`w-5 h-5 ${style.text}`} />
              </div>
              <div>
                <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-1">{stat.label}</p>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-bold text-white tracking-tight">{stat.value}</span>
                  <span className="text-sm font-medium text-gray-500">{stat.suffix}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}