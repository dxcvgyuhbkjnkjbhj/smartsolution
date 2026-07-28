"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, Eye, EyeOff, Github, ArrowRight, CheckCircle2, XCircle, Loader2, Sparkles, Code2, Cpu } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface AuthContainerProps {
  initialView?: 'login' | 'register';
}

export default function AuthContainer({ initialView = 'login' }: AuthContainerProps) {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(initialView === 'login');

  // Estados de Login
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  // Estados de Registro
  const [regName, setRegName] = useState('');
  const [regLastName, setRegLastName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regConfirmPassword, setRegConfirmPassword] = useState('');
  const [showRegPassword, setShowRegPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  // Físicas Premium (Linear / Apple Easing)
  const premiumEasing: [number, number, number, number] = [0.22, 1, 0.36, 1];
  const transitionProps = { duration: 0.8, ease: premiumEasing };

  // Validaciones Dinámicas
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isLoginEmailValid = emailRegex.test(loginEmail);
  const isRegEmailValid = emailRegex.test(regEmail);
  const isLoginPasswordValid = loginPassword.length >= 8;

  const rules = [
    { id: 'length', label: 'Mínimo 8 caracteres', isValid: regPassword.length >= 8 },
    { id: 'upper', label: 'Una letra mayúscula', isValid: /[A-Z]/.test(regPassword) },
    { id: 'lower', label: 'Una letra minúscula', isValid: /[a-z]/.test(regPassword) },
    { id: 'num', label: 'Un número', isValid: /[0-9]/.test(regPassword) },
    { id: 'sym', label: 'Un símbolo especial', isValid: /[^A-Za-z0-9]/.test(regPassword) },
  ];

  const isRegPasswordValid = rules.every(r => r.isValid);
  const passwordsMatch = regPassword === regConfirmPassword && regPassword.length > 0;

  // Manejador del Slider y URL sin recarga
  const toggleView = (view: 'login' | 'register') => {
    setIsLogin(view === 'login');
    window.history.pushState(null, '', `/${view}`);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoginEmailValid || !isLoginPasswordValid) return;
    
    setIsLoading(true);
    
    // Simula llamada a BD
    setTimeout(() => { 
      // 🚦 USUARIO EXISTENTE: Va al dashboard enviando el aviso visual a la URL
      router.push('/dashboard?from=login'); 
    }, 1500);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isRegEmailValid || !isRegPasswordValid || !passwordsMatch) return;
    
    setIsLoading(true);
    
    // Simula registro en BD
    setTimeout(() => { 
      // 🚦 USUARIO NUEVO: Va al onboarding primero
      router.push('/onboarding'); 
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505] p-4 relative overflow-hidden font-sans text-white selection:bg-[#8b7bff]/30">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#8b7bff]/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none" />

      {/* CONTENEDOR MAESTRO */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={transitionProps}
        className="relative w-full max-w-[1000px] h-[680px] bg-[#0a0a0a]/60 backdrop-blur-3xl border border-white/10 shadow-[0_20px_70px_rgba(0,0,0,0.7)] rounded-[2rem] overflow-hidden flex"
      >
        
        {/* ================= FORMULARIO DE REGISTRO (Izquierda) ================= */}
        <motion.div
          animate={{ 
            x: isLogin ? '-100%' : '0%', 
            opacity: isLogin ? 0 : 1,
            zIndex: isLogin ? 0 : 10
          }}
          transition={transitionProps}
          className="absolute top-0 left-0 w-full md:w-1/2 h-full flex flex-col justify-center px-8 md:px-12 overflow-y-auto custom-scrollbar"
        >
          <div className="max-w-md mx-auto w-full py-8">
            <h2 className="text-2xl font-semibold mb-2 text-white">Comienza tu viaje</h2>
            <p className="text-sm text-gray-400 mb-8">Únete a la plataforma y domina la programación con IA.</p>

            <form onSubmit={handleRegister} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-400 ml-1">Nombre</label>
                  <div className={`relative flex items-center bg-black/20 backdrop-blur-md rounded-xl border transition-all duration-300 ${focusedInput === 'regName' ? 'border-[#8b7bff] ring-2 ring-[#8b7bff]/20' : 'border-white/10 hover:border-white/20'}`}>
                    <User className="w-4 h-4 text-gray-500 absolute left-3.5" />
                    <input type="text" required disabled={isLoading} value={regName} onChange={(e) => setRegName(e.target.value)} onFocus={() => setFocusedInput('regName')} onBlur={() => setFocusedInput(null)} className="w-full bg-transparent text-sm py-3 pl-10 pr-4 outline-none placeholder:text-gray-600 text-white" placeholder="Juan" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-400 ml-1">Apellidos</label>
                  <div className={`relative flex items-center bg-black/20 backdrop-blur-md rounded-xl border transition-all duration-300 ${focusedInput === 'regLast' ? 'border-[#8b7bff] ring-2 ring-[#8b7bff]/20' : 'border-white/10 hover:border-white/20'}`}>
                    <input type="text" required disabled={isLoading} value={regLastName} onChange={(e) => setRegLastName(e.target.value)} onFocus={() => setFocusedInput('regLast')} onBlur={() => setFocusedInput(null)} className="w-full bg-transparent text-sm py-3 px-4 outline-none placeholder:text-gray-600 text-white" placeholder="Pérez" />
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-400 ml-1">Correo electrónico</label>
                <div className={`relative flex items-center bg-black/20 backdrop-blur-md rounded-xl border transition-all duration-300 ${focusedInput === 'regEmail' ? 'border-[#8b7bff] ring-2 ring-[#8b7bff]/20' : isRegEmailValid ? 'border-emerald-500/50 bg-emerald-500/5' : regEmail.length > 0 ? 'border-red-500/50' : 'border-white/10 hover:border-white/20'}`}>
                  <Mail className="w-4 h-4 text-gray-500 absolute left-3.5" />
                  <input type="email" required disabled={isLoading} value={regEmail} onChange={(e) => setRegEmail(e.target.value)} onFocus={() => setFocusedInput('regEmail')} onBlur={() => setFocusedInput(null)} className="w-full bg-transparent text-sm py-3 pl-10 pr-10 outline-none placeholder:text-gray-600 text-white" placeholder="tu@correo.com" />
                  <AnimatePresence>
                    {regEmail.length > 0 && (
                      <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }} className="absolute right-3.5">
                        {isRegEmailValid ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <XCircle className="w-4 h-4 text-red-400/80" />}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-400 ml-1">Contraseña</label>
                <div className={`relative flex items-center bg-black/20 backdrop-blur-md rounded-xl border transition-all duration-300 ${focusedInput === 'regPwd' ? 'border-[#8b7bff] ring-2 ring-[#8b7bff]/20' : isRegPasswordValid ? 'border-emerald-500/50 bg-emerald-500/5' : 'border-white/10 hover:border-white/20'}`}>
                  <Lock className="w-4 h-4 text-gray-500 absolute left-3.5" />
                  <input type={showRegPassword ? 'text' : 'password'} required disabled={isLoading} value={regPassword} onChange={(e) => setRegPassword(e.target.value)} onFocus={() => setFocusedInput('regPwd')} onBlur={() => setFocusedInput(null)} className="w-full bg-transparent text-sm py-3 pl-10 pr-10 outline-none placeholder:text-gray-600 text-white" placeholder="••••••••" />
                  <button type="button" onClick={() => setShowRegPassword(!showRegPassword)} className="absolute right-3.5 text-gray-500 hover:text-gray-300 transition-colors">
                    {showRegPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <AnimatePresence>
                {regPassword.length > 0 && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="bg-black/30 backdrop-blur-md border border-white/5 rounded-xl p-4 overflow-hidden">
                    <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                      {rules.map(rule => (
                        <div key={rule.id} className={`flex items-center gap-2 text-xs transition-colors duration-300 ${rule.isValid ? 'text-emerald-400' : 'text-red-400/80'}`}>
                          {rule.isValid ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                          <span>{rule.label}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {regPassword.length > 0 && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="space-y-1.5 overflow-hidden">
                    <label className="text-xs font-medium text-gray-400 ml-1">Confirmar Contraseña</label>
                    <div className={`relative flex items-center bg-black/20 backdrop-blur-md rounded-xl border transition-all duration-300 ${focusedInput === 'regConfPwd' ? 'border-[#8b7bff] ring-2 ring-[#8b7bff]/20' : (regConfirmPassword.length > 0 && passwordsMatch ? 'border-emerald-500/50 bg-emerald-500/5' : 'border-white/10 hover:border-white/20')}`}>
                      <Lock className="w-4 h-4 text-gray-500 absolute left-3.5" />
                      <input type={showRegPassword ? 'text' : 'password'} required disabled={isLoading} value={regConfirmPassword} onChange={(e) => setRegConfirmPassword(e.target.value)} onFocus={() => setFocusedInput('regConfPwd')} onBlur={() => setFocusedInput(null)} className="w-full bg-transparent text-sm py-3 pl-10 pr-10 outline-none placeholder:text-gray-600 text-white" placeholder="••••••••" />
                      {regConfirmPassword.length > 0 && (
                        <div className="absolute right-3.5">
                          {passwordsMatch ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <XCircle className="w-4 h-4 text-red-400/80" />}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} disabled={isLoading || !isRegEmailValid || !isRegPasswordValid || (regPassword.length > 0 && !passwordsMatch)} type="submit" className="w-full bg-[#8b7bff] hover:bg-[#796ae6] text-white font-medium py-3 rounded-xl transition-all shadow-[0_0_20px_rgba(139,123,255,0.2)] flex justify-center items-center gap-2 mt-4 disabled:opacity-50 disabled:cursor-not-allowed">
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <span>Registrarse</span>}
              </motion.button>
            </form>
            
            {/* Solo visible en móvil, oculto en Desktop por el Overlay */}
            <p className="mt-8 text-center text-sm text-gray-400 md:hidden">
              ¿Ya tienes cuenta?{' '}
              <button onClick={() => toggleView('login')} className="text-[#8b7bff] hover:text-white font-medium">Inicia sesión</button>
            </p>
          </div>
        </motion.div>

        {/* ================= FORMULARIO DE LOGIN (Derecha) ================= */}
        <motion.div
          animate={{ 
            x: isLogin ? '0%' : '-100%', 
            opacity: isLogin ? 1 : 0,
            zIndex: isLogin ? 10 : 0
          }}
          transition={transitionProps}
          className="absolute top-0 left-0 md:left-[50%] w-full md:w-1/2 h-full flex flex-col justify-center px-8 md:px-12 overflow-y-auto custom-scrollbar"
        >
          <div className="max-w-sm mx-auto w-full py-8">
            <h2 className="text-2xl font-semibold mb-2 text-white">Bienvenido de nuevo</h2>
            <p className="text-sm text-gray-400 mb-8">Ingresa tus credenciales para continuar tu aprendizaje.</p>

            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-400 ml-1">Correo electrónico</label>
                <div className={`relative flex items-center bg-black/20 backdrop-blur-md rounded-xl border transition-all duration-300 ${focusedInput === 'loginEmail' ? 'border-[#8b7bff] ring-2 ring-[#8b7bff]/20' : isLoginEmailValid ? 'border-emerald-500/50 bg-emerald-500/5' : loginEmail.length > 0 ? 'border-red-500/50' : 'border-white/10 hover:border-white/20'}`}>
                  <Mail className="w-4 h-4 text-gray-500 absolute left-3.5" />
                  <input type="email" required disabled={isLoading} value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} onFocus={() => setFocusedInput('loginEmail')} onBlur={() => setFocusedInput(null)} className="w-full bg-transparent text-sm py-3 pl-10 pr-10 outline-none placeholder:text-gray-600 text-white" placeholder="tu@correo.com" />
                  <AnimatePresence>
                    {loginEmail.length > 0 && (
                      <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }} className="absolute right-3.5">
                        {isLoginEmailValid ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <XCircle className="w-4 h-4 text-red-400/80" />}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-xs font-medium text-gray-400">Contraseña</label>
                  <button type="button" className="text-xs text-[#8b7bff] hover:text-[#a094ff] transition-colors">¿Olvidaste tu contraseña?</button>
                </div>
                <div className={`relative flex items-center bg-black/20 backdrop-blur-md rounded-xl border transition-all duration-300 ${focusedInput === 'loginPwd' ? 'border-[#8b7bff] ring-2 ring-[#8b7bff]/20' : isLoginPasswordValid ? 'border-emerald-500/50 bg-emerald-500/5' : 'border-white/10 hover:border-white/20'}`}>
                  <Lock className="w-4 h-4 text-gray-500 absolute left-3.5" />
                  <input type={showLoginPassword ? 'text' : 'password'} required disabled={isLoading} value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} onFocus={() => setFocusedInput('loginPwd')} onBlur={() => setFocusedInput(null)} className="w-full bg-transparent text-sm py-3 pl-10 pr-14 outline-none placeholder:text-gray-600 text-white" placeholder="••••••••" />
                  <AnimatePresence>
                    {loginPassword.length > 0 && (
                      <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }} className="absolute right-10">
                        {isLoginPasswordValid && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <button type="button" onClick={() => setShowLoginPassword(!showLoginPassword)} className="absolute right-3.5 text-gray-500 hover:text-gray-300 transition-colors">
                    {showLoginPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center ml-1">
                <input type="checkbox" id="remember" className="w-4 h-4 rounded border-white/10 text-[#8b7bff] focus:ring-[#8b7bff]/30 bg-black/20 cursor-pointer" />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-400 cursor-pointer select-none">Recordarme en este equipo</label>
              </div>

              <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} disabled={isLoading || !isLoginEmailValid || !isLoginPasswordValid} type="submit" className="w-full bg-[#8b7bff] hover:bg-[#796ae6] text-white font-medium py-3 rounded-xl transition-all shadow-[0_0_20px_rgba(139,123,255,0.2)] flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <span>Iniciar sesión</span>}
              </motion.button>
            </form>

            <div className="mt-8 mb-6 flex items-center text-xs text-gray-500">
              <div className="flex-1 h-px bg-white/10"></div>
              <span className="px-4 uppercase tracking-wider font-medium">o continuar con</span>
              <div className="flex-1 h-px bg-white/10"></div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex items-center justify-center gap-2 bg-black/20 border border-white/10 hover:border-white/20 py-2.5 rounded-xl text-sm transition-colors text-gray-300 backdrop-blur-sm">
                <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
                Google
              </motion.button>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex items-center justify-center gap-2 bg-black/20 border border-white/10 hover:border-white/20 py-2.5 rounded-xl text-sm transition-colors text-gray-300 backdrop-blur-sm">
                <Github className="w-4 h-4" /> GitHub
              </motion.button>
            </div>
            
            {/* Solo visible en móvil, oculto en Desktop por el Overlay */}
            <p className="mt-8 text-center text-sm text-gray-400 md:hidden">
              ¿No tienes una cuenta?{' '}
              <button onClick={() => toggleView('register')} className="text-[#8b7bff] hover:text-white font-medium flex items-center gap-1 inline-flex ml-1 group">
                Crear cuenta <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </p>
          </div>
        </motion.div>

        {/* ================= PANEL INFORMATIVO (El Sliding Overlay Mágico) ================= */}
        <motion.div
          animate={{ x: isLogin ? '0%' : '100%' }}
          transition={transitionProps}
          className="hidden md:block absolute top-0 left-0 w-1/2 h-full z-50 overflow-hidden bg-gradient-to-br from-[#16161a] to-[#0a0a0a] border border-white/5 shadow-2xl"
        >
          {/* Fondo animado del panel */}
          <motion.div animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-20 right-10 w-24 h-24 bg-[#8b7bff]/10 border border-[#8b7bff]/20 rounded-2xl backdrop-blur-md flex items-center justify-center rotate-12">
            <Code2 className="w-8 h-8 text-[#8b7bff]/50" />
          </motion.div>
          <motion.div animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-32 left-10 w-32 h-32 bg-blue-500/5 border border-blue-500/10 rounded-full backdrop-blur-md flex items-center justify-center">
            <Cpu className="w-10 h-10 text-blue-400/30" />
          </motion.div>

          {/* Textos cruzados con Parallax */}
          <div className="relative w-full h-full text-center text-white">
            
            {/* Texto cuando está en LOGIN (Invitando a Registrarse) */}
            <motion.div
              animate={{ 
                x: isLogin ? '0%' : '-50%', 
                opacity: isLogin ? 1 : 0 
              }}
              transition={transitionProps}
              className={`absolute inset-0 flex flex-col items-center justify-center p-12 ${isLogin ? 'pointer-events-auto' : 'pointer-events-none'}`}
            >
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 shadow-lg backdrop-blur-sm">
                <span className="text-[#8b7bff] font-bold text-xl">{'>_'}</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight mb-4 leading-tight">
                ¿Nuevo aquí? <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b7bff] to-blue-400">Descubre la magia</span>
              </h1>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-10">
                Regístrate y comienza tu viaje para dominar el desarrollo de software impulsado por inteligencia artificial.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} 
                onClick={() => toggleView('register')}
                className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/5 hover:border-[#8b7bff]/50 transition-all font-medium text-sm flex items-center gap-2 group"
              >
                Crear cuenta <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>

            {/* Texto cuando está en REGISTRO (Invitando a Iniciar Sesión) */}
            <motion.div
              animate={{ 
                x: isLogin ? '50%' : '0%', 
                opacity: isLogin ? 0 : 1 
              }}
              transition={transitionProps}
              className={`absolute inset-0 flex flex-col items-center justify-center p-12 ${!isLogin ? 'pointer-events-auto' : 'pointer-events-none'}`}
            >
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 shadow-lg backdrop-blur-sm">
                <span className="text-emerald-400 font-bold text-xl">{'>_'}</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight mb-4 leading-tight">
                ¿Ya eres parte? <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">Continúa creando</span>
              </h1>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-10">
                Inicia sesión para retomar tus módulos, ver tus logros y seguir programando con Claude.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} 
                onClick={() => toggleView('login')}
                className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/5 hover:border-emerald-400/50 transition-all font-medium text-sm flex items-center gap-2 group"
              >
                <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" /> Iniciar sesión
              </motion.button>
            </motion.div>

          </div>
        </motion.div>

      </motion.div>

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { width: 0px; background: transparent; }
        .custom-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
}