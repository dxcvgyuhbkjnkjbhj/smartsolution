"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, Brain, ListTree, Database, 
  CheckCircle2, XCircle, ArrowRight, Activity
} from 'lucide-react';
import Link from 'next/link';

export default function ModuleOneLessonFourPage() {
  const premiumEasing: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: premiumEasing } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-12 pb-24 font-sans text-white">
      
      {/* HERO DE LA LECCIÓN */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: premiumEasing }}
        className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#111111] to-[#050505] border border-white/5 p-10 md:p-14 shadow-2xl"
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10">
          <Link href="/dashboard/modules/1" passHref legacyBehavior>
            <a className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md mb-6 hover:bg-white/10 transition-colors">
              <BookOpen className="w-4 h-4 text-purple-400" />
              Volver al Módulo 1
            </a>
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-400 text-xs font-bold uppercase tracking-widest mb-4 ml-4">
            Lección 4
          </div>

          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            Chain of Thought: <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
              Forzando el Razonamiento
            </span>
          </h1>
          
          <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-6 backdrop-blur-sm max-w-3xl">
            <p className="text-gray-200 leading-relaxed">
              <strong>Objetivo de esta clase:</strong> Descubrir la técnica maestra "Cadena de Pensamiento". Si le pides a la IA que te dé código complejo directamente, cometerá errores. Aprenderás a pedirle que "piense en voz alta" antes de actuar.
            </p>
          </div>
        </div>
      </motion.section>

      {/* TEORÍA PROFUNDA */}
      <motion.section variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={fadeUp} className="bg-[#111111] border border-white/5 rounded-3xl p-8 shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6">
              <Activity className="w-6 h-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">¿Qué es Chain of Thought (CoT)?</h3>
            <p className="text-gray-400 leading-relaxed text-sm mb-4">
              Es una instrucción simple que se añade al final de tu prompt: <strong>"Piensa paso a paso antes de darme la solución"</strong>.
            </p>
            <p className="text-gray-400 leading-relaxed text-sm">
              Al obligar a la IA a escribir su proceso lógico en la pantalla (como si estuviera razonando en voz alta), mejoramos su precisión matemática y estructural hasta en un 80%.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-[#111111] border border-white/5 rounded-3xl p-8 shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6">
              <Brain className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">La Analogía del Estudiante</h3>
            <p className="text-gray-400 leading-relaxed text-sm mb-4">
              Si le preguntas a un estudiante en un examen de matemáticas cuánto es `345 * 87`, y le exiges la respuesta instantánea, se equivocará. 
            </p>
            <p className="text-gray-400 leading-relaxed text-sm">
              Si le das un papel para que anote el proceso, acertará. La IA funciona igual; la pantalla es su papel. Necesita escribir su lógica para procesarla.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* COMPARATIVA VISUAL (APLICADO AL PROYECTO) */}
      <motion.section variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h2 className="text-2xl font-bold text-white tracking-tight mb-6 flex items-center gap-2">
          <Database className="w-6 h-6 text-purple-400" />
          Caso Práctico: Diseñando la Base de Datos
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sin CoT */}
          <div className="bg-[#050505] border border-white/10 rounded-2xl overflow-hidden flex flex-col">
            <div className="bg-white/5 px-4 py-3 border-b border-white/10 flex items-center gap-2">
              <XCircle className="w-4 h-4 text-gray-400" />
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Malo: Salto directo al código</span>
            </div>
            <div className="p-6 flex-1">
              <p className="text-gray-400 font-mono text-sm leading-relaxed mb-4">
                "Crea las tablas SQL para almacenar publicaciones de Facebook, Reels de Instagram y Videos de YouTube."
              </p>
              <div className="bg-red-950/20 border border-red-500/20 p-4 rounded-xl">
                <p className="text-xs text-red-200/70">Error: La IA empezará a escupir código SQL inmediatamente. Creará tres tablas totalmente desconectadas y olvidarás campos clave como IDs externos.</p>
              </div>
            </div>
          </div>

          {/* Con CoT */}
          <div className="bg-indigo-950/20 border border-indigo-500/30 rounded-2xl overflow-hidden flex flex-col shadow-[0_10px_30px_rgba(99,102,241,0.1)] transform md:-translate-y-2">
            <div className="bg-indigo-950/40 px-4 py-3 border-b border-indigo-500/30 flex items-center gap-2">
              <ListTree className="w-4 h-4 text-indigo-400" />
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">Senior: Pensando paso a paso</span>
            </div>
            <div className="p-6 flex-1">
              <p className="text-indigo-100 font-mono text-sm leading-relaxed mb-4">
                "Crea la arquitectura de base de datos SQL para almacenar métricas de Facebook, Instagram y YouTube.<br/><br/>
                <span className="text-purple-400 font-bold">Antes de escribir el código SQL, piensa paso a paso:</span> analiza qué métricas comparten estas 3 redes y cómo relacionarlas eficientemente."
              </p>
              <div className="bg-emerald-950/20 border border-emerald-500/20 p-4 rounded-xl">
                <p className="text-xs text-emerald-200/70">Magia: La IA primero escribirá un texto analizando las similitudes, se dará cuenta de que es mejor hacer una sola tabla polimórfica, y el código resultante será de nivel Arquitecto.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* RESUMEN Y NAVEGACIÓN */}
      <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <div className="bg-[#111111] border border-white/5 rounded-3xl p-8 md:p-10 text-center relative overflow-hidden">
          <h2 className="text-xl font-bold text-white mb-4">Hora de la Evaluación</h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">
            Has aprendido a proteger tus prompts con delimitadores y a forzar a la IA a razonar estructuras complejas. Tienes el nivel teórico de un ingeniero de prompts. Demuéstralo.
          </p>
          
          <Link href="/dashboard/modules/1/evaluacion-2" passHref legacyBehavior>
            <a className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-400 hover:to-indigo-400 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:scale-105 active:scale-95">
              Ir a la Evaluación 2
              <ArrowRight className="w-5 h-5" />
            </a>
          </Link>
        </div>
      </motion.section>

    </div>
  );
}