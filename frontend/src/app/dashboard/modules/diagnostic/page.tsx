import React from 'react';
import { Metadata } from 'next';
import DiagnosticFlow from '@/components/modules/DiagnosticFlow';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Diagnóstico Inicial | Aprende Claude Code",
  description: "Evalúa tu nivel actual para personalizar tu ruta.",
};

export default function DiagnosticPage() {
  return (
    <div className="min-h-full pb-20">
      <Link href="/dashboard/modules" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors mb-8 group">
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Volver a los módulos
      </Link>
      <DiagnosticFlow />
    </div>
  );
}
