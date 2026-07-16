"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  ["Home", "/"],
  ["Plataforma", "/plataforma"],
  ["Tecnologia", "/tecnologia"],
  ["Contato", "/contato"],
] as const;

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const scrollFrame = useRef<number | null>(null);

  useEffect(() => {
    const updateScrollState = () => {
      setScrolled(window.scrollY > 20);
      scrollFrame.current = null;
    };
    const handleScroll = () => {
      if (scrollFrame.current === null) scrollFrame.current = window.requestAnimationFrame(updateScrollState);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollFrame.current !== null) window.cancelAnimationFrame(scrollFrame.current);
    };
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) requestAnimationFrame(() => firstLinkRef.current?.focus());
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (event.key === "Tab" && open && menuRef.current) {
        const focusable = Array.from(menuRef.current.querySelectorAll<HTMLElement>('a[href],button:not([disabled])'));
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  return <header className={`site-header${pathname === "/" ? " is-home" : " is-internal"}${scrolled ? " is-scrolled" : ""}${open ? " menu-open" : ""}`}>
    <nav className="container site-header-inner" aria-label="Navegação principal">
      <a className="site-brand" href="/" aria-label="SintExec — página inicial"><img src="/logo-sintexec.png" alt="SintExec" /></a>
      <div className="site-nav-links">{links.map(([label, href]) => <a key={href} href={href} className={isActive(href) ? "active" : ""} aria-current={isActive(href) ? "page" : undefined}>{label}</a>)}</div>
      <div className="site-header-actions"><a className="site-access" href="https://app.sintexec.com.br">Acessar Plataforma</a><a className="site-demo" href="https://wa.me/5584996631083">Solicitar demonstração <span aria-hidden="true">↗</span></a></div>
      <button ref={toggleRef} className="site-menu-toggle" type="button" aria-expanded={open} aria-controls="site-mobile-menu" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen(value => !value)}><span /><span /></button>
    </nav>
    <div className="site-mobile-backdrop" onClick={() => { setOpen(false); toggleRef.current?.focus(); }} aria-hidden="true" />
    <div ref={menuRef} className="site-mobile-menu" id="site-mobile-menu" role="dialog" aria-modal="true" aria-label="Menu principal">
      <nav>{links.map(([label, href], index) => <a ref={index === 0 ? firstLinkRef : undefined} key={href} href={href} className={isActive(href) ? "active" : ""} aria-current={isActive(href) ? "page" : undefined}>{label}<span aria-hidden="true">{isActive(href) ? "—" : "↗"}</span></a>)}</nav>
      <div><a className="site-demo" href="https://wa.me/5584996631083">Solicitar demonstração <span aria-hidden="true">↗</span></a><a className="site-access" href="https://app.sintexec.com.br">Acessar Plataforma</a></div>
      <p>Inteligência em Licitações</p>
    </div>
  </header>;
}
