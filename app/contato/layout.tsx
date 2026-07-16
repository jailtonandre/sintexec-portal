import type { Metadata } from "next";
import "./contato.css";

export const metadata: Metadata = {
  title: "Contato SintExec | Fale com nosso time",
  description: "Converse com o time SintExec, apresente sua operação e conheça uma forma mais inteligente de acompanhar oportunidades públicas.",
};

export default function ContatoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
