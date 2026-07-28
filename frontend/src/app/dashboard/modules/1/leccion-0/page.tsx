"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, Lightbulb, Rocket, Link as LinkIcon, 
  Crosshair, ArrowRight, BookOpen, BrainCircuit,
  TerminalSquare, CheckCircle2
} from 'lucide-react';
import Link from 'next/link';

export default function ModuleOneIntroPage() {
  // Tipado estricto para evitar errores en Framer Motion
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
    <div className="max-w-4xl mx-auto space-y-12 pb-24 font-sans text-white">
      
      {/* HERO DE PRESENTACIÓN */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: premiumEasing }}
        className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#111111] to-[#050505] border border-white/5 p-10 md:p-14 shadow-2xl"
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8b7bff]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="relative z-10">
          
          <Link href="/dashboard/modules" passHref legacyBehavior>
            <a className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md mb-6 hover:bg-white/10 transition-colors">
              <BookOpen className="w-4 h-4 text-[#8b7bff]" />
              Catálogo de Módulos
            </a>
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8b7bff]/20 border border-[#8b7bff]/30 text-[#8b7bff] text-xs font-bold uppercase tracking-widest mb-4 ml-4">
            Lección 0 • Presentación
          </div>

          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            Fundamentos de Prompts: <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b7bff] to-blue-400">
              El Arte de Hablar con la IA
            </span>
          </h1>
          <div className="bg-[#8b7bff]/10 border border-[#8b7bff]/20 rounded-2xl p-6 backdrop-blur-sm max-w-3xl">
            <p className="text-gray-200 leading-relaxed">
              Bienvenido al Módulo 1. Aquí dejaremos de hablarle a la Inteligencia Artificial como si fuera un buscador de internet, y aprenderemos a darle instrucciones precisas como verdaderos ingenieros de software. 
            </p>
          </div>
        </div>
      </motion.section>

      {/* ¿QUÉ APRENDERÁS Y POR QUÉ ES IMPORTANTE? */}
      <motion.section variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Qué aprenderá */}
          <motion.div variants={fadeUp} className="bg-[#111111] border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-colors shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
              <BrainCircuit className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">¿Qué aprenderás?</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                <span>La anatomía de una instrucción perfecta (El "Prompt").</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                <span>Asignación de roles y delimitadores de formato.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                <span>Técnicas para que la IA no invente información (Cero Alucinaciones).</span>
              </li>
            </ul>
          </motion.div>

          {/* Por qué es importante */}
          <motion.div variants={fadeUp} className="bg-emerald-950/20 border border-emerald-500/20 rounded-3xl p-8 hover:border-emerald-500/30 transition-colors shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-emerald-100 mb-4">¿Por qué es importante?</h3>
            <p className="text-sm text-emerald-100/80 leading-relaxed mb-4">
              En la programación moderna, quien escribe el mejor prompt, obtiene el mejor código. Si le das a la IA una instrucción vaga, te devolverá un sistema roto.
            </p>
            <p className="text-sm text-emerald-100/80 leading-relaxed">
              Aprender esto es la diferencia entre pasar 5 horas corrigiendo errores, o tener un código funcional en 5 minutos.
            </p>
          </motion.div>

        </div>
      </motion.section>

      {/* CONTEXTO DEL PROYECTO (EL HILO CONDUCTOR) */}
      <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <div className="bg-[#111111] border border-[#8b7bff]/30 rounded-3xl p-8 md:p-10 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-[#8b7bff]/5 rounded-full blur-3xl" />
          
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3 relative z-10">
            <Crosshair className="w-6 h-6 text-[#8b7bff]" />
            Nuestro Terreno de Pruebas
          </h3>
          <p className="text-gray-300 leading-relaxed relative z-10 mb-6">
            Para que este módulo no sea aburrida teoría genérica, aplicaremos todo lo aprendido en un caso de uso fascinante: <strong>Un sistema de minería de datos para redes sociales</strong>. 
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
            <div className="bg-[#050505] border border-white/5 rounded-xl p-4 text-center">
              <span className="text-sm font-semibold text-blue-500">Facebook</span>
            </div>
            <div className="bg-[#050505] border border-white/5 rounded-xl p-4 text-center">
              <span className="text-sm font-semibold text-pink-500">Instagram</span>
            </div>
            <div className="bg-[#050505] border border-white/5 rounded-xl p-4 text-center">
              <span className="text-sm font-semibold text-white">TikTok</span>
            </div>
            <div className="bg-[#050505] border border-white/5 rounded-xl p-4 text-center">
              <span className="text-sm font-semibold text-red-500">YouTube</span>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-6 relative z-10">
            Aprenderemos a pedirle a la IA que estructure bases de datos y algoritmos para analizar estas 4 plataformas específicas.
          </p>
        </div>
      </motion.section>

      {/* RELACIÓN Y HABILIDADES */}
      <motion.section variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <motion.div variants={fadeUp} className="bg-[#111111] border border-white/5 rounded-3xl p-8">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-amber-400" />
            Habilidades a desarrollar
          </h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-xs text-gray-300">Pensamiento Lógico</span>
            <span className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-xs text-gray-300">Ingeniería de Prompts</span>
            <span className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-xs text-gray-300">Estructuración de Contexto</span>
            <span className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-xs text-gray-300">Resolución de Problemas</span>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="bg-[#111111] border border-white/5 rounded-3xl p-8">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <LinkIcon className="w-5 h-5 text-[#8b7bff]" />
            ¿Qué sigue después?
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Este módulo es el puente perfecto hacia el Módulo 2. Una vez que sepas cómo comunicarte perfectamente con la IA, instalaremos a Claude directamente en tu computadora (CLI) para que empiece a escribir código real en tus archivos basado en los prompts que hoy vas a dominar.
          </p>
        </motion.div>

      </motion.section>

      {/* MOTIVACIÓN Y ACCIÓN */}
      <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <div className="bg-gradient-to-br from-[#111111] to-[#050505] border border-white/10 rounded-3xl p-8 md:p-10 text-center relative overflow-hidden shadow-2xl">
          
          <Rocket className="w-12 h-12 text-[#8b7bff] mx-auto mb-6 opacity-80" />
          
          <h2 className="text-2xl font-bold text-white mb-4">¿Estás listo para tomar el control?</h2>
          
          <div className="bg-[#050505] rounded-2xl p-6 border border-white/5 max-w-2xl mx-auto mb-10">
            <p className="text-gray-300 italic font-medium leading-relaxed">
              "Un buen programador no es el que memoriza todo el código del mundo, sino el que sabe hacerle las preguntas correctas a las herramientas correctas."
            </p>
          </div>
          
          <Link href="/dashboard/modules/1/leccion-1" passHref legacyBehavior>
            <a className="inline-flex items-center gap-2 bg-[#8b7bff] hover:bg-[#796ae6] text-white font-semibold px-10 py-4 rounded-xl transition-all shadow-[0_0_30px_rgba(139,123,255,0.4)] hover:scale-105 active:scale-95">
              Comenzar la Lección 1
              <ArrowRight className="w-5 h-5" />
            </a>
          </Link>

        </div>
      </motion.section>

    </div>
  );
}