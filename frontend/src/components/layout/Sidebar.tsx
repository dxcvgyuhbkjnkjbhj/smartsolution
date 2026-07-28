"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, BookOpen, FileText, Code, CheckSquare, 
  Trophy, Settings, LogOut, PanelLeftClose, PanelLeft
} from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: BookOpen, label: 'Módulos', path: '/dashboard/modules' },
    { icon: FileText, label: 'Lecciones', path: '/dashboard/lessons' },
    { icon: Code, label: 'Prácticas', path: '/dashboard/practices' },
    { icon: CheckSquare, label: 'Evaluaciones', path: '/dashboard/evaluations' },
    { icon: Trophy, label: 'Logros', path: '/dashboard/achievements' },
    { icon: Settings, label: 'Configuración', path: '/dashboard/settings' },
  ];

  return (
    <motion.aside
      initial={false}
      animate={{ width: isCollapsed ? '5rem' : '16rem' }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="relative h-screen bg-surface border-r border-borderMain flex flex-col z-20 shrink-0"
    >
      {/* Zona del Logo */}
      <div className="h-16 flex items-center px-4 mt-2">
        <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center shrink-0">
          <span className="text-surface font-bold text-sm">{'>_'}</span>
        </div>
        <AnimatePresence>
          {!isCollapsed && (
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              className="ml-3 font-bold text-textMain tracking-tight whitespace-nowrap"
            >
              Claude Code
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* NUEVO BOTÓN COLLAPSE (Estilo imagen de referencia) */}
      <div className="px-4 py-2 mb-2 border-b border-borderMain/50">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="flex items-center gap-3 py-2 text-textMuted hover:text-textMain transition-colors w-full group"
        >
          {isCollapsed ? (
            <PanelLeft size={20} className="shrink-0 mx-auto" />
          ) : (
            <PanelLeftClose size={20} className="shrink-0" />
          )}
          
          <AnimatePresence>
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                className="text-sm font-medium whitespace-nowrap"
              >
                Collapse
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Navegación */}
      <nav className="flex-1 px-3 py-2 flex flex-col gap-1 overflow-y-auto custom-scrollbar overflow-x-hidden">
        {menuItems.map((item) => {
          const isActive = pathname === item.path || pathname.startsWith(`${item.path}/`);
          return (
            <Link key={item.path} href={item.path}>
              <div className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-300 group relative ${isActive ? 'bg-primary/10 text-primary' : 'text-textMuted hover:bg-surfaceHover hover:text-textMain'}`}>
                <item.icon size={18} className={`shrink-0 ${isActive ? 'text-primary' : 'group-hover:text-accent transition-colors'}`} />
                <AnimatePresence>
                  {!isCollapsed && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 'auto' }}
                      exit={{ opacity: 0, width: 0 }}
                      className={`font-medium whitespace-nowrap text-sm ${isActive ? 'text-primary' : ''}`}
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Footer / Logout */}
      <div className="p-3 border-t border-borderMain/50">
        <button className="flex items-center gap-3 px-3 py-2.5 w-full rounded-lg text-textMuted hover:bg-danger/10 hover:text-danger transition-colors group">
          <LogOut size={18} className="shrink-0 mx-auto md:mx-0" />
          <AnimatePresence>
            {!isCollapsed && (
              <motion.span initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: 'auto' }} exit={{ opacity: 0, width: 0 }} className="font-medium whitespace-nowrap text-sm">
                Cerrar sesión
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </motion.aside>
  );
}