"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, Brain, Terminal, CreditCard, PlayCircle, 
  ShieldCheck, CheckCircle2, ArrowLeft 
} from 'lucide-react';
import Link from 'next/link';

const LESSONS_DATA = [
  { id: 'leccion-1', title: '¿Qué es la IA?', desc: 'Desmitificando conceptos básicos de la Inteligencia Artificial.', icon: Brain, type: 'lesson', completed: true },
  { id: 'leccion-2', title: 'Conociendo a Claude', desc: 'Tu nuevo asistente y copiloto de programación.', icon: MessageSquareIcon, type: 'lesson', completed: false },
  { id: 'evaluacion-1', title: 'Evaluación 1', desc: 'Comprueba lo aprendido en las primeras lecciones.', icon: ShieldCheck, type: 'quiz', completed: false },
  { id: 'leccion-3', title: 'Planes y Cuentas', desc: 'Registra tu cuenta en Anthropic y elige tu plan.', icon: CreditCard, type: 'lesson', completed: false },
  { id: 'leccion-4', title: 'El mito de la API Key', desc: 'Entiende cómo evitar cobros sorpresa.', icon: Terminal, type: 'lesson', completed: false },
  { id: 'leccion-5', title: 'Preparando tu PC', desc: 'Instalación de Node.js (Tu primer motor).', icon: PlayCircle, type: 'lesson', completed: false },
  { id: 'evaluacion-2', title: 'Evaluación Final', desc: 'Certifica tus conocimientos del Módulo 0.', icon: ShieldCheck, type: 'quiz', completed: false },
];

function MessageSquareIcon(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
}

export default function ModuleZeroLessonsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  
  // 1. Declaramos los números con el tipado estricto
  const premiumEasing: [number, number, number, number] = [0.22, 1, 0.36, 1];

  // 2. Se lo pasamos a las variantes
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { ease: premiumEasing, duration: 0.5 } }
  };

  return (
    <div className="max-w-6xl mx-auto pb-20 font-sans text-white">
      
      {/* SOLUCIÓN: passHref legacyBehavior y etiqueta <a> */}
      <Link href="/dashboard/modules" passHref legacyBehavior>
        <a className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Volver a Módulos
        </a>
      </Link>

      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] border border-white/10 text-gray-300 text-xs font-medium mb-4">
          <BookOpen className="w-3.5 h-3.5 text-[#8b7bff]" />
          Módulo 0
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">Lecciones del Módulo</h1>
        <p className="text-gray-400">Antes de empezar. Selecciona una lección para comenzar.</p>
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
              
              {/* SOLUCIÓN APLICADA AQUÍ TAMBIÉN */}
              <Link href={`/dashboard/modules/0/${lesson.id}`} passHref legacyBehavior>
                <a className={`block h-full bg-[#111111] border ${isQuiz ? 'border-[#8b7bff]/30 bg-gradient-to-b from-[#8b7bff]/5 to-transparent' : 'border-white/5'} hover:border-white/20 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative overflow-hidden group`}>
                  
                  {isQuiz && <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#8b7bff] to-blue-500" />}

                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${lesson.completed ? 'bg-emerald-500/10 text-emerald-400' : isQuiz ? 'bg-[#8b7bff]/20 text-[#8b7bff]' : 'bg-white/5 text-gray-400 group-hover:text-white'}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    {lesson.completed && (
                      <span className="flex items-center gap-1 text-emerald-400 text-xs font-medium">
                        <CheckCircle2 className="w-4 h-4" />
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className={`text-sm font-bold mb-1 uppercase tracking-wider ${isQuiz ? 'text-[#8b7bff]' : 'text-gray-500'}`}>
                      {isQuiz ? 'Evaluación' : `Lección ${index + 1 - (index > 2 ? 1 : 0) - (index > 5 ? 1 : 0)}`}
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