"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, ShieldCheck, ChefHat, Code, MessageSquare, 
  CheckCircle2, XCircle, ArrowRight, BookOpen, 
  Zap, Users, Award, UserCircle
} from 'lucide-react';
import Link from 'next/link';

export default function LessonTwoPage() {
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
            Conociendo a Claude: <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b7bff] to-blue-400">
              Tu nuevo asistente personal
            </span>
          </h1>
          <div className="bg-[#8b7bff]/10 border border-[#8b7bff]/20 rounded-2xl p-6 backdrop-blur-sm max-w-3xl">
            <p className="text-gray-200 leading-relaxed">
              <strong>Objetivo:</strong> Identificar qué es Claude, quién lo creó y elegir el plan ideal para acompañar tu aprendizaje. Dejarás de estudiar solo y tendrás un tutor a tu disposición 24/7.
            </p>
          </div>
        </div>
      </motion.section>

      {/* PLANES QUE OFRECE CLAUDE */}
      <motion.section variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Zap className="w-6 h-6 text-[#8b7bff]" />
            Planes que ofrece Claude
          </h2>
          <p className="text-sm text-gray-400 mt-1">Conoce las opciones disponibles para adaptar Claude a tus necesidades.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Plan Gratis */}
          <motion.div variants={fadeUp} className="bg-[#111111] border border-white/5 rounded-2xl p-6 flex flex-col justify-between hover:border-white/20 transition-all">
            <div>
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center mb-4">
                <Bot className="w-5 h-5 text-gray-400" />
              </div>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Gratuito</span>
              <h3 className="text-xl font-bold text-white mt-1 mb-2">Free</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Acceso estándar a Claude. Perfecto para dar tus primeros pasos y curiosear la herramienta sin costo.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 text-xs text-gray-500 font-medium">
              ✓ Límites de mensajes diarios
            </div>
          </motion.div>

          {/* Plan Pro (Destacado) */}
          <motion.div variants={fadeUp} className="bg-gradient-to-b from-[#8b7bff]/15 to-[#111111] border border-[#8b7bff]/40 rounded-2xl p-6 flex flex-col justify-between relative shadow-[0_10px_30px_rgba(139,123,255,0.15)] transform md:-translate-y-2">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#8b7bff] to-blue-500 rounded-t-2xl" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-[#8b7bff] rounded-xl flex items-center justify-center shadow-lg shadow-[#8b7bff]/30">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <span className="px-3 py-1 bg-[#8b7bff] text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                  Recomendado
                </span>
              </div>
              <span className="text-xs font-bold text-[#8b7bff] uppercase tracking-wider">Suscripción</span>
              <h3 className="text-xl font-bold text-white mt-1 mb-2">Pro</h3>
              <p className="text-sm text-gray-200 leading-relaxed mb-4">
                5x más límites de uso, acceso prioritario en horas pico y soporte para herramientas avanzadas de programación (Claude Code).
              </p>
            </div>
            <div className="pt-4 border-t border-[#8b7bff]/20 text-xs text-emerald-400 font-medium flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> Ideal para este curso
            </div>
          </motion.div>

          {/* Plan Team / Max */}
          <motion.div variants={fadeUp} className="bg-[#111111] border border-white/5 rounded-2xl p-6 flex flex-col justify-between hover:border-white/20 transition-all">
            <div>
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">Empresas / Equipos</span>
              <h3 className="text-xl font-bold text-white mt-1 mb-2">Team / Max</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Diseñado para colaboradores y empresas que requieren límites significativamente más altos y compartir proyectos.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 text-xs text-gray-500 font-medium">
              ✓ Colaboración en equipo
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* EXPLICACIÓN COMPLETA (Grid) */}
      <motion.section variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div variants={fadeUp} className="bg-[#111111] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
              <Bot className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">¿Qué es Claude?</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Es un modelo de Inteligencia Artificial desarrollado por una empresa llamada <strong>Anthropic</strong>. Piensa en Claude como una "marca" de Inteligencia Artificial, así como Toyota es una marca de autos.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="bg-[#111111] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">¿Por qué existe?</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Fue creado por investigadores con un enfoque obsesivo en la <strong>seguridad, la ética y la precisión</strong>. Es extremadamente detallista y evita darte información falsa o peligrosa.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="bg-[#111111] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
              <Code className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">¿Cuándo se utiliza?</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Lo utilizaremos a lo largo de todo este curso. Será tu <strong>"copiloto"</strong>. En lugar de aprender a programar solo, Claude estará ahí para explicarte cada línea.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* ANALOGÍA */}
      <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative overflow-hidden bg-gradient-to-r from-purple-900/20 to-[#111111] border border-purple-500/20 rounded-3xl p-8 md:p-10">
        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
          <div className="w-20 h-20 shrink-0 rounded-2xl bg-purple-500/20 flex items-center justify-center border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
            <ChefHat className="w-10 h-10 text-purple-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-purple-100 mb-2">La Analogía del Chef</h3>
            <p className="text-purple-100/70 leading-relaxed">
              Si la Inteligencia Artificial fuera la cocina, Claude sería <strong>un Chef especializado</strong> que no solo te prepara la comida, sino que te explica paso a paso la receta, por qué usó cada ingrediente y se asegura de que no te quemes en el proceso.
            </p>
          </div>
        </div>
      </motion.section>

      {/* EJEMPLOS APLICADOS */}
      <motion.section variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h2 className="text-2xl font-bold text-white tracking-tight mb-6">Ejemplos aplicados al aprendizaje</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#111111] border border-white/5 rounded-2xl p-6 opacity-60">
            <div className="flex items-center gap-2 mb-3">
              <UserCircle className="w-4 h-4 text-gray-400" />
              <span className="text-sm font-semibold text-gray-300">Un alumno sin Claude</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Intenta escribir código, sale un error rojo en la pantalla. Pasa 3 horas buscando en foros antiguos y termina frustrado rindiéndose.
            </p>
          </div>

          <div className="bg-[#8b7bff]/10 border border-[#8b7bff]/30 rounded-2xl p-6 relative shadow-[0_0_20px_rgba(139,123,255,0.1)]">
            <div className="absolute top-0 right-0 px-3 py-1 bg-[#8b7bff] text-white text-[10px] font-bold uppercase rounded-bl-lg rounded-tr-xl">
              El método IA
            </div>
            <div className="flex items-center gap-2 mb-3">
              <MessageSquare className="w-4 h-4 text-[#8b7bff]" />
              <span className="text-sm font-semibold text-white">Un alumno con Claude</span>
            </div>
            <p className="text-sm text-gray-200">
              Copia el error, se lo pega a Claude y le dice: <em>"Claude, salió este error, explícame por qué pasó y cómo lo soluciono paso a paso"</em>. Claude le enseña la solución en segundos.
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
                <strong className="text-emerald-200">Aprovecha su lectura:</strong> Claude puede leer textos largos. Si tienes un problema, explícale toda la situación con mucho detalle.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
              <p className="text-sm text-emerald-100/80">
                <strong className="text-emerald-200">Dale un rol:</strong> Dile "Actúa como mi profesor paciente" y Claude cambiará su tono de voz para enseñarte mucho mejor.
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
                <strong className="text-red-200">Confundirlo con Google:</strong> No pongas palabras sueltas como "botón web". Escribe oraciones completas y conversacionales.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
              <p className="text-sm text-red-100/80">
                <strong className="text-red-200">Rendirse a la primera:</strong> Si su respuesta es muy compleja, no te vayas. Dile: "No entendí, dame un ejemplo más fácil".
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
            Claude es una inteligencia artificial de alta precisión creada por Anthropic. Su capacidad para explicar conceptos complejos de forma sencilla lo convierte en el profesor ideal para alguien que empieza desde cero.
          </p>

          <div className="bg-[#050505] rounded-2xl p-6 border border-white/5 max-w-2xl mx-auto mb-10">
            <p className="text-gray-300 italic font-medium">
              "Ya sabes qué es la IA y quién es Claude. Ahora es momento de poner a prueba lo aprendido antes de crear tu propia cuenta."
            </p>
          </div>
          
          <Link href="/dashboard/modules/0/evaluacion-1" passHref legacyBehavior>
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