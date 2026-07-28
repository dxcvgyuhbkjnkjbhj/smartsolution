"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Code2, Rocket, Lightbulb, Laptop, Cpu, CheckCircle2, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

// Interfaces de tipado estricto
interface Option {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

interface Question {
  id: string;
  title: string;
  subtitle: string;
  options: Option[];
}

// Datos del cuestionario interactivo
const QUESTIONS: Question[] = [
  {
    id: 'goal',
    title: '¿Cuál es tu objetivo principal?',
    subtitle: 'Queremos adaptar tu experiencia de aprendizaje a tus metas reales.',
    options: [
      { id: 'startup', label: 'Emprender un negocio', description: 'Crear mi propia startup o SaaS digital.', icon: <Rocket className="w-6 h-6" /> },
      { id: 'work', label: 'Automatizar mi trabajo', description: 'Ser más eficiente en mi día a día laboral.', icon: <Briefcase className="w-6 h-6" /> },
      { id: 'career', label: 'Cambiar de carrera', description: 'Quiero convertirme en desarrollador profesional.', icon: <Laptop className="w-6 h-6" /> },
      { id: 'hobby', label: 'Curiosidad y Hobby', description: 'Me apasiona la IA y quiero explorar qué puede hacer.', icon: <Lightbulb className="w-6 h-6" /> },
    ]
  },
  {
    id: 'experience',
    title: '¿Cuál es tu nivel de programación?',
    subtitle: 'No te preocupes, Claude Code te ayudará sin importar tu nivel.',
    options: [
      { id: 'zero', label: 'Cero experiencia', description: 'Nunca he escrito una línea de código.', icon: <div className="text-2xl">🌱</div> },
      { id: 'beginner', label: 'Principiante', description: 'Conozco lo básico (HTML, CSS, un poco de JS).', icon: <div className="text-2xl">📘</div> },
      { id: 'intermediate', label: 'Intermedio', description: 'He construido proyectos pequeños antes.', icon: <div className="text-2xl">🛠️</div> },
      { id: 'advanced', label: 'Avanzado', description: 'Soy desarrollador y quiero potenciarme con IA.', icon: <Cpu className="w-6 h-6" /> },
    ]
  },
  {
    id: 'project',
    title: '¿Qué te gustaría construir primero?',
    subtitle: 'Elige el tipo de proyecto con el que iniciaremos tu primer reto.',
    options: [
      { id: 'web', label: 'Plataforma Web', description: 'E-commerce, landing pages, dashboards.', icon: <Laptop className="w-6 h-6" /> },
      { id: 'mobile', label: 'App Móvil', description: 'Aplicaciones para iOS y Android.', icon: <div className="text-2xl">📱</div> },
      { id: 'ai', label: 'Herramienta de IA', description: 'Chatbots, generadores de contenido, agentes.', icon: <div className="text-2xl">🤖</div> },
      { id: 'api', label: 'Backend y APIs', description: 'Lógica de servidores y bases de datos.', icon: <Code2 className="w-6 h-6" /> },
    ]
  }
];

export default function OnboardingFlow() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isFinishing, setIsFinishing] = useState(false);
  
  // 1. EL CANDADO DE TRANSICIÓN: Declarado correctamente DENTRO del componente
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Curvas de animación premium (Easing premium)
  const slideVariants = {
    enter: { x: 100, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -100, opacity: 0 }
  };

  const finishOnboarding = async () => {
    setIsFinishing(true);
    try {
      // Aquí iría la llamada a la API para guardar el perfil: await api.saveProfile(answers);
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulando carga
      
      // Redirigir al dashboard de aprendizaje
router.push('/dashboard?from=onboarding');    } catch (error) {
      console.error(error);
      setIsFinishing(false);
    }
  };

  const handleSelect = (questionId: string, optionId: string) => {
    // 1. EL CANDADO: Si ya está haciendo la transición, ignora cualquier otro clic rápido
    if (isTransitioning) return;
    
    // 2. Cerramos el candado inmediatamente
    setIsTransitioning(true);
    
    // Guardamos la respuesta del usuario
    setAnswers(prev => ({ ...prev, [questionId]: optionId }));
    
    // Pequeña pausa para que el usuario vea que seleccionó la opción antes de cambiar (UX)
    setTimeout(() => {
      // Si hay más preguntas, avanzamos
      if (currentStep < QUESTIONS.length - 1) {
        setCurrentStep(prev => prev + 1);
        
        // 3. Abrimos el candado medio segundo después (cuando acabe la animación visual de Framer Motion)
        setTimeout(() => {
          setIsTransitioning(false);
        }, 500); 
      } else {
        // Si ya no hay preguntas, terminamos
        finishOnboarding();
        // Nota: Aquí no abrimos el candado para que no toque nada mientras carga el Dashboard
      }
    }, 400);
  };

  // Pantalla de carga final
  if (isFinishing) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-text-primary p-4">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="glass-panel p-10 rounded-2xl flex flex-col items-center text-center max-w-sm relative z-10"
        >
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute inset-0 border-2 border-primary border-t-transparent rounded-full"
            />
            <CheckCircle2 className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-xl font-bold mb-2">Preparando tu entorno</h2>
          <p className="text-sm text-text-secondary">Configurando tu ruta de aprendizaje personalizada basándonos en tus respuestas...</p>
        </motion.div>
      </div>
    );
  }

  // Extracción de la pregunta actual
  const currentQuestion = QUESTIONS[currentStep];
  const progressPercentage = ((currentStep) / QUESTIONS.length) * 100;

  // 4. EL SALVAVIDAS: Evita el "TypeError: undefined" si el índice se desincroniza
  if (!currentQuestion) return null; 

  return (
    <div className="min-h-screen flex flex-col bg-background text-text-primary p-4 overflow-hidden relative">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      {/* Header & Progress Bar */}
      <header className="w-full max-w-4xl mx-auto py-8 relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-primary font-bold text-xl">{'>_'}</span>
            <span className="font-semibold tracking-tight">Aprende Claude Code</span>
          </div>
          <span className="text-sm font-medium text-text-secondary">
            Paso {currentStep + 1} de {QUESTIONS.length}
          </span>
        </div>
        
        {/* Barra de progreso animada */}
        <div className="h-1.5 w-full bg-surface rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-primary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.8 }}
          />
        </div>
      </header>

      {/* Main Content Area con animaciones horizontales */}
      <main className="flex-1 flex flex-col items-center justify-center w-full max-w-3xl mx-auto relative z-10 pb-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <div className="text-center mb-10">
              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
              >
                {currentQuestion.title}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-text-secondary text-base md:text-lg max-w-xl mx-auto"
              >
                {currentQuestion.subtitle}
              </motion.p>
            </div>

            {/* Grid de opciones con microinteracciones */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentQuestion.options.map((option, index) => {
                const isSelected = answers[currentQuestion.id] === option.id;

                return (
                  <motion.button
                    key={option.id}
                    disabled={isTransitioning} // Bloqueo de HTML nativo durante transición
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + (index * 0.1) }}
                    whileHover={!isTransitioning ? { scale: 1.02, transition: { duration: 0.2 } } : {}}
                    whileTap={!isTransitioning ? { scale: 0.98 } : {}}
                    onClick={() => handleSelect(currentQuestion.id, option.id)}
                    className={`relative p-6 rounded-2xl text-left transition-all duration-300 border ${
                      isSelected 
                        ? 'bg-primary/10 border-primary shadow-[0_0_20px_rgba(139,123,255,0.15)]' 
                        : 'glass-panel hover:bg-surface/90 hover:border-white/10'
                    } ${isTransitioning ? 'cursor-not-allowed opacity-90' : ''}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl transition-colors duration-300 ${
                        isSelected ? 'bg-primary text-white' : 'bg-surface border border-border text-text-secondary'
                      }`}>
                        {option.icon}
                      </div>
                      <div>
                        <h3 className={`font-semibold text-lg mb-1 transition-colors duration-300 ${
                          isSelected ? 'text-primary' : 'text-white'
                        }`}>
                          {option.label}
                        </h3>
                        <p className="text-sm text-text-secondary leading-relaxed">
                          {option.description}
                        </p>
                      </div>
                    </div>

                    {/* Indicador de selección */}
                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          className="absolute top-4 right-4 text-primary"
                        >
                          <CheckCircle2 className="w-6 h-6" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}