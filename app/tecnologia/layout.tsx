import type { Metadata } from "next";
import "./tecnologia.css";

export const metadata: Metadata = {
  title: "Tecnologia SintExec | Segurança, Rastreabilidade e Inteligência",
  description: "Conheça os princípios tecnológicos do SintExec e veja como segurança, rastreabilidade, explicabilidade e governança apoiam decisões em licitações.",
};

export default function TecnologiaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
