"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, Target, Sparkles, Code, 
  CheckCircle2, XCircle, ArrowRight, Lightbulb, 
  ChevronDown, MessageSquare, Workflow
} from 'lucide-react';
import Link from 'next/link';

export default function ModuleOneLessonTwoPage() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

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

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
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
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8b7bff]/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10">
          <Link href="/dashboard/modules/1" passHref legacyBehavior>
            <a className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md mb-6 hover:bg-white/10 transition-colors">
              <BookOpen className="w-4 h-4 text-[#8b7bff]" />
              Volver al Módulo 1
            </a>
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8b7bff]/20 border border-[#8b7bff]/30 text-[#8b7bff] text-xs font-bold uppercase tracking-widest mb-4 ml-4">
            Lección 2
          </div>

          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            Técnicas Avanzadas: <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b7bff] to-blue-400">
              Zero-Shot vs Few-Shot
            </span>
          </h1>
          
          <div className="bg-[#8b7bff]/10 border border-[#8b7bff]/20 rounded-2xl p-6 backdrop-blur-sm max-w-3xl">
            <p className="text-gray-200 leading-relaxed">
              <strong>Objetivo de esta clase:</strong> Entender que a veces darle instrucciones a la IA no es suficiente. Aprenderás a "entrenar" temporalmente a la IA usando ejemplos dentro de tu prompt para obtener resultados 100% predecibles.
            </p>
          </div>
        </div>
      </motion.section>

      {/* TEORÍA PROFUNDA */}
      <motion.section variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={fadeUp} className="bg-[#111111] border border-white/5 rounded-3xl p-8 shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Zero-Shot (Cero Ejemplos)</h3>
            <p className="text-gray-400 leading-relaxed text-sm mb-4">
              Es lo que hicimos en la lección anterior. Le das a la IA una instrucción clara, pero <strong>no le das ningún ejemplo de cómo debe lucir la respuesta final</strong>.
            </p>
            <p className="text-gray-400 leading-relaxed text-sm">
              <strong>¿Cuándo usarlo?</strong> Para tareas sencillas o generación de código estándar donde el formato no es estrictamente crítico.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-[#111111] border border-white/5 rounded-3xl p-8 shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6">
              <Workflow className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Few-Shot (Pocos Ejemplos)</h3>
            <p className="text-gray-400 leading-relaxed text-sm mb-4">
              Es la técnica secreta de los Senior. Consiste en incluir en tu prompt <strong>ejemplos reales de "Entrada y Salida"</strong> para que la IA imite el patrón exacto.
            </p>
            <p className="text-gray-400 leading-relaxed text-sm">
              <strong>¿Por qué existe?</strong> Porque para tareas complejas (como formatear datos de TikTok a un JSON específico), la IA necesita ver el "molde" para no equivocarse.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* COMPARATIVA VISUAL (APLICADO AL PROYECTO) */}
      <motion.section variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h2 className="text-2xl font-bold text-white tracking-tight mb-6 flex items-center gap-2">
          <Code className="w-6 h-6 text-[#8b7bff]" />
          Caso Práctico: Extracción de Datos
        </h2>
        <p className="text-sm text-gray-400 mb-6">Imagina que tienes texto crudo copiado de Instagram y quieres que la IA lo convierta en datos estructurados.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Zero-Shot */}
          <div className="bg-[#050505] border border-white/10 rounded-2xl overflow-hidden flex flex-col">
            <div className="bg-white/5 px-4 py-3 border-b border-white/10 flex items-center gap-2">
              <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">Técnica Zero-Shot</span>
            </div>
            <div className="p-6 flex-1">
              <p className="text-gray-400 font-mono text-sm leading-relaxed mb-4">
                "Extrae el nombre de usuario y los likes de este texto de Instagram y devuélvelo en formato JSON: '@usuario1 tuvo mil me gustas'"
              </p>
              <div className="bg-red-950/20 border border-red-500/20 p-4 rounded-xl">
                <span className="text-xs text-red-300 font-semibold block mb-1">Riesgo:</span>
                <p className="text-xs text-red-200/70">La IA podría devolver las llaves del JSON en inglés, o con un formato que tu sistema de minería de datos no entienda.</p>
              </div>
            </div>
          </div>

          {/* Few-Shot */}
          <div className="bg-[#050505] border border-[#8b7bff]/30 rounded-2xl overflow-hidden flex flex-col transform md:-translate-y-2 shadow-[0_10px_30px_rgba(139,123,255,0.1)]">
            <div className="bg-[#8b7bff]/10 px-4 py-3 border-b border-[#8b7bff]/20 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#8b7bff]" />
              <span className="text-xs font-bold text-[#8b7bff] uppercase tracking-wider">Técnica Few-Shot</span>
            </div>
            <div className="p-6 flex-1">
              <p className="text-emerald-100 font-mono text-sm leading-relaxed mb-4">
                "Extrae los datos. Sigue ESTRICTAMENTE este ejemplo:<br/><br/>
                <span className="text-gray-400">Texto: '@carlos_dev 500 likes'</span><br/>
                <span className="text-blue-400">Salida: {`{"usuario": "carlos_dev", "interacciones": 500}`}</span><br/><br/>
                Ahora hazlo con este texto: '@usuario1 tuvo mil me gustas'"
              </p>
              <div className="bg-emerald-950/20 border border-emerald-500/20 p-4 rounded-xl">
                <span className="text-xs text-emerald-300 font-semibold block mb-1">Garantía:</span>
                <p className="text-xs text-emerald-200/70">La IA imitará matemáticamente el ejemplo y usará exactamente las llaves "usuario" e "interacciones".</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* BUENAS PRÁCTICAS */}
      <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <div className="bg-[#111111] border border-emerald-500/20 rounded-3xl p-8">
          <h3 className="text-lg font-bold text-emerald-400 mb-6 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" /> Buenas Prácticas al dar Ejemplos
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
              <p className="text-sm text-gray-300">
                <strong className="text-white">Usa casos límite en tus ejemplos:</strong> Si a veces los likes de TikTok vienen con la letra "K" (ej: 1.5K), pon un ejemplo en tu prompt de cómo quieres que la IA transforme esa "K" en 1500.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
              <p className="text-sm text-gray-300">
                <strong className="text-white">Consistencia:</strong> Asegúrate de que los ejemplos que le das a la IA no contradigan las instrucciones iniciales de tu prompt.
              </p>
            </li>
          </ul>
        </div>
      </motion.section>

      {/* RESUMEN Y NAVEGACIÓN */}
      <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <div className="bg-[#111111] border border-white/5 rounded-3xl p-8 md:p-10 text-center relative overflow-hidden">
          <h2 className="text-xl font-bold text-white mb-4">Preparación para Evaluación</h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">
            Has dominado la anatomía de un prompt y las técnicas de entrenamiento con ejemplos (Few-Shot). Es momento de medir tus conocimientos en la primera evaluación de este módulo.
          </p>
          
          <Link href="/dashboard/modules/1/evaluacion-1" passHref legacyBehavior>
            <a className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-105 active:scale-95">
              Ir a la Evaluación 1
              <ArrowRight className="w-5 h-5" />
            </a>
          </Link>
        </div>
      </motion.section>

    </div>
  );
}