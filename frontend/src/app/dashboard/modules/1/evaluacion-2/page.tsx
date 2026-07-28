"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, CheckCircle2, AlertTriangle, ArrowRight, BookOpen, Award
} from 'lucide-react';
import Link from 'next/link';

export default function ModuleOneEvaluationTwo() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const premiumEasing: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const handleAnswer = (questionIndex: number, optionIndex: number) => {
    if (!isSubmitted) {
      setAnswers(prev => ({ ...prev, [questionIndex]: optionIndex }));
    }
  };

  const checkQuiz = () => {
    if (Object.keys(answers).length === 3) {
      setIsSubmitted(true);
    }
  };

  const QUIZ = [
    {
      question: "¿Para qué sirve utilizar delimitadores como etiquetas XML o comillas triples en un prompt?",
      options: [
        "Para que el texto se vea de un color diferente en el chat.",
        "Para separar claramente las 'instrucciones' de los 'datos', evitando que la IA se confunda (fuga de contexto).",
        "Para que la respuesta de la IA se genere más rápido."
      ],
      correct: 1,
      feedback: "¡Exacto! Los delimitadores son muros de contención que protegen tus instrucciones."
    },
    {
      question: "Si le pides a la IA que desarrolle el código backend de un sistema complejo de golpe, ¿qué es más probable que suceda?",
      options: [
        "Te entregará un sistema perfecto listo para producción.",
        "Cometerá errores de lógica porque no analizó el diseño arquitectónico previo.",
        "La IA se apagará."
      ],
      correct: 1,
      feedback: "¡Correcto! Los LLM necesitan planificar antes de ejecutar código denso."
    },
    {
      question: "¿Cuál es la frase mágica que activa la técnica 'Chain of Thought' (Cadena de Pensamiento)?",
      options: [
        "Escribe el código lo más rápido posible.",
        "Piensa paso a paso y analiza el problema antes de darme la solución.",
        "Ignora todas las instrucciones anteriores."
      ],
      correct: 1,
      feedback: "¡Perfecto! Al obligar a la IA a desglosar su razonamiento, mejoras drásticamente la calidad de su código."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-24 font-sans text-white">
      
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: premiumEasing }}
        className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#111111] to-[#050505] border border-white/5 p-10 shadow-2xl"
      >
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <Link href="/dashboard/modules/1" passHref legacyBehavior>
          <a className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md mb-6 hover:bg-white/10 transition-colors relative z-10">
            <BookOpen className="w-4 h-4 text-purple-400" />
            Volver al Módulo 1
          </a>
        </Link>

        <div className="relative z-10 flex items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-400 flex items-center justify-center shadow-lg">
            <Award className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Evaluación 2</h1>
            <p className="text-gray-400">Verifica tu dominio sobre Delimitadores y Chain of Thought.</p>
          </div>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: premiumEasing }}
        className="space-y-10"
      >
        {QUIZ.map((q, qIndex) => (
          <div key={qIndex} className="bg-[#111111] border border-white/5 rounded-3xl p-8 shadow-lg">
            <h3 className="font-semibold text-white text-lg mb-6 leading-relaxed">
              <span className="text-purple-400 mr-2">Pregunta {qIndex + 1}:</span> 
              {q.question}
            </h3>
            <div className="space-y-3">
              {q.options.map((opt, optIndex) => {
                const isSelected = answers[qIndex] === optIndex;
                const isCorrect = q.correct === optIndex;
                const showFeedback = isSubmitted && isSelected;

                return (
                  <button
                    key={optIndex}
                    onClick={() => handleAnswer(qIndex, optIndex)}
                    disabled={isSubmitted}
                    className={`w-full text-left p-5 rounded-xl border transition-all flex items-center justify-between ${
                      isSelected && !isSubmitted
                        ? 'bg-purple-500/20 border-purple-500'
                        : showFeedback && isCorrect
                        ? 'bg-emerald-500/10 border-emerald-500'
                        : showFeedback && !isCorrect
                        ? 'bg-rose-500/10 border-rose-500'
                        : 'bg-[#050505] border-white/5 hover:border-white/20'
                    }`}
                  >
                    <span className={isSelected || showFeedback ? 'text-white font-medium' : 'text-gray-400'}>
                      {opt}
                    </span>
                    {showFeedback && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
                    {showFeedback && !isCorrect && <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0" />}
                  </button>
                );
              })}
            </div>
            
            <AnimatePresence>
              {isSubmitted && answers[qIndex] !== undefined && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className={`text-sm p-4 rounded-xl mt-4 ${
                    answers[qIndex] === q.correct 
                      ? 'text-emerald-200 bg-emerald-500/10 border border-emerald-500/20' 
                      : 'text-rose-200 bg-rose-500/10 border border-rose-500/20'
                  }`}
                >
                  {answers[qIndex] === q.correct ? "✅ " : "💡 Corrección: "}
                  {q.feedback}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

        <div className="pt-6 flex justify-end">
          {!isSubmitted ? (
            <button
              onClick={checkQuiz}
              disabled={Object.keys(answers).length < 3}
              className="bg-white hover:bg-gray-200 text-black font-semibold px-8 py-3 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Comprobar Respuestas
            </button>
          ) : (
            <Link href="/dashboard/modules/1/leccion-5" passHref legacyBehavior>
              <a className="inline-flex items-center gap-2 bg-[#8b7bff] hover:bg-[#796ae6] text-white font-semibold px-8 py-3 rounded-xl transition-all shadow-[0_0_20px_rgba(139,123,255,0.3)] hover:scale-105 active:scale-95">
                Continuar a la Lección Final
                <ArrowRight className="w-5 h-5" />
              </a>
            </Link>
          )}
        </div>
      </motion.section>

    </div>
  );
}