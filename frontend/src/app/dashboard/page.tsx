"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Trophy, Flame, BookOpen, ArrowRight, PlayCircle, CheckCircle2, Clock, MoreHorizontal, Star } from 'lucide-react';
import Link from 'next/link';

// === MOCK DATA ===
const WEEKLY_XP = [ 
  { day: 'Lun', xp: 150 }, 
  { day: 'Mar', xp: 250 }, 
  { day: 'Mié', xp: 450 }, 
  { day: 'Jue', xp: 500 }, 
  { day: 'Vie', xp: 300 }, 
  { day: 'Sáb', xp: 580 }, 
  { day: 'Dom', xp: 650 } 
];

const RECENT_ACTIVITY = [ { id: 1, title: 'Evaluación 1 Aprobada', module: 'Fundamentos de Prompts', time: 'Hace 2 horas', type: 'success', icon: Star }, { id: 2, title: 'Lección 4 Completada', module: 'Chain of Thought', time: 'Hace 5 horas', type: 'lesson', icon: CheckCircle2 }, { id: 3, title: 'Inició sesión', module: 'Sistema', time: 'Hace 5 horas', type: 'system', icon: Clock } ];
const ACTIVE_MODULES = [ { id: 1, title: 'Instalación de Claude Code', lesson: 'Lección 3', progress: 65 }, { id: 2, title: 'Fundamentos de Prompts', lesson: 'Evaluación Final', progress: 90 } ];

export default function DashboardHome() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const premiumEasing: [number, number, number, number] = [0.22, 1, 0.36, 1];
  const containerVariants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.4 } } };
  const itemVariants = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { ease: premiumEasing, duration: 0.6 } } };

  // ==========================================
  // MOTOR DEL GRÁFICO DINÁMICO REPARADO
  // ==========================================
  const maxXP = Math.max(...WEEKLY_XP.map(d => d.xp), 100);

  const chartPoints = WEEKLY_XP.map((data, index) => {
    const x = (index / (WEEKLY_XP.length - 1)) * 100;
    const y = 100 - (data.xp / maxXP) * 100; 
    return { x, y, xp: data.xp, day: data.day };
  });

  const linePath = `M ${chartPoints.map(p => `${p.x} ${p.y}`).join(' L ')}`;
  const areaPath = `${linePath} L 100 100 L 0 100 Z`; 

  if (!mounted) return null; 

  return (
    <div className="max-w-[1400px] mx-auto pb-24 font-sans">
      
      {/* HEADER */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: premiumEasing, duration: 0.6, delay: 0.2 }} className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-textMain flex items-center gap-3 tracking-tight">
          ¡Hola, Estudiante! <span className="animate-wave origin-bottom-right">👋</span>
        </h1>
        <p className="text-textMuted mt-2 text-sm md:text-base">Continúa tu aprendizaje y alcanza tus metas paso a paso.</p>
      </motion.div>

      <motion.div variants={containerVariants} initial="hidden" animate="show" className="space-y-8">
        
        {/* KPI CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'XP Total', value: '1,250', icon: Zap, color: 'text-amber-500', bg: 'bg-amber-500/10' },
            { label: 'Nivel Actual', value: 'Nvl. 4', icon: Trophy, color: 'text-accent', bg: 'bg-accent/10' },
            { label: 'Racha de Días', value: '12 Días', icon: Flame, color: 'text-rose-500', bg: 'bg-rose-500/10' },
            { label: 'Módulos', value: '3/10', icon: BookOpen, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
          ].map((stat, i) => (
            <motion.div key={i} variants={itemVariants} className="bg-surface border border-borderMain rounded-2xl p-6 shadow-sm hover:border-borderMain/80 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.bg}`}>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <button className="text-textMuted hover:text-textMain"><MoreHorizontal className="w-5 h-5" /></button>
              </div>
              <h3 className="text-2xl font-bold text-textMain mb-1">{stat.value}</h3>
              <p className="text-xs font-medium text-textMuted">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* CHARTS SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* GRÁFICO DINÁMICO - ALINEACIÓN MATEMÁTICA PERFECTA */}
          <motion.div variants={itemVariants} className="lg:col-span-2 bg-surface border border-borderMain rounded-2xl p-6 shadow-sm flex flex-col relative overflow-hidden">
            <div className="flex items-center justify-between mb-8 z-10">
              <div>
                <h2 className="text-base font-bold text-textMain">Mi Progreso</h2>
                <p className="text-xs text-textMuted">Rendimiento de los últimos 7 días</p>
              </div>
              <div className="px-3 py-1 bg-surfaceHover border border-borderMain text-textMain text-[10px] font-bold rounded-md uppercase tracking-wider">
                Últimos 7 días
              </div>
            </div>
            
            <div className="flex-1 w-full relative z-10 mt-4 min-h-[200px]">
              
              {/* Ejes y guías horizontales (Usa h-0 y -translate-y-1/2 para alineación milimétrica) */}
              <div className="absolute top-0 left-0 right-4 bottom-8 flex flex-col justify-between pointer-events-none">
                {[100, 75, 50, 25, 0].map((val) => (
                  <div key={val} className="flex items-center gap-3 w-full opacity-30 h-0">
                    <span className="text-[10px] text-textMuted w-7 text-right -translate-y-1/2">{val}%</span>
                    <div className="flex-1 h-px border-t border-borderMain border-dashed" />
                  </div>
                ))}
              </div>

              {/* Contenedor exacto del gráfico y puntos (Comparte los mismos límites) */}
              <motion.div 
                initial={{ clipPath: 'inset(-20% 100% -20% -20%)' }}
                animate={{ clipPath: 'inset(-20% -20% -20% -20%)' }}
                transition={{ duration: 1.5, ease: premiumEasing, delay: 0.5 }}
                className="absolute top-0 left-12 right-4 bottom-8"
              >
                {/* 1. Línea y Degradado */}
                <svg className="absolute inset-0 w-full h-full overflow-visible z-10" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  
                  <path d={areaPath} fill="url(#areaGradient)" />
                  <path 
                    d={linePath} 
                    fill="none" 
                    stroke="var(--accent)" 
                    strokeWidth="2.5"
                    vectorEffect="non-scaling-stroke" 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                {/* 2. Puntos Sólidos Superpuestos */}
                {chartPoints.map((point, i) => (
                  <div 
                    key={i} 
                    className="absolute z-20 group/point"
                    style={{ left: `${point.x}%`, top: `${point.y}%`, transform: 'translate(-50%, -50%)' }}
                  >
                    {/* Tooltip Dinámico */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-background border border-borderMain text-textMain text-xs font-bold py-1 px-3 rounded-lg opacity-0 group-hover/point:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl translate-y-2 group-hover/point:translate-y-0">
                      {point.xp} XP
                    </div>

                    {/* Nodo Perfecto (Fondo sólido para tapar la línea) */}
                    <div className="w-3 h-3 bg-surface border-[2.5px] border-accent rounded-full shadow-[0_0_12px_rgba(0,180,216,0.6)] group-hover/point:scale-150 group-hover/point:bg-accent transition-all duration-300 cursor-pointer" />
                  </div>
                ))}
              </motion.div>

              {/* Días de la semana en la base (Sincronizados con left-12 right-4) */}
              <div className="absolute bottom-0 left-12 right-4 flex justify-between text-[10px] text-textMuted font-medium translate-y-1/2">
                {chartPoints.map((point, i) => (
                  <span key={i}>{point.day}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Gráfico Circular (Progreso General) */}
          <motion.div variants={itemVariants} className="bg-surface border border-borderMain rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center relative">
            <h2 className="text-base font-bold text-textMain absolute top-6 left-6">Progreso General</h2>
            <button className="absolute top-6 right-6 text-textMuted hover:text-textMain"><MoreHorizontal className="w-5 h-5" /></button>
            
            <div className="relative w-40 h-40 mt-8">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-surfaceHover" />
                <motion.circle 
                  cx="50" cy="50" r="35" stroke="var(--accent)" strokeWidth="8" fill="transparent" strokeLinecap="round"
                  initial={{ strokeDasharray: 219.9, strokeDashoffset: 219.9 }} animate={{ strokeDashoffset: 219.9 - (219.9 * 0.65) }} transition={{ duration: 1.5, ease: premiumEasing, delay: 0.8 }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-textMain">65%</span>
                <span className="text-[10px] text-textMuted font-medium">Completado</span>
              </div>
            </div>
            
            <div className="w-full mt-6 bg-background rounded-lg p-3 flex items-center justify-between border border-borderMain">
              <span className="text-xs font-medium text-textMuted">Lecciones</span>
              <span className="text-xs font-bold text-textMain">18 / 45</span>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div variants={itemVariants} className="bg-surface border border-borderMain rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-base font-bold text-textMain">Módulo en Progreso</h2>
            </div>
            <div className="space-y-3">
              {ACTIVE_MODULES.map((mod) => (
                <div key={mod.id} className="group flex items-center gap-4 p-3 rounded-xl hover:bg-surfaceHover border border-transparent transition-colors cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <PlayCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-textMain text-sm">{mod.title}</h3>
                    <div className="w-full h-1 bg-background rounded-full mt-2 overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: `${mod.progress}%` }} />
                    </div>
                  </div>
                  <button className="bg-primary text-white text-xs font-medium px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    Continuar
                  </button>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-surface border border-borderMain rounded-2xl p-6 shadow-sm">
            <h2 className="text-base font-bold text-textMain mb-6">Actividad Reciente</h2>
            <div className="space-y-4">
              {RECENT_ACTIVITY.map((activity) => (
                <div key={activity.id} className="flex gap-4 items-center group">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${activity.type === 'success' ? 'bg-accent/10 text-accent' : activity.type === 'lesson' ? 'bg-primary/10 text-primary' : 'bg-textMuted/10 text-textMuted'}`}>
                    <activity.icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-textMain">{activity.title}</h3>
                    <p className="text-xs text-textMuted">{activity.module}</p>
                  </div>
                  <span className="text-[10px] font-medium text-textMuted">{activity.time}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}