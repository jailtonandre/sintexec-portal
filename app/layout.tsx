import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./development.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
const sans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const description = "O SintExec está em desenvolvimento. A plataforma ainda não está disponível e não há data de lançamento definida.";
export const metadata: Metadata = {
  metadataBase: new URL("https://sintexec.com.br"),
  title: "SintExec — Projeto em desenvolvimento",
  description,
  openGraph: { title: "SintExec — Projeto em desenvolvimento", description, type: "website", locale: "pt_BR" },
  twitter: { card: "summary", title: "SintExec — Projeto em desenvolvimento", description },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR"><body className={sans.variable}><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><SiteHeader />{children}<SiteFooter /></body></html>;
}
