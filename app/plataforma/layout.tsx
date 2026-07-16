import type { Metadata } from "next";
import "./plataforma.css";

export const metadata: Metadata = {
  title: "Plataforma SintExec | Inteligência em Licitações",
  description: "Conheça a plataforma SintExec e veja como a Central de Inteligência, o Decision Engine e as capacidades operacionais apoiam decisões durante todo o ciclo da oportunidade pública.",
};

export default function PlataformaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
