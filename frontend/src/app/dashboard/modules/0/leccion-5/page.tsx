"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, Cpu, Wrench, CheckCircle2, XCircle, 
  ArrowRight, BookOpen, Layers
} from 'lucide-react';
import Link from 'next/link';

export default function LessonFivePage() {
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
            Tu espacio de trabajo: <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b7bff] to-blue-400">
              Preparando tu PC
            </span>
          </h1>
          <div className="bg-[#8b7bff]/10 border border-[#8b7bff]/20 rounded-2xl p-6 backdrop-blur-sm max-w-3xl">
            <p className="text-gray-200 leading-relaxed">
              <strong>Objetivo:</strong> Entender qué es un "Entorno de Ejecución" de forma conceptual. No programaremos hoy, solo dejaremos tu equipo listo para que la magia suceda en el futuro.
            </p>
          </div>
        </div>
      </motion.section>

      {/* EXPLICACIÓN COMPLETA (Grid) */}
      <motion.section variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div variants={fadeUp} className="bg-[#111111] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
              <Layers className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Fuera del navegador</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Hasta ahora, todo lo que haces (ver videos, usar IA) ocurre dentro del navegador web (Chrome, Edge). Para crear tecnología, necesitamos que tu propia PC entienda instrucciones.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="bg-[#111111] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
              <Cpu className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">El Entorno / Motor</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Tu computadora habla un idioma nativo (ceros y unos). Para darle órdenes, necesitamos un "traductor". Ese motor que instalaremos se llama <strong>Node.js</strong>.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="bg-[#111111] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
              <Terminal className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">¿Para qué sirve?</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Sirve para que tu computadora se vuelva lo suficientemente "lista" como para ejecutar los programas que nosotros (y Claude) diseñaremos más adelante.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* ANALOGÍA */}
      <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative overflow-hidden bg-gradient-to-r from-gray-800 to-[#111111] border border-gray-600/30 rounded-3xl p-8 md:p-10">
        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
          <div className="w-20 h-20 shrink-0 rounded-2xl bg-gray-700/50 flex items-center justify-center border border-gray-500/50 shadow-xl">
            <Wrench className="w-10 h-10 text-gray-300" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-100 mb-2">La Analogía del Auto sin Motor</h3>
            <p className="text-gray-300 leading-relaxed">
              Imagina que compras un auto espectacular con asientos de cuero y radio, pero viene sin motor. Tiene ruedas, pero no avanza. <strong>Node.js es ese motor</strong>. Una vez que lo instalas en tu computadora, cierras el capó y casi nunca más lo vuelves a mirar, pero gracias a él, todas tus futuras aplicaciones funcionarán.
            </p>
          </div>
        </div>
      </motion.section>

      {/* BUENAS PRÁCTICAS Y ERRORES */}
      <motion.section variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Buenas Prácticas */}
        <div className="bg-emerald-950/20 border border-emerald-500/20 rounded-3xl p-8">
          <h3 className="text-lg font-bold text-emerald-400 mb-6 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" /> Buenas Prácticas
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
              <p className="text-sm text-emerald-100/80">
                <strong className="text-emerald-200">Instalación única:</strong> En el desarrollo, instalamos herramientas base (como este motor) una sola vez. No debes sentir que tienes que abrir ese programa todos los días.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
              <p className="text-sm text-emerald-100/80">
                <strong className="text-emerald-200">Pierde el miedo a la Terminal:</strong> Más adelante usaremos pantallas de texto negro (Terminal) para encender el motor. Es completamente inofensiva.
              </p>
            </li>
          </ul>
        </div>

        {/* Errores Comunes */}
        <div className="bg-red-950/20 border border-red-500/20 rounded-3xl p-8">
          <h3 className="text-lg font-bold text-red-400 mb-6 flex items-center gap-2">
            <XCircle className="w-5 h-5" /> Errores Comunes
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
              <p className="text-sm text-red-100/80">
                <strong className="text-red-200">Buscarle botones al Motor:</strong> Muchos instalan Node.js, le dan doble clic y ven una ventana negra que se cierra rápido. Piensan que se rompió. ¡No es un programa con botones, corre en el fondo!
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
              <p className="text-sm text-red-100/80">
                <strong className="text-red-200">Querer aprender todo hoy:</strong> No intentes buscar tutoriales avanzados de cómo programar en Node.js todavía. Solo requieres tenerlo instalado.
              </p>
            </li>
          </ul>
        </div>

      </motion.section>

      {/* RESUMEN Y CONCLUSIÓN */}
      <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <div className="bg-[#111111] border border-white/5 rounded-3xl p-8 md:p-10 text-center relative overflow-hidden">
          
          <h2 className="text-xl font-bold text-white mb-4">En Resumen</h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">
            Para programar y usar herramientas avanzadas directamente en tu equipo, necesitamos salir del navegador. Para ello, instalaremos un motor (Node.js) que hará las veces de traductor.
          </p>

          <div className="bg-[#050505] rounded-2xl p-6 border border-white/5 max-w-2xl mx-auto mb-10">
            <p className="text-gray-300 italic font-medium">
              "¡Felicidades! Has completado las lecciones del Módulo 0. Has construido una base mental poderosa. Es hora de certificar tus conocimientos en la evaluación final."
            </p>
          </div>
          
          <Link href="/dashboard/modules/0/evaluacion-2" passHref legacyBehavior>
            <a className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8b7bff] to-blue-600 hover:from-[#796ae6] hover:to-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(139,123,255,0.3)] hover:scale-105 active:scale-95">
              Ir a la Evaluación Final
              <ArrowRight className="w-5 h-5" />
            </a>
          </Link>

        </div>
      </motion.section>

    </div>
  );
}