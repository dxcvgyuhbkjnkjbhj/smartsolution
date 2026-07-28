"use client";

import React, { useEffect, useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, Brain, Terminal, Code2, Server, Workflow, 
  CheckCircle2, Lock, ShieldCheck, MessageSquare, ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const MODULES_DATA = [
  { id: 0, title: 'Antes de Empezar', desc: 'Instalación, mentalidad y preparación del entorno de trabajo.', icon: Brain, isLocked: false, progress: 100 },
  { id: 1, title: 'Fundamentos de Prompts', desc: 'Cómo hablarle a la IA para obtener código preciso y sin errores.', icon: MessageSquare, isLocked: false, progress: 30 },
  { id: 2, title: 'Tu primer Asistente CLI', desc: 'Uso básico de la terminal y comandos mágicos de Claude.', icon: Terminal, isLocked: false, progress: 0 },
  { id: 3, title: 'Arquitectura de Proyectos', desc: 'Estructurando un proyecto completo desde cero con IA.', icon: Workflow, isLocked: true, progress: 0 },
  { id: 4, title: 'Desarrollo Frontend UI', desc: 'Creando interfaces premium con React y Tailwind.', icon: Code2, isLocked: true, progress: 0 },
  { id: 5, title: 'Backend y Bases de Datos', desc: 'Generación de APIs, esquemas SQL y conexiones seguras.', icon: Server, isLocked: true, progress: 0 },
];

function ModulesContent() {
  const searchParams = useSearchParams();
  const [hasCompletedDiagnostic, setHasCompletedDiagnostic] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  
  // 1. Le decimos a TypeScript que son exactamente 4 números
  const premiumEasing: [number, number, number, number] = [0.22, 1, 0.36, 1];

  // 2. Usamos la variable ya validada
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { ease: premiumEasing, duration: 0.6 } }
  };

  useEffect(() => {
    if (searchParams.get('diagnostico') === 'completado') {
      setHasCompletedDiagnostic(true);
    }
  }, [searchParams]);

  return (
    <div className="max-w-6xl mx-auto pb-20 font-sans text-white">
      
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden bg-gradient-to-br from-[#111111] to-[#050505] border border-white/5 rounded-3xl p-8 md:p-12 mb-12 shadow-2xl"
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8b7bff]/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Ruta de Aprendizaje
            </h1>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Aquí encontrarás todos los módulos diseñados para convertirte en un experto. Explora el temario, conoce de qué tratan y avanza a tu propio ritmo.
            </p>
            
            {!hasCompletedDiagnostic ? (
              <div className="bg-[#8b7bff]/10 border border-[#8b7bff]/30 rounded-2xl p-6 backdrop-blur-md">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#8b7bff]/20 flex items-center justify-center shrink-0 mt-1">
                    <Brain className="w-5 h-5 text-[#8b7bff]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">¿Es tu primera vez aquí?</h3>
                    <p className="text-sm text-gray-300 mb-4">
                      Toma nuestro test rápido de nivelación para saber qué tanto conoces de IA y recomendarte el módulo perfecto para empezar.
                    </p>
                    <Link href="/dashboard/modules/diagnostic" className="inline-flex items-center gap-2 bg-[#8b7bff] hover:bg-[#796ae6] text-white font-medium text-sm px-6 py-2.5 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(139,123,255,0.3)]">
                      <span>Iniciar Evaluación</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6 backdrop-blur-md">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-emerald-100">¡Nivel Evaluado Exitosamente!</h3>
                    <p className="text-sm text-emerald-200/70">
                      Según tu experiencia, te sugerimos empezar directamente por el <strong>Módulo 2</strong>.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="hidden md:flex shrink-0">
            <BookOpen className="w-40 h-40 text-white/5 drop-shadow-[0_0_50px_rgba(139,123,255,0.2)]" />
          </div>
        </div>
      </motion.section>

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white tracking-tight">Temario Completo</h2>
        <p className="text-sm text-gray-500 mt-1">Selecciona un módulo para comenzar tu práctica.</p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {MODULES_DATA.map((module) => {
          const Icon = module.icon;
          const isCompleted = module.progress === 100;
          const isSuggested = hasCompletedDiagnostic && module.id === 2;

          return (
            <motion.div key={module.id} variants={itemVariants} className="relative group h-full">
              {isSuggested && (
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8b7bff] to-blue-500 rounded-[1.35rem] blur opacity-50 animate-pulse" />
              )}
              <Link href={module.isLocked ? '#' : `/dashboard/modules/${module.id}`} className={`block h-full relative bg-[#111111] border ${isSuggested ? 'border-transparent' : 'border-white/5 group-hover:border-white/20'} rounded-2xl p-6 transition-all duration-300 ${module.isLocked ? 'opacity-60 cursor-not-allowed' : 'hover:-translate-y-1'}`}>
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isCompleted ? 'bg-emerald-500/10 text-emerald-400' : module.isLocked ? 'bg-white/5 text-gray-500' : 'bg-[#8b7bff]/10 text-[#8b7bff]'}`}>
                    {module.isLocked ? <Lock className="w-5 h-5" /> : <Icon className="w-6 h-6" />}
                  </div>
                  {isSuggested && (
                    <span className="px-3 py-1 bg-[#8b7bff] text-white text-[10px] font-bold uppercase tracking-wider rounded-full">Sugerido</span>
                  )}
                  {isCompleted && (
                    <span className="flex items-center gap-1 text-emerald-400 text-xs font-medium">
                      <CheckCircle2 className="w-4 h-4" /> Completado
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Módulo {module.id}</h3>
                  <h2 className="text-xl font-semibold text-white mb-2 leading-tight">{module.title}</h2>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6 line-clamp-2">{module.desc}</p>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default function ModulesHubPage() {
  return (
    <Suspense fallback={<div className="p-8 text-gray-400">Cargando catálogo...</div>}>
      <ModulesContent />
    </Suspense>
  );
}