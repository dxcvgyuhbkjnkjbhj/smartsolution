"use client";

import React, { useState, useEffect } from 'react';
import { Bell, Search, User, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Esto es obligatorio en Next.js para que el icono del tema cargue correctamente sin errores
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="h-20 flex items-center justify-between px-8 bg-white/80 dark:bg-[#050505]/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/5 sticky top-0 z-40 transition-colors duration-300">
      
      {/* Search Bar */}
      <div className="flex-1 max-w-md">
        <div className="relative group">
          <Search className="w-4 h-4 text-gray-400 dark:text-gray-500 absolute left-3 top-1/2 -translate-y-1/2 group-focus-within:text-[#8b7bff] transition-colors" />
          <input 
            type="text" 
            placeholder="Buscar lecciones, comandos..." 
            className="w-full bg-gray-100 dark:bg-[#111111] border border-transparent dark:border-white/5 text-sm text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-600 rounded-full py-2 pl-10 pr-4 outline-none focus:border-[#8b7bff]/50 focus:bg-white dark:focus:bg-[#1a1a1a] focus:ring-4 focus:ring-[#8b7bff]/10 transition-all duration-300"
          />
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        
        {/* BOTÓN MODO CLARO / OSCURO */}
        <button 
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="relative p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors rounded-full hover:bg-gray-200 dark:hover:bg-white/5"
          aria-label="Alternar tema"
        >
          {mounted && theme === 'dark' ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>

        <button className="relative p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors rounded-full hover:bg-gray-200 dark:hover:bg-white/5">
          <Bell className="w-5 h-5" />
          {/* Notification Dot */}
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#8b7bff] rounded-full ring-2 ring-white dark:ring-[#050505]"></span>
        </button>
        
        <div className="h-8 w-px bg-gray-200 dark:bg-white/10 mx-2"></div>

        <button className="flex items-center gap-3 pl-2 pr-4 py-1.5 rounded-full border border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-[#111111] hover:border-[#8b7bff]/30 dark:hover:border-[#8b7bff]/30 transition-colors shadow-sm dark:shadow-none">
          <div className="w-7 h-7 bg-gradient-to-tr from-[#8b7bff] to-[#604dec] rounded-full flex items-center justify-center shadow-inner">
            <User className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Estudiante</span>
        </button>
      </div>
    </header>
  );
}