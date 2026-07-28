"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Sparkles, Library, Search, MessageSquare, 
  CheckCircle2, XCircle, Lightbulb, ArrowRight, BookOpen, ExternalLink, Play
} from 'lucide-react';
import Link from 'next/link';

export default function LessonOnePage() {
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
      
      {/* HERO DE LA LECCIÓN */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: premiumEasing }}
        className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#111111] to-[#050505] border border-white/5 p-10 md:p-14 shadow-2xl"
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8b7bff]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="relative z-10">
          
          <Link href="/dashboard/modules/0" passHref legacyBehavior>
            <a className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md mb-6 hover:bg-white/10 transition-colors">
              <BookOpen className="w-4 h-4 text-[#8b7bff]" />
              Volver al Módulo 0
            </a>
          </Link>

          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            ¿Qué es la Inteligencia Artificial <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b7bff] to-blue-400">
              y por qué no debes temerle?
            </span>
          </h1>
          <div className="bg-[#8b7bff]/10 border border-[#8b7bff]/20 rounded-2xl p-6 backdrop-blur-sm max-w-3xl">
            <p className="text-gray-200 leading-relaxed">
              <strong>Bienvenido.</strong> Si estás leyendo esto, es porque has decidido aprender algo nuevo, poderoso y transformador. No te preocupes si nunca has escrito una línea de código. Este módulo está diseñado para llevarte de la mano.
            </p>
          </div>
        </div>
      </motion.section>

      {/* VIDEO DE APOYO PREMIUM */}
      <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Play className="w-6 h-6 text-[#8b7bff]" />
            Aprende visualmente
          </h2>
          <span className="text-xs font-medium text-[#8b7bff] bg-[#8b7bff]/10 px-3 py-1 rounded-full border border-[#8b7bff]/20">
            Introducción a la IA
          </span>
        </div>
        
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-[#050505] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
          {/* Brillo de fondo sutil */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#8b7bff]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <iframe 
            className="absolute top-0 left-0 w-full h-full z-10"
            src="https://www.youtube.com/embed/aY_JGEFhEhk?rel=0&modestbranding=1" 
            title="Video Introductorio a la IA" 
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </motion.section>

      {/* EXPLICACIÓN COMPLETA (Grid) */}
      <motion.section variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div variants={fadeUp} className="bg-[#111111] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
              <Brain className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">¿Qué es la IA?</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Es una calculadora extremadamente avanzada que ha leído millones de documentos para predecir la mejor respuesta.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="bg-[#111111] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
              <Lightbulb className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">¿Por qué existe?</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              La IA rompe la barrera de comandos: ahora podemos hablarle a la computadora en nuestro idioma natural.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="bg-[#111111] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
              <Search className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">¿Para qué sirve?</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Automatiza tareas, resume información y te ayuda a crear programas desde cero.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* ANALOGÍA */}
      <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative overflow-hidden bg-gradient-to-r from-blue-900/20 to-[#111111] border border-blue-500/20 rounded-3xl p-8 md:p-10">
        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
          <div className="w-20 h-20 shrink-0 rounded-2xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
            <Library className="w-10 h-10 text-blue-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-100 mb-2">La Analogía Perfecta</h3>
            <p className="text-blue-100/70 leading-relaxed">
              La Inteligencia Artificial es como <strong>un bibliotecario súper rápido</strong> que ya se ha leído todos los libros, los memorizó y puede darte la respuesta exacta, resumida y explicada en cuestión de segundos.
            </p>
          </div>
        </div>
      </motion.section>

      {/* RECURSOS EXTERNOS */}
      <motion.section variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h2 className="text-2xl font-bold text-white tracking-tight mb-6">Recursos para ampliar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="https://www.anthropic.com/claude" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 rounded-2xl bg-[#111111] border border-white/5 hover:border-[#8b7bff]/50 transition-colors group">
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-[#8b7bff]/20 transition-colors">
              <BookOpen className="w-6 h-6 text-gray-400 group-hover:text-[#8b7bff]" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Documentación de Anthropic</h3>
              <p className="text-xs text-gray-500">Conoce a fondo los modelos</p>
            </div>
            <ExternalLink className="w-5 h-5 text-gray-600 ml-auto group-hover:text-white" />
          </a>
          <a href="https://es.wikipedia.org/wiki/Inteligencia_artificial" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 rounded-2xl bg-[#111111] border border-white/5 hover:border-blue-500/50 transition-colors group">
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
              <Search className="w-6 h-6 text-gray-400 group-hover:text-blue-400" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Historia de la IA</h3>
              <p className="text-xs text-gray-500">Lectura recomendada (Wikipedia)</p>
            </div>
            <ExternalLink className="w-5 h-5 text-gray-600 ml-auto group-hover:text-white" />
          </a>
        </div>
      </motion.section>

      {/* RESUMEN Y CONCLUSIÓN */}
      <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <div className="bg-[#111111] border border-white/5 rounded-3xl p-8 md:p-10 text-center relative overflow-hidden">
          <div className="bg-[#050505] rounded-2xl p-6 border border-white/5 max-w-2xl mx-auto mb-10">
            <p className="text-gray-300 italic font-medium">
              "Entender que la IA es solo una herramienta a tu servicio es el primer paso para perder el miedo a la tecnología. En la próxima lección, conoceremos a la IA específica que nos acompañará en este viaje."
            </p>
          </div>
          
          <Link href="/dashboard/modules/0/leccion-2" passHref legacyBehavior>
            <a className="inline-flex items-center gap-2 bg-[#8b7bff] hover:bg-[#796ae6] text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(139,123,255,0.3)] hover:scale-105 active:scale-95">
              Continuar a la Lección 2
              <ArrowRight className="w-5 h-5" />
            </a>
          </Link>

        </div>
      </motion.section>

    </div>
  );
}