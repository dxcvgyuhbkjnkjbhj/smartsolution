import AuthContainer from "@/components/auth/AuthContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registro | Aprende Claude Code",
  description: "Crea tu cuenta gratuita para comenzar a aprender Claude Code desde cero.",
};

export default function RegisterPage() {
  return (
    <main>
      <AuthContainer initialView="register" />
    </main>
  );
}