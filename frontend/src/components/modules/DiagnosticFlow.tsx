"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Terminal, 
  MessageSquare, 
  CheckCircle2, 
  Zap, 
  Target, 
  Code2, 
  LayoutTemplate, 
  Sparkles,
  Command
} from 'lucide-react';
import { useRouter } from 'next/navigation';

// Estructura de la Evaluación con Sistema de Puntuación (Oculto al usuario)
const QUESTIONS = [
  {
    id: 'ai_usage',
    title: '¿Con qué frecuencia usas IA (Claude, ChatGPT)?',
    subtitle: 'Nos ayuda a entender tu familiaridad con los modelos de lenguaje.',
    options: [
      { id: 'none', points: 0, label: 'Casi nunca', desc: 'Es un mundo completamente nuevo para mí.', icon: <Sparkles className="w-5 h-5" /> },
      { id: 'casual', points: 1, label: 'Ocasionalmente', desc: 'Para redactar correos o hacer consultas generales.', icon: <MessageSquare className="w-5 h-5" /> },
      { id: 'daily', points: 2, label: 'Todos los días', desc: 'Es mi copiloto principal para trabajar o estudiar.', icon: <Zap className="w-5 h-5" /> }
    ]
  },
  {
    id: 'prompting',
    title: '¿Sabes qué es el "Prompt Engineering"?',
    subtitle: 'El arte de darle las instrucciones correctas a la IA.',
    options: [
      { id: 'no', points: 0, label: 'No, ni idea', desc: 'Solo le escribo como si fuera el buscador de Google.', icon: <div className="text-xl">🤔</div> },
      { id: 'basic', points: 1, label: 'Conozco lo básico', desc: 'Sé que debo darle contexto y ser específico.', icon: <LayoutTemplate className="w-5 h-5" /> },
      { id: 'pro', points: 2, label: 'Soy experto', desc: 'Uso roles, delimitadores (XML) y pocos disparos (Few-Shot).', icon: <Target className="w-5 h-5" /> }
    ]
  },
  {
    id: 'coding',
    title: '¿Cuál es tu nivel actual de programación?',
    subtitle: 'Claude Code generará código, necesitamos saber si podrás leerlo.',
    options: [
      { id: 'zero', points: 0, label: 'Cero absoluto', desc: 'Nunca he escrito una sola línea de código en mi vida.', icon: <div className="text-xl">🌱</div> },
      { id: 'junior', points: 1, label: 'Principiante', desc: 'Entiendo HTML/CSS y un poco de JavaScript o Python.', icon: <Code2 className="w-5 h-5" /> },
      { id: 'senior', points: 3, label: 'Desarrollador', desc: 'Construyo aplicaciones completas, bases de datos o APIs.', icon: <Brain className="w-5 h-5" /> }
    ]
  },
  {
    id: 'cli',
    title: '¿Te sientes cómodo usando la Terminal de tu computadora?',
    subtitle: 'Claude Code es una herramienta CLI (Command Line Interface).',
    options: [
      { id: 'scared', points: 0, label: 'Me intimida', desc: 'Nunca abro esa pantalla negra, prefiero lo visual.', icon: <div className="text-xl">🫣</div> },
      { id: 'normal', points: 1, label: 'Lo necesario', desc: 'Sé navegar carpetas (cd) e instalar paquetes (npm).', icon: <Terminal className="w-5 h-5" /> },
      { id: 'hacker', points: 2, label: 'Es mi casa', desc: 'Uso Git por consola, Bash, Zsh y scripts personalizados.', icon: <Command className="w-5 h-5" /> }
    ]
  }
];

