"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, Terminal, Code2, ShieldCheck, CheckCircle2, ArrowLeft, PlayCircle
} from 'lucide-react';
import Link from 'next/link';

// Tipado estricto solucionado
const premiumEasing: [number, number, number, number] = [0.22, 1, 0.36, 1];

const LESSONS_DATA = [
  { id: 'leccion-0', title: 'Presentación del CLI', desc: 'Conoce la herramienta que automatizará tu escritura de código.', icon: BookOpen, type: 'lesson', completed: false },
  { id: 'leccion-1', title: 'La Terminal sin miedo', desc: 'Aprende a navegar por carpetas usando solo comandos de texto.', icon: Terminal, type: 'lesson', completed: false },
  { id: 'leccion-2', title: 'Comandos Básicos', desc: 'Dominando cd, ls y mkdir para movernos como hackers.', icon: Code2, type: 'lesson', completed: false },
  { id: 'evaluacion-1', title: 'Evaluación 1', desc: 'Prueba tus conocimientos sobre comandos de consola.', icon: ShieldCheck, type: 'quiz', completed: false },
  { id: 'leccion-3', title: 'Instalando Claude Code', desc: 'Llevando la IA directamente a tu computadora.', icon: PlayCircle, type: 'lesson', completed: false },
  { id: 'leccion-4', title: 'Autorización y Seguridad', desc: 'Conectando tu cuenta de Anthropic con tu consola local.', icon: ShieldCheck, type: 'lesson', completed: false },
  { id: 'evaluacion-2', title: 'Evaluación 2', desc: 'Verifica la correcta configuración de tu entorno.', icon: ShieldCheck, type: 'quiz', completed: false },
  { id: 'leccion-5', title: 'Tu Primer Script IA', desc: 'Generando código automáticamente desde la terminal.', icon: Terminal, type: 'lesson', completed: false },
  { id: 'evaluacion-final', title: 'Evaluación Final', desc: 'Certifica tu dominio total del Módulo 2.', icon: ShieldCheck, type: 'quiz', completed: false },
];

export default function ModuleTwoHubPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { ease: premiumEasing, duration: 0.5 } }
  };

  return (
    <div className="max-w-6xl mx-auto pb-20 font-sans text-white">
      <Link href="/dashboard/modules" passHref legacyBehavior>
        <a className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Volver al Catálogo
        </a>
      </Link>

      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] border border-white/10 text-gray-300 text-xs font-medium mb-4">
          <Terminal className="w-3.5 h-3.5 text-blue-400" />
          Módulo 2
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">Tu Primer Asistente CLI</h1>
        <p className="text-gray-400">Es hora de perderle el miedo a la consola y dejar que la IA programe por ti.</p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {LESSONS_DATA.map((lesson, index) => {
          const Icon = lesson.icon;
          const isQuiz = lesson.type === 'quiz';

          return (
            <motion.div key={lesson.id} variants={itemVariants} className="h-full">
              <Link href={`/dashboard/modules/1/${lesson.id}`} passHref legacyBehavior>
                <a className={`block h-full bg-[#111111] border ${isQuiz ? 'border-blue-500/30 bg-gradient-to-b from-blue-500/5 to-transparent' : 'border-white/5'} hover:border-white/20 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative overflow-hidden group`}>
                  
                  {isQuiz && <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 to-[#8b7bff]" />}

                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${lesson.completed ? 'bg-emerald-500/10 text-emerald-400' : isQuiz ? 'bg-blue-500/20 text-blue-400' : 'bg-white/5 text-gray-400 group-hover:text-white'}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    {lesson.completed && (
                      <span className="flex items-center gap-1 text-emerald-400 text-xs font-medium">
                        <CheckCircle2 className="w-4 h-4" />
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className={`text-sm font-bold mb-1 uppercase tracking-wider ${isQuiz ? 'text-blue-400' : 'text-gray-500'}`}>
                      {lesson.title.includes('Evaluación') ? 'Evaluación' : `Lección`}
                    </h3>
                    <h2 className="text-xl font-semibold text-white mb-2">{lesson.title}</h2>
                    <p className="text-sm text-gray-400 line-clamp-2">{lesson.desc}</p>
                  </div>
                </a>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}