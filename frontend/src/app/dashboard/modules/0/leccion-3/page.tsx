"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  CreditCard, MonitorSmartphone, Mail, Lock, 
  CheckCircle2, XCircle, ArrowRight, BookOpen, 
  Store, Utensils
} from 'lucide-react';
import Link from 'next/link';

export default function LessonThreePage() {
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
            Planes y Cuentas: <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b7bff] to-blue-400">
              Tu pase de entrada a la IA
            </span>
          </h1>
          <div className="bg-[#8b7bff]/10 border border-[#8b7bff]/20 rounded-2xl p-6 backdrop-blur-sm max-w-3xl">
            <p className="text-gray-200 leading-relaxed">
              <strong>Objetivo:</strong> Aprender a registrarte correctamente en la plataforma de Claude y comprender cómo funciona el sistema de suscripciones para que nunca gastes de más por error.
            </p>
          </div>
        </div>
      </motion.section>

      {/* PASO A PASO: CREAR CUENTA */}
      <motion.section variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <MonitorSmartphone className="w-6 h-6 text-[#8b7bff]" />
            Pasos para crear tu espacio
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Para poder hablar con este "Chef" llamado Claude, necesitas entrar a su restaurante virtual (su página web). El registro es 100% gratuito.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div variants={fadeUp} className="bg-[#111111] border border-white/5 rounded-2xl p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 text-7xl font-black text-white/[0.03] -mt-4 -mr-2 group-hover:text-white/[0.05] transition-colors">1</div>
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 relative z-10">
              <MonitorSmartphone className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 relative z-10">Entra a claude.com</h3>
            <p className="text-sm text-gray-400 leading-relaxed relative z-10">
              Abre tu navegador de internet y dirígete a la página oficial. Esa es tu única puerta de entrada segura.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-[#111111] border border-white/5 rounded-2xl p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 text-7xl font-black text-white/[0.03] -mt-4 -mr-2 group-hover:text-white/[0.05] transition-colors">2</div>
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 relative z-10">
              <Mail className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 relative z-10">Usa tu correo</h3>
            <p className="text-sm text-gray-400 leading-relaxed relative z-10">
              Puedes usar tu cuenta de Google para que sea más rápido, o ingresar un correo personal al que tengas acceso inmediato.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-[#111111] border border-white/5 rounded-2xl p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 text-7xl font-black text-white/[0.03] -mt-4 -mr-2 group-hover:text-white/[0.05] transition-colors">3</div>
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 relative z-10">
              <Lock className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 relative z-10">Verifica tu acceso</h3>
            <p className="text-sm text-gray-400 leading-relaxed relative z-10">
              La plataforma te enviará un código de seguridad a tu correo. Cópialo, pégalo y ¡listo! Ya estás dentro en el plan Gratis.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* ANALOGÍA */}
      <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative overflow-hidden bg-gradient-to-r from-orange-900/20 to-[#111111] border border-orange-500/20 rounded-3xl p-8 md:p-10">
        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
          <div className="w-20 h-20 shrink-0 rounded-2xl bg-orange-500/20 flex items-center justify-center border border-orange-500/30 shadow-[0_0_30px_rgba(249,115,22,0.2)]">
            <Utensils className="w-10 h-10 text-orange-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-orange-100 mb-2">La Analogía del Restaurante</h3>
            <p className="text-orange-100/70 leading-relaxed">
              El <strong>Plan Gratis</strong> es como una muestra de degustación en un supermercado; te permite probar el sabor, pero tiene límite. El <strong>Plan Pro</strong> es como pagar la entrada a un buffet libre: sabes exactamente cuánto vas a pagar al mes ($20) y puedes servirte todo el conocimiento que necesites para aprender sin pausas.
            </p>
          </div>
        </div>
      </motion.section>

      {/* BUENAS PRÁCTICAS Y ERRORES */}
      <motion.section variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Buenas Prácticas */}
        <div className="bg-emerald-950/20 border border-emerald-500/20 rounded-3xl p-8">
          <h3 className="text-lg font-bold text-emerald-400 mb-6 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" /> Reglas de Oro
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
              <p className="text-sm text-emerald-100/80">
                <strong className="text-emerald-200">Empieza gratis:</strong> Inicia siempre con la cuenta gratuita. Explora cómo Claude responde a tus preguntas. No hay prisa por sacar la tarjeta de crédito el primer día.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
              <p className="text-sm text-emerald-100/80">
                <strong className="text-emerald-200">Usa tu correo principal:</strong> Claude enviará códigos de verificación o enlaces de acceso a ese correo (Magic Links) cada vez que inicies sesión en un equipo nuevo.
              </p>
            </li>
          </ul>
        </div>

        {/* Errores Comunes */}
        <div className="bg-red-950/20 border border-red-500/20 rounded-3xl p-8">
          <h3 className="text-lg font-bold text-red-400 mb-6 flex items-center gap-2">
            <XCircle className="w-5 h-5" /> Evita esto
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
              <p className="text-sm text-red-100/80">
                <strong className="text-red-200">Crear múltiples cuentas:</strong> Algunos intentan crear 5 cuentas con 5 correos distintos para evadir los límites del plan gratis. Esto confunde tu aprendizaje porque pierdes el historial de tus conversaciones.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
              <p className="text-sm text-red-100/80">
                <strong className="text-red-200">Temerle al Plan Pro:</strong> Pensar que el plan Pro te cobrará extra si lo usas mucho. El plan Pro es una tarifa plana (suscripción). No importa cuánto lo uses en el mes, la factura no subirá.
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
            Necesitas registrarte en claude.com con tu correo. Existe un plan Gratis para dar tus primeros pasos de forma segura, y un plan Pro (cuota fija mensual) que será tu aliado cuando comencemos a construir herramientas más adelante.
          </p>

          <div className="bg-[#050505] rounded-2xl p-6 border border-white/5 max-w-2xl mx-auto mb-10">
            <p className="text-gray-300 italic font-medium">
              "Ya tienes claro cómo entrar a la plataforma y qué plan elegir. Pero existe un mito en internet sobre una 'llave' que te cobra por cada palabra. En la siguiente lección, destruiremos ese mito para proteger tu dinero."
            </p>
          </div>
          
          <Link href="/dashboard/modules/0/leccion-4" passHref legacyBehavior>
            <a className="inline-flex items-center gap-2 bg-[#8b7bff] hover:bg-[#796ae6] text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(139,123,255,0.3)] hover:scale-105 active:scale-95">
              Continuar a la Lección 4
              <ArrowRight className="w-5 h-5" />
            </a>
          </Link>

        </div>
      </motion.section>

    </div>
  );
}