export default function DiagnosticFlow() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  
  // Guardamos las opciones seleccionadas completas (para calcular el puntaje)
  const [answers, setAnswers] = useState<Record<string, { id: string, points: number }>>({});
  const [isCalculating, setIsCalculating] = useState(false);
  
  // 1. ESTADO DE BLOQUEO (State Lock): Previene clics múltiples durante animaciones
  const [isTransitioning, setIsTransitioning] = useState(false);

  const premiumEasing: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const handleSelect = (questionId: string, option: { id: string, points: number }) => {
    // 2. RETORNO TEMPRANO: Si el estado está bloqueado, ignoramos el clic
    if (isTransitioning) return;
    
    // Activamos el bloqueo inmediatamente
    setIsTransitioning(true);
    
    setAnswers(prev => ({ ...prev, [questionId]: option }));
    
    // Feedback Inmediato: Esperamos medio segundo antes de avanzar
    setTimeout(() => {
      // 3. VALIDACIÓN ESTRICTA DE LÍMITES
      if (currentStep < QUESTIONS.length - 1) {
        setCurrentStep(prev => prev + 1);
        
        // Desbloqueamos SOLAMENTE después de que termine la animación de entrada (500ms)
        setTimeout(() => {
          setIsTransitioning(false);
        }, 500); 
      } else {
        calculateResult();
        // NOTA: Aquí no liberamos isTransitioning para evitar que el usuario toque algo mientras calculamos
      }
    }, 400); 
  };

  const calculateResult = () => {
    setIsCalculating(true);
    
    // Sumamos los puntos de todas las respuestas
    const totalScore = Object.values(answers).reduce((acc, curr) => acc + curr.points, 0);
    
    // Motor de Lógica Pedagógica (Clasificación)
    let userLevel = 'principiante';
    let suggestedModule = 0;

    if (totalScore >= 7) {
      userLevel = 'avanzado';
      suggestedModule = 3; // Puede saltarse lo básico
    } else if (totalScore >= 3) {
      userLevel = 'intermedio';
      suggestedModule = 1; // Necesita reforzar Prompting
    }

    // Simulamos el tiempo de "análisis del motor de IA" para UX
    setTimeout(() => {
      // Redirigimos pasando el nivel y el módulo sugerido por URL
      router.push(`/dashboard/modules?diagnostico=completado&nivel=${userLevel}&modulo=${suggestedModule}`);
    }, 2800);
  };

  if (isCalculating) {
    return (
      <div className="flex flex-col items-center justify-center py-24 font-sans text-white">
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-28 h-28 mb-8"
        >
          <div className="absolute inset-0 border-4 border-[#8b7bff]/20 rounded-full" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-4 border-transparent border-t-[#8b7bff] rounded-full drop-shadow-[0_0_15px_rgba(139,123,255,0.5)]"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Brain className="w-12 h-12 text-[#8b7bff]" />
          </div>
        </motion.div>
        <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">Analizando tu perfil...</h2>
        <p className="text-gray-400 text-sm animate-pulse">Cruzando datos con nuestra matriz de aprendizaje.</p>
      </div>
    );
  }

  // 4. EXTRACCIÓN SEGURA: Validamos que la pregunta exista en el índice actual
  const question = QUESTIONS[currentStep];
  
  // 5. PROTECCIÓN FINAL DE RENDERIZADO: Previene el crasheo de React si el índice se sale de control
  if (!question) return null;

  return (
    <div className="max-w-2xl mx-auto py-8 font-sans text-white">
      {/* Barra de progreso */}
      <div className="flex items-center justify-between mb-8">
        <span className="text-xs font-semibold text-[#8b7bff] uppercase tracking-wider">
          Test Diagnóstico
        </span>
        <span className="text-sm text-gray-500 font-medium bg-white/5 px-3 py-1 rounded-full">
          Pregunta {currentStep + 1} de {QUESTIONS.length}
        </span>
      </div>
      <div className="w-full h-1.5 bg-[#111111] rounded-full mb-12 overflow-hidden border border-white/5">
        <motion.div 
          className="h-full bg-gradient-to-r from-[#8b7bff] to-blue-500 relative"
          initial={{ width: 0 }}
          animate={{ width: `${((currentStep) / QUESTIONS.length) * 100}%` }}
          transition={{ duration: 0.5, ease: premiumEasing }}
        >
          <div className="absolute top-0 right-0 bottom-0 w-10 bg-white/20 blur-md" />
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, ease: premiumEasing }}
        >
          <h2 className="text-3xl font-bold text-white mb-3 tracking-tight leading-tight">{question.title}</h2>
          <p className="text-gray-400 mb-10 text-sm md:text-base">{question.subtitle}</p>

          <div className="space-y-3">
            {question.options.map((option) => {
              const isSelected = answers[question.id]?.id === option.id;
              
              return (
                <motion.button
                  key={option.id}
                  onClick={() => handleSelect(question.id, option)}
                  // 6. BLOQUEO VISUAL: Deshabilitamos el botón durante las transiciones
                  disabled={isTransitioning}
                  whileHover={!isTransitioning ? { scale: 1.01 } : {}}
                  whileTap={!isTransitioning ? { scale: 0.99 } : {}}
                  className={`w-full flex items-center gap-5 p-5 rounded-2xl border text-left transition-all duration-300 ${
                    isSelected 
                      ? 'bg-[#8b7bff]/10 border-[#8b7bff] shadow-[0_0_20px_rgba(139,123,255,0.15)]' 
                      : 'bg-[#111111] border-white/5 hover:border-white/20 hover:bg-white/5'
                  } ${isTransitioning && !isSelected ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    isSelected ? 'bg-[#8b7bff] text-white shadow-lg' : 'bg-black/40 text-gray-400 border border-white/5'
                  }`}>
                    {option.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold mb-1 transition-colors text-base ${isSelected ? 'text-[#8b7bff]' : 'text-gray-200'}`}>
                      {option.label}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{option.desc}</p>
                  </div>
                  {isSelected && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                      <CheckCircle2 className="w-6 h-6 text-[#8b7bff]" />
                    </motion.div>
                  )}
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}