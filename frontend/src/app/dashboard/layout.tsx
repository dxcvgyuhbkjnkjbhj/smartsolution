import React from "react";
// Importamos tus componentes del diseño (Ajusta las rutas si las tienes en otras carpetas)
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import SplitScreenReveal from "@/components/ui/SplitScreenReveal";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 1. El efecto Premium de las puertas abriéndose
    <SplitScreenReveal>
      
      {/* 2. Contenedor principal del Dashboard */}
      <div className="flex h-screen bg-white dark:bg-[#050505] overflow-hidden transition-colors duration-300">
        
        {/* Barra Lateral (Sidebar) */}
        <Sidebar />

        {/* Columna Derecha (Header + Contenido) */}
        <div className="flex-1 flex flex-col overflow-hidden">
          
          <Header />
          
          {/* Aquí es donde Next.js inyecta el contenido de tus páginas (Módulos, Prácticas, etc) */}
          <main className="flex-1 overflow-y-auto p-6 md:p-8 scroll-smooth">
            <div className="max-w-7xl mx-auto">
              {children}
            </div>
          </main>

        </div>
      </div>
      
    </SplitScreenReveal>
  );
}