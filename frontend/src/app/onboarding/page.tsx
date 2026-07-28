import OnboardingFlow from "./OnboardingFlow";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personaliza tu experiencia | Aprende Claude Code",
  description: "Cuéntanos sobre ti para adaptar el contenido a tus metas y nivel de experiencia.",
};

export default function OnboardingPage() {
  return (
    <main>
      <OnboardingFlow />
    </main>
  );
}