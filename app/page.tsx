export default function Home() {
  return <main id="conteudo" className="development-main">
    <section className="development-card" aria-labelledby="development-title">
      <span className="development-status"><span aria-hidden="true" /> Projeto em desenvolvimento</span>
      <p className="development-eyebrow">Inteligência em licitações</p>
      <h1 id="development-title">Estamos construindo<br /><span>o SintExec.</span></h1>
      <p className="development-lead">Uma plataforma pensada para apoiar empresas que participam de licitações e fornecem ao poder público.</p>
      <div className="development-notice">
        <h2>A plataforma ainda não está disponível.</h2>
        <p>O projeto está em desenvolvimento, sem data de lançamento definida. Neste momento, não oferecemos acesso, demonstrações ou contratação.</p>
      </div>
      <p className="development-contact">Para entrar em contato sobre o projeto:</p>
      <a className="development-button" href="mailto:contato@sintexec.com.br">contato@sintexec.com.br <span aria-hidden="true">↗</span></a>
    </section>
  </main>;
}
