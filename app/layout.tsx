import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./refinements.css";
const sans=Geist({variable:"--font-sans",subsets:["latin"]});
const mono=Geist_Mono({variable:"--font-mono",subsets:["latin"]});
export const metadata:Metadata={
  metadataBase:new URL("https://sintexec-concept.business-personal.chatgpt.site"),
  title:"SintExec — Inteligência em Licitações",
  description:"Uma Central de Inteligência para transformar dados públicos em contexto, sinais e decisões.",
  openGraph:{title:"SintExec — Inteligência em Licitações",description:"Veja antes. Decida melhor.",images:["/og.png"]},
  twitter:{card:"summary_large_image",title:"SintExec — Inteligência em Licitações",description:"Veja antes. Decida melhor.",images:["/og.png"]}
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body className={`${sans.variable} ${mono.variable}`}>{children}</body></html>}
