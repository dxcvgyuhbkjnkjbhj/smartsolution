import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Design System Centralizado */
        background: "var(--background)",
        surface: "var(--surface)",
        surfaceHover: "var(--surface-hover)",
        
        primary: {
          DEFAULT: "var(--primary)",
          hover: "var(--primary-hover)",
        },
        
        accent: {
          DEFAULT: "var(--accent)",
        },
        
        textMain: "var(--text-main)",
        textMuted: "var(--text-muted)",
        borderMain: "var(--border)",

        /* Colores de Sistema */
        success: { DEFAULT: "#10b981", bg: "rgba(16, 185, 129, 0.1)" },
        danger: { DEFAULT: "#ef4444", bg: "rgba(239, 68, 68, 0.1)" },
        warning: { DEFAULT: "#f59e0b", bg: "rgba(245, 158, 11, 0.1)" },
      },
    },
  },
  plugins: [],
};

export default config;