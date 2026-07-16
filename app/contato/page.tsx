import ContactForm from "./ContactForm";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Contato() {
  return <main className="contact-page" id="top">
    <header className="contact-nav"><nav className="container" aria-label="Navegação principal">
      <a className="contact-logo" href="/" aria-label="SintExec — página inicial"><img src="/logo-sintexec.png" alt="SintExec" /></a>
      <div><a href="/">Home</a><a href="/plataforma">Plataforma</a><a href="/tecnologia">Tecnologia</a><a className="active" href="/contato">Contato</a></div>
      <a className="contact-nav-action" href="https://app.sintexec.com.br">Acessar plataforma <Arrow /></a>
    </nav></header>

    <section className="contact-hero"><div className="container contact-hero-layout"><div><span className="contact-kicker">CONTATO</span><h1>Vamos conversar.</h1><p>Estamos prontos para entender sua operação e mostrar como o SintExec pode apoiar sua equipe.</p><a href="#fale-conosco">Comece por aqui <span aria-hidden="true">↓</span></a></div><figure><img src="/contact-consultative.jpg" alt="Profissional trabalhando em um ambiente corporativo claro" /></figure></div></section>

    <section className="contact-conversation" id="fale-conosco"><div className="container conversation-layout"><div className="conversation-copy"><span className="contact-kicker">SOBRE SUA OPERAÇÃO</span><h2>Conte o que sua equipe precisa enxergar melhor.</h2><p>Queremos compreender seu cenário antes de apresentar uma resposta. Compartilhe os desafios, o volume de oportunidades e a forma como sua equipe trabalha hoje.</p><p className="next-step"><b>O que acontece depois?</b> Nosso time entrará em contato para conhecer sua operação e apresentar a plataforma no contexto da sua empresa.</p></div><ContactForm /></div></section>

    <section className="contact-options"><div className="container"><div className="contact-section-heading"><span className="contact-kicker">CANAIS DIRETOS</span><h2>Outras formas de falar com a gente.</h2></div><div className="contact-cards">
      <a href="mailto:contato@sintexec.com.br"><i aria-hidden="true">@</i><span><small>E-MAIL INSTITUCIONAL</small><b>contato@sintexec.com.br</b></span><strong aria-hidden="true">↗</strong></a>
      <a href="https://wa.me/5584996631083"><i aria-hidden="true">↗</i><span><small>WHATSAPP</small><b>Solicite uma demonstração</b></span><strong aria-hidden="true">↗</strong></a>
      <div><i aria-hidden="true">◷</i><span><small>ATENDIMENTO</small><b>Segunda a sexta</b><em>Horário comercial — Brasília.</em></span></div>
    </div></div></section>

    <section className="contact-who"><div className="container"><span className="contact-kicker">QUEM ATENDEMOS</span><blockquote>O SintExec atende empresas que participam de licitações públicas em todo o Brasil.</blockquote><p>Não importa apenas o porte da empresa. Importa a complexidade da operação, a responsabilidade das decisões e a vontade de trabalhar com mais contexto.</p></div></section>

    <section className="contact-final"><div className="container"><span className="contact-kicker">UM PRIMEIRO PASSO</span><h2>Sua próxima decisão pode começar com uma conversa.</h2><a href="https://wa.me/5584996631083">Solicitar demonstração <Arrow /></a></div></section>

    <footer className="contact-footer"><div className="container"><a href="/" aria-label="SintExec — página inicial"><img src="/logo-sintexec.png" alt="SintExec" /></a><span>Inteligência em Licitações</span><div><a href="/plataforma">Plataforma</a><a href="/tecnologia">Tecnologia</a><a href="/contato">Contato</a><a href="#top">Topo ↑</a></div></div></footer>
  </main>;
}
