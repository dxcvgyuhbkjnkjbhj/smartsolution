"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Key, CreditCard, Terminal, Droplet, 
  CheckCircle2, XCircle, ArrowRight, BookOpen, ShieldAlert
} from 'lucide-react';
import Link from 'next/link';

export default function LessonFourPage() {
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
            El mito de la "API Key": <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b7bff] to-blue-400">
              Diferencias de pago
            </span>
          </h1>
          <div className="bg-[#8b7bff]/10 border border-[#8b7bff]/20 rounded-2xl p-6 backdrop-blur-sm max-w-3xl">
            <p className="text-gray-200 leading-relaxed">
              <strong>Objetivo:</strong> Diferenciar claramente entre una Suscripción Mensual y el uso de una API Key, evitando las confusiones financieras típicas que cuestan dinero a los principiantes.
            </p>
          </div>
        </div>
      </motion.section>

      {/* EXPLICACIÓN COMPLETA (Grid) */}
      <motion.section variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={fadeUp} className="bg-emerald-950/20 border border-emerald-500/20 rounded-2xl p-8 hover:border-emerald-500/40 transition-colors shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-6">
              <CreditCard className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-emerald-100 mb-3">Suscripción (Tu camino)</h3>
            <p className="text-sm text-emerald-100/70 leading-relaxed mb-4">
              Pagas un precio fijo al mes (ej: $20 en el plan Pro). Úsala poco o úsala mucho, pagarás siempre lo mismo.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">
              Diseñado para Humanos
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-rose-950/20 border border-rose-500/20 rounded-2xl p-8 hover:border-rose-500/40 transition-colors shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-rose-500/20 flex items-center justify-center mb-6">
              <Key className="w-6 h-6 text-rose-400" />
            </div>
            <h3 className="text-xl font-bold text-rose-100 mb-3">API Key (Desarrolladores)</h3>
            <p className="text-sm text-rose-100/70 leading-relaxed mb-4">
              Se paga por <strong>consumo</strong>. Cada palabra que procesas cuesta fracciones de centavo. A final de mes te llega una factura sorpresa.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400 bg-rose-500/10 px-3 py-1 rounded-full">
              Diseñado para Programas
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ANALOGÍA */}
      <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative overflow-hidden bg-gradient-to-r from-blue-900/20 to-[#111111] border border-blue-500/20 rounded-3xl p-8 md:p-10">
        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
          <div className="w-20 h-20 shrink-0 rounded-2xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
            <Droplet className="w-10 h-10 text-blue-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-100 mb-2">La Analogía del Agua</h3>
            <p className="text-blue-100/70 leading-relaxed">
              La <strong>Suscripción</strong> es como pagar tu membresía de Netflix: ves 1 o 100 películas y pagas lo mismo. La <strong>API Key</strong> es como el recibo del agua de tu casa: cada gota cuenta, y si dejas la llave abierta, la factura de fin de mes será enorme.
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
                <strong className="text-emerald-200">Protege tu dinero:</strong> Quédate en claude.com con tu cuenta normal o suscripción Pro.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
              <p className="text-sm text-emerald-100/80">
                <strong className="text-emerald-200">Ignora el panel de API:</strong> A menos que en módulos muy avanzados te pidamos crear una, no vayas a la consola de desarrolladores a generar llaves.
              </p>
            </li>
          </ul>
        </div>

        {/* Errores Comunes */}
        <div className="bg-red-950/20 border border-red-500/20 rounded-3xl p-8">
          <h3 className="text-lg font-bold text-red-400 mb-6 flex items-center gap-2">
            <XCircle className="w-5 h-5" /> Errores Graves
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
              <p className="text-sm text-red-100/80">
                <strong className="text-red-200">Poner la tarjeta en la API:</strong> Creer que para usar el Plan Pro necesitas generar una API Key y poner tu tarjeta de crédito ahí. ¡Falso! Son cosas separadas.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
              <p className="text-sm text-red-100/80">
                <strong className="text-red-200">Compartir llaves en internet:</strong> Si algún día generas una API Key, NUNCA se la pases a nadie. Si alguien la copia, los cobros irán directo a tu cuenta bancaria.
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
            La Suscripción es un pago fijo mensual diseñado para nosotros. La API Key es una contraseña para programas de computadora que cobra por cada palabra procesada. Para empezar, olvídate por completo de las API Keys.
          </p>

          <div className="bg-[#050505] rounded-2xl p-6 border border-white/5 max-w-2xl mx-auto mb-10">
            <p className="text-gray-300 italic font-medium">
              "Has blindado tus finanzas y tu conocimiento. Sabes dónde estás parado y cómo funciona la plataforma. El último paso de este módulo es entender qué necesita tu computadora para funcionar."
            </p>
          </div>
          
          <Link href="/dashboard/modules/0/leccion-5" passHref legacyBehavior>
            <a className="inline-flex items-center gap-2 bg-[#8b7bff] hover:bg-[#796ae6] text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(139,123,255,0.3)] hover:scale-105 active:scale-95">
              Continuar a la Lección 5
              <ArrowRight className="w-5 h-5" />
            </a>
          </Link>

        </div>
      </motion.section>

    </div>
  );
}