import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const sans=Geist({variable:"--font-sans",subsets:["latin"]});
const mono=Geist_Mono({variable:"--font-mono",subsets:["latin"]});
export const metadata:Metadata={title:"SintExec — Inteligência em Licitações",description:"Uma Central de Inteligência para transformar dados públicos em contexto, sinais e decisões."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body className={`${sans.variable} ${mono.variable}`}>{children}</body></html>}
