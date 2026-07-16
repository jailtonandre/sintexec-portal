const navigation = [["Home", "/"], ["Plataforma", "/plataforma"], ["Tecnologia", "/tecnologia"], ["Contato", "/contato"]] as const;

export default function SiteFooter() {
  return <footer className="site-footer">
    <div className="container site-footer-main">
      <div className="site-footer-brand"><a href="/" aria-label="SintExec — página inicial"><img src="/logo-sintexec.png" alt="SintExec" /></a><p>Uma Central de Inteligência para apoiar empresas durante todo o ciclo das oportunidades públicas.</p></div>
      <nav aria-label="Navegação do rodapé"><h2>Navegação</h2>{navigation.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
      <div className="site-footer-column"><h2>Institucional</h2><span className="site-unavailable">Manifesto SintExec (PDF) <small>Em breve</small></span><span className="site-unavailable">Política de Privacidade <small>Em breve</small></span><span className="site-unavailable">Termos de Uso <small>Em breve</small></span></div>
      <div className="site-footer-column"><h2>Contato</h2><a href="mailto:contato@sintexec.com.br">contato@sintexec.com.br</a><a href="https://wa.me/5584996631083">WhatsApp <span aria-hidden="true">↗</span></a><small>Segunda a sexta<br />Horário comercial — Brasília</small></div>
    </div>
    <div className="container site-footer-base"><span>© {new Date().getFullYear()} SintExec. Todos os direitos reservados.</span><span>Portal Institucional · v0.1.0</span></div>
  </footer>;
}
