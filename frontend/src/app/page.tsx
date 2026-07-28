import { redirect } from "next/navigation";

export default function HomePage() {
  // Redirección ultrarrápida del lado del servidor.
  // Cuando el usuario entra a localhost:3000, es enviado instantáneamente a /login
  redirect("/login");
}   