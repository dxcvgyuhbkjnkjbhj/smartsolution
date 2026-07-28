"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, BrainCircuit, Target, Code, 
  CheckCircle2, XCircle, ArrowRight, Lightbulb, 
  MessageSquare, Layers, AlertTriangle, ChevronDown, Wrench
} from 'lucide-react';
import Link from 'next/link';

export default function ModuleOneLessonOnePage() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  // Tipado estricto para Framer Motion (Soluciona el error de TypeScript)
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
            Lección 1
          </div>

          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            La Anatomía de un <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b7bff] to-blue-400">
              Prompt Perfecto
            </span>
          </h1>
          
          <div className="bg-[#8b7bff]/10 border border-[#8b7bff]/20 rounded-2xl p-6 backdrop-blur-sm max-w-3xl">
            <p className="text-gray-200 leading-relaxed">
              <strong>Objetivo de esta clase:</strong> Entender a profundidad qué es un prompt, por qué los modelos de lenguaje necesitan estructuras estrictas y cómo redactar instrucciones que garanticen que la IA escriba el código exacto que necesitas a la primera.
            </p>
          </div>
        </div>
      </motion.section>

      {/* TEORÍA PROFUNDA: QUÉ, POR QUÉ Y PARA QUÉ */}
      <motion.section variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <motion.div variants={fadeUp} className="bg-[#111111] border border-white/5 rounded-3xl p-8 shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
              <MessageSquare className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">¿Qué es exactamente un Prompt?</h3>
            <p className="text-gray-400 leading-relaxed text-sm mb-4">
              Un prompt no es solo "hacerle una pregunta al chat". En ingeniería de software, un prompt es el <strong>conjunto de parámetros de entrada (input)</strong> que le damos a un Modelo de Lenguaje Grande (LLM) para condicionar su respuesta (output).
            </p>
            <p className="text-gray-400 leading-relaxed text-sm">
              Es el equivalente a compilar código: si la sintaxis de tu instrucción es pobre, el resultado tendrá "errores lógicos" (alucinaciones).
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-[#111111] border border-white/5 rounded-3xl p-8 shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6">
              <BrainCircuit className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">¿Por qué existe y cómo funciona?</h3>
            <p className="text-gray-400 leading-relaxed text-sm mb-4">
              La IA no "piensa" como un humano; funciona prediciendo la siguiente palabra más lógica basándose en el contexto que le das. Si le das 5 palabras, tiene millones de posibilidades de equivocarse. 
            </p>
            <p className="text-gray-400 leading-relaxed text-sm">
              Existe para <strong>acotar el margen de error matemático</strong>. Al usar una estructura específica, obligamos a la IA a buscar respuestas solo en la "sección" de su cerebro que nos interesa.
            </p>
          </motion.div>

        </div>
      </motion.section>

      {/* LA ESTRUCTURA FUNDAMENTAL (CORE CONCEPT) */}
      <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <div className="bg-gradient-to-r from-blue-900/10 to-purple-900/10 border border-white/10 rounded-3xl p-8 md:p-10">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Layers className="w-7 h-7 text-[#8b7bff]" />
            Los 4 Pilares de un Prompt de Nivel Senior
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold shrink-0">1</div>
                <div>
                  <h4 className="font-bold text-white mb-1">El Rol (Persona)</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">Define quién debe ser la IA. <em>Ej: "Actúa como un Arquitecto de Software experto en bases de datos."</em> Esto filtra inmediatamente respuestas genéricas de Wikipedia.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold shrink-0">2</div>
                <div>
                  <h4 className="font-bold text-white mb-1">El Contexto (Fondo)</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">El "por qué" y el "dónde". <em>Ej: "Estoy desarrollando una tesis para extraer datos de Facebook y TikTok para la universidad."</em></p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold shrink-0">3</div>
                <div>
                  <h4 className="font-bold text-white mb-1">La Tarea (Acción)</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">El verbo principal, claro e inequívoco. <em>Ej: "Escribe un script en Python que se conecte a la API y guarde los likes."</em></p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold shrink-0">4</div>
                <div>
                  <h4 className="font-bold text-white mb-1">El Formato (Salida)</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">Cómo quieres recibir la información. <em>Ej: "Entrégame solo el código comentado, sin explicaciones largas, y una tabla de requerimientos."</em></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ANALOGÍA DIDÁCTICA */}
      <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative overflow-hidden bg-[#111111] border border-white/5 rounded-3xl p-8 shadow-xl">
        <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
          <div className="w-16 h-16 shrink-0 rounded-2xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
            <Wrench className="w-8 h-8 text-orange-400" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-2">La Analogía del Arquitecto</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Imagina que le dices a un constructor: <em>"Hazme una casa"</em>. Podría hacerte una cabaña de madera o una mansión; el resultado es impredecible. Un prompt perfecto es como entregarle <strong>los planos exactos al arquitecto</strong>: le dices los metros cuadrados (Contexto), el estilo (Rol), cuántas habitaciones (Tarea) y los materiales específicos (Formato).
            </p>
          </div>
        </div>
      </motion.section>

      {/* COMPARATIVA ANTES Y DESPUÉS (APLICADO AL PROYECTO) */}
      <motion.section variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h2 className="text-2xl font-bold text-white tracking-tight mb-6 flex items-center gap-2">
          <Target className="w-6 h-6 text-[#8b7bff]" />
          Ejemplo del Mundo Real
        </h2>
        <p className="text-sm text-gray-400 mb-6">Aplicado al sistema de minería de datos que definimos en la introducción.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* El Prompt Novato */}
          <div className="bg-red-950/10 border border-red-500/20 rounded-2xl overflow-hidden flex flex-col">
            <div className="bg-red-950/30 px-4 py-3 border-b border-red-500/20 flex items-center gap-2">
              <XCircle className="w-4 h-4 text-red-400" />
              <span className="text-xs font-bold text-red-400 uppercase tracking-wider">Prompt Novato (Malo)</span>
            </div>
            <div className="p-6">
              <p className="text-gray-300 font-mono text-sm leading-relaxed italic">
                "Hazme un código para sacar datos de Facebook y TikTok."
              </p>
              <div className="mt-6 pt-4 border-t border-red-500/10">
                <span className="text-xs text-red-300/70 font-semibold block mb-2">RESULTADO DE LA IA:</span>
                <p className="text-xs text-red-200/50">La IA te dará un código genérico que probablemente no funcione, asumiendo lenguajes que no usas y dándote explicaciones que no necesitas.</p>
              </div>
            </div>
          </div>

          {/* El Prompt Senior */}
          <div className="bg-emerald-950/10 border border-emerald-500/30 rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(16,185,129,0.1)] flex flex-col transform md:-translate-y-2">
            <div className="bg-emerald-950/30 px-4 py-3 border-b border-emerald-500/30 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Prompt Senior (Excelente)</span>
            </div>
            <div className="p-6">
              <p className="text-emerald-100 font-mono text-sm leading-relaxed">
                <span className="text-blue-400">[Rol]</span> Actúa como un Ingeniero de Datos Senior. <br/><br/>
                <span className="text-amber-400">[Contexto]</span> Estoy desarrollando un sistema informático de minería de datos para las redes sociales de mi universidad. <br/><br/>
                <span className="text-purple-400">[Tarea]</span> Escribe un script en Python que se conecte a la API de TikTok y extraiga el número de reproducciones de un video. <br/><br/>
                <span className="text-pink-400">[Formato]</span> Devuelve SOLO el código limpio y comentado.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* BUENAS PRÁCTICAS Y ERRORES COMUNES */}
      <motion.section variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#111111] border border-emerald-500/20 rounded-3xl p-8">
          <h3 className="text-lg font-bold text-emerald-400 mb-6 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" /> Mejores Prácticas
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
              <p className="text-sm text-gray-300">
                <strong className="text-white">Divide y vencerás:</strong> No pidas el sistema completo en un solo prompt. Pide primero la estructura de la base de datos, luego la conexión, luego la vista.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
              <p className="text-sm text-gray-300">
                <strong className="text-white">Usa delimitadores:</strong> Usa comillas triples (`"""`) o markdown para separar tu instrucción del código que le estás pegando a la IA para que analice.
              </p>
            </li>
          </ul>
        </div>

        <div className="bg-[#111111] border border-rose-500/20 rounded-3xl p-8">
          <h3 className="text-lg font-bold text-rose-400 mb-6 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" /> Errores Frecuentes
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
              <p className="text-sm text-gray-300">
                <strong className="text-white">Falta de contexto técnico:</strong> Asumir que la IA sabe qué versión de lenguaje usas. Siempre especifica (Ej: "Usa React 18 y Tailwind CSS").
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
              <p className="text-sm text-gray-300">
                <strong className="text-white">Ser descortés lógicamente:</strong> No se trata de decir "por favor", se trata de no contradecirte en la misma instrucción, lo que causa alucinaciones (inventar código).
              </p>
            </li>
          </ul>
        </div>
      </motion.section>

      {/* ACORDEÓN DE CURIOSIDADES (Profundización interactiva) */}
      <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-yellow-400" />
          Para los curiosos: Profundización Técnica
        </h3>
        <div className="space-y-3">
          {[
            {
              title: "¿Qué es una Alucinación en la IA?",
              content: "Ocurre cuando la IA no tiene suficiente contexto en tu prompt y 'rellena' los huecos inventando funciones de código que no existen, librerías falsas o datos incorrectos, pero te los presenta con total seguridad."
            },
            {
              title: "¿La IA tiene memoria?",
              content: "Sí, dentro del mismo chat. Todo lo que escribes en la conversación forma parte del 'Contexto' de las siguientes preguntas. Si el chat se vuelve muy largo y la IA se confunde, la mejor práctica es iniciar un chat nuevo con un prompt fresco."
            }
          ].map((item, index) => (
            <div key={index} className="bg-[#111111] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300">
              <button 
                onClick={() => toggleAccordion(index)}
                className="w-full p-5 flex items-center justify-between bg-transparent hover:bg-white/[0.02] transition-colors"
              >
                <span className="font-semibold text-white">{item.title}</span>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${activeAccordion === index ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {activeAccordion === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 pt-0 text-sm text-gray-400 leading-relaxed border-t border-white/5">
                      {item.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.section>

      {/* RESUMEN Y NAVEGACIÓN */}
      <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <div className="bg-[#111111] border border-white/5 rounded-3xl p-8 md:p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-[#8b7bff] to-transparent" />
          
          <h2 className="text-xl font-bold text-white mb-4">Resumen de la Clase</h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">
            Un prompt no es una simple búsqueda; es la compilación de parámetros (Rol, Contexto, Tarea, Formato) que guía matemáticamente a la Inteligencia Artificial para generar código preciso, evitando errores y alucinaciones.
          </p>
          
          <Link href="/dashboard/modules/1/leccion-2" passHref legacyBehavior>
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