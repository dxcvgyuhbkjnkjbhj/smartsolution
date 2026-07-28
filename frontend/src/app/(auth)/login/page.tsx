import AuthContainer from "@/components/auth/AuthContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iniciar Sesión | Aprende Claude Code",
  description: "Ingresa a tu cuenta para continuar aprendiendo.",
};

export default function LoginPage() {
  return (
    <main>
      <AuthContainer initialView="login" />
    </main>
  );
}