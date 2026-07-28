"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, Sparkles, BookOpen, ArrowRight, MessageSquare, 
  CheckCircle2, AlertTriangle, ShieldCheck, Zap
} from 'lucide-react';
import Link from 'next/link';

export default function PromptLabPage() {
  const [promptText, setPromptText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<{ score: number; level: string; feedback: string[] } | null>(null);

  const premiumEasing: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const handleAnalyze = () => {
    if (!promptText.trim()) return;
    
    setIsAnalyzing(true);
    setResult(null);

    // Simulador de evaluación de Prompt
    setTimeout(() => {
      const text = promptText.toLowerCase();
      let score = 0;
      let feedback = [];

      // 1. Longitud básica (Contexto)
      if (text.length > 50) {
        score += 30;
        feedback.push("✅ Buena longitud: Has dado suficiente información inicial.");
      } else {
        feedback.push("⚠️ Muy corto: A la IA le faltará contexto para darte una respuesta precisa.");
      }

      // 2. Asignación de Rol
      if (text.includes("actúa") || text.includes("eres un") || text.includes("experto") || text.includes("ingeniero")) {
        score += 30;
        feedback.push("✅ Rol definido: Has posicionado a la IA como un experto.");
      } else {
        feedback.push("💡 Tip: Dile a la IA quién debe ser (Ej: 'Actúa como un ingeniero de datos...').");
      }

      // 3. Delimitadores o Formato
      if (text.includes("formato") || text.includes("tabla") || text.includes("código") || text.includes("paso a paso")) {
        score += 40;
        feedback.push("✅ Estructura solicitada: Le has dicho a la IA cómo quieres recibir la respuesta.");
      } else {
        feedback.push("💡 Tip: Especifica cómo quieres la salida (Ej: 'Entrégame el resultado en una tabla').");
      }

      let level = "Principiante";
      if (score >= 60 && score < 100) level = "Intermedio";
      if (score === 100) level = "Avanzado / Senior";

      setResult({ score: score === 0 ? 10 : score, level, feedback });
      setIsAnalyzing(false);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-24 font-sans text-white">
      
      {/* HERO DEL LABORATORIO */}
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

          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            Laboratorio de Prompts: <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b7bff] to-blue-400">
              Descubre tu Nivel
            </span>
          </h1>
          
          <div className="bg-[#8b7bff]/10 border border-[#8b7bff]/20 rounded-2xl p-6 backdrop-blur-sm max-w-3xl">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#8b7bff]/20 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5 text-[#8b7bff]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Tu Desafío Personalizado</h3>
                <p className="text-gray-200 leading-relaxed text-sm">
                  Escribe un prompt pidiéndole a la IA que estructure el módulo de minería de datos para analizar contenido en <strong>Facebook, TikTok, Instagram y YouTube</strong>. Sé lo más detallado posible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ÁREA INTERACTIVA (TEXTAREA) */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: premiumEasing }}
        className="space-y-6"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Terminal className="w-5 h-5 text-[#8b7bff]" />
            Consola de Instrucciones
          </h2>
          <span className="text-xs text-gray-500 font-mono">Input: Usuario</span>
        </div>

        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8b7bff] to-blue-500 rounded-2xl blur opacity-20 group-focus-within:opacity-40 transition duration-500"></div>
          <div className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden">
            <textarea
              value={promptText}
              onChange={(e) => setPromptText(e.target.value)}
              placeholder="Ejemplo: Actúa como un experto en extracción de datos. Necesito que diseñes un script que..."
              className="w-full h-48 bg-transparent text-gray-200 p-6 focus:outline-none resize-none font-mono text-sm leading-relaxed"
            />
            <div className="bg-[#111111] border-t border-white/5 p-4 flex justify-between items-center">
              <span className="text-xs text-gray-500 font-mono">
                {promptText.length} caracteres
              </span>
              <button
                onClick={handleAnalyze}
                disabled={isAnalyzing || promptText.length === 0}
                className="bg-[#8b7bff] hover:bg-[#796ae6] disabled:bg-gray-700 disabled:text-gray-500 text-white font-semibold px-6 py-2.5 rounded-xl transition-all shadow-[0_0_15px_rgba(139,123,255,0.2)] disabled:shadow-none flex items-center gap-2 text-sm"
              >
                {isAnalyzing ? (
                  <>
                    <Sparkles className="w-4 h-4 animate-spin" />
                    Analizando...
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4" />
                    Evaluar Nivel
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* RESULTADOS DEL ANÁLISIS */}
      <AnimatePresence>
        {result && (
          <motion.section 
            initial={{ opacity: 0, height: 0, y: 20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="bg-[#111111] border border-white/5 rounded-3xl p-8 md:p-10 mt-4">
              <div className="flex flex-col md:flex-row items-center gap-8 border-b border-white/5 pb-8 mb-8">
                
                {/* Score Circular */}
                <div className="relative w-32 h-32 shrink-0">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke="#ffffff10" strokeWidth="8" fill="none" />
                    <motion.circle 
                      initial={{ strokeDasharray: "0 251.2" }}
                      animate={{ strokeDasharray: `${(result.score / 100) * 251.2} 251.2` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      cx="50" cy="50" r="40" 
                      stroke={result.score === 100 ? "#10b981" : result.score >= 60 ? "#8b7bff" : "#ef4444"} 
                      strokeWidth="8" 
                      fill="none" 
                      strokeLinecap="round" 
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold text-white">{result.score}</span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest">Score</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Diagnóstico</h3>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    Nivel: <span className={result.score === 100 ? "text-emerald-400" : result.score >= 60 ? "text-[#8b7bff]" : "text-rose-400"}>
                      {result.level}
                    </span>
                  </h2>
                  <p className="text-gray-400 text-sm">
                    {result.score === 100 
                      ? "¡Excelente! Has dominado las bases del Prompt Engineering." 
                      : "Buen intento. Ajusta los parámetros sugeridos para mejorar el contexto."}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-white mb-4">Análisis Detallado:</h4>
                {result.feedback.map((item, index) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (index * 0.1) }}
                    key={index} 
                    className={`p-4 rounded-xl border flex items-start gap-3 ${
                      item.includes('✅') 
                        ? 'bg-emerald-950/20 border-emerald-500/20 text-emerald-200' 
                        : item.includes('⚠️') 
                        ? 'bg-rose-950/20 border-rose-500/20 text-rose-200'
                        : 'bg-amber-950/20 border-amber-500/20 text-amber-200'
                    }`}
                  >
                    <span className="text-sm leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </div>

              {result.score >= 60 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="mt-10 flex justify-end">
                  <Link href="/dashboard/modules/1/leccion-2" passHref legacyBehavior>
                    <a className="inline-flex items-center gap-2 bg-white text-black hover:bg-gray-200 font-bold px-8 py-3 rounded-xl transition-all">
                      Continuar a la Lección 2
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </Link>
                </motion.div>
              )}
            </div>
          </motion.section>
        )}
      </AnimatePresence>

    </div>
  );
}