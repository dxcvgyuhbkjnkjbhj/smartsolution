import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tu Plataforma Educativa",
  description: "Plataforma de aprendizaje profesional",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      {/* 
        EL CAMBIO CLAVE ESTÁ AQUÍ ABAJO:
        Ya no usamos "dark:bg-[#050505]". Usamos "bg-background text-textMain".
        Tailwind leerá tu globals.css y aplicará los azules profundos o celestes automáticamente.
      */}
      <body 
        className={`${inter.className} bg-background text-textMain transition-colors duration-500 selection:bg-accent/30`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}