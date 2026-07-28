export interface UserProfile {
  name: string;
  level: number;
  streakDays: number;
  currentModule: {
    id: number;
    title: string;
    progress: number; // 0-100
    href: string;
  };
  avatarSeed: string;
}

export interface DashboardStat {
  id: string;
  label: string;
  value: string;
  suffix: string;
  icon: "zap" | "book" | "target" | "trophy";
}

export interface ModuleCard {
  id: number;
  title: string;
  description: string;
  icon: "brain" | "message" | "terminal" | "network" | "rocket" | "flag";
  accent: "rose" | "orange" | "violet" | "teal" | "sky" | "amber";
  href: string;
  isPlaceholder?: boolean;
}

// TODO: cuando el backend esté listo, reemplaza el cuerpo de estas tres
// funciones por llamadas fetch/axios a tus endpoints reales.
// Los componentes no necesitan enterarse del cambio: solo consumen los tipos de arriba.

export async function getUserProfile(): Promise<UserProfile> {
  return {
    name: "Alex",
    level: 5,
    streakDays: 7,
    currentModule: {
      id: 3,
      title: "Módulo 3: Arquitectura CLI",
      progress: 40,
      href: "/dashboard/modules/3",
    },
    avatarSeed: "Alex",
  };
}

export async function getDashboardStats(): Promise<DashboardStat[]> {
  return [
    { id: "xp", label: "Experiencia", value: "2,450", suffix: "XP", icon: "zap" },
    { id: "modules", label: "Módulos", value: "3", suffix: "/ 6", icon: "book" },
    { id: "exercises", label: "Ejercicios", value: "15", suffix: "resueltos", icon: "target" },
    { id: "achievements", label: "Logros", value: "4", suffix: "desbloqueados", icon: "trophy" },
  ];
}

export async function getModules(): Promise<ModuleCard[]> {
  return [
    { id: 0, title: "Introducción y Configuración", description: "Prepara tu entorno antes de empezar.", icon: "rocket", accent: "sky", href: "/dashboard/modules/0", isPlaceholder: true },
    { id: 1, title: "Fundamentos de IA", description: "Aprende cómo piensan los modelos subyacentes.", icon: "brain", accent: "rose", href: "/dashboard/modules/1" },
    { id: 2, title: "Prompt Engineering", description: "El arte de dar instrucciones perfectas.", icon: "message", accent: "orange", href: "/dashboard/modules/2" },
    { id: 3, title: "Claude Code CLI", description: "Domina el desarrollo desde la terminal.", icon: "terminal", accent: "violet", href: "/dashboard/modules/3" },
    { id: 4, title: "Subagentes y MCP", description: "Conecta nodos y automatiza tu flujo.", icon: "network", accent: "teal", href: "/dashboard/modules/4" },
    { id: 5, title: "Proyecto Final", description: "Integra todo lo aprendido en un caso real.", icon: "flag", accent: "amber", href: "/dashboard/modules/5", isPlaceholder: true },
  ];
}