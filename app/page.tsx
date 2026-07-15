const cycle = [
  ["01", "Edital", "A oportunidade nasce"],
  ["02", "Inteligência", "Os dados ganham contexto"],
  ["03", "Análise", "Risco e aderência aparecem"],
  ["04", "Decisão", "A empresa escolhe com clareza"],
  ["05", "Preparação", "A estratégia vira ação"],
  ["06", "Pregão", "A disputa acontece"],
  ["07", "Execução", "O compromisso é entregue"],
  ["08", "Contrato", "O ciclo gera aprendizado"],
];

const principles = [
  ["01", "Inteligência antes da execução", "Antes de mobilizar pessoas, fornecedores e capital, é preciso saber se a oportunidade faz sentido."],
  ["02", "Dados com contexto", "Informação isolada não orienta. O contexto revela relevância, risco e possibilidade."],
  ["03", "Indicadores que orientam", "Menos ruído, mais sinais que ajudam sua equipe a chegar a uma decisão."],
  ["04", "Transparência por princípio", "Critérios claros para que cada recomendação possa ser compreendida e discutida."],
  ["05", "Apoio à decisão humana", "Tecnologia para ampliar a capacidade das pessoas — nunca para substituir seu julgamento."],
  ["06", "Risco tratado com clareza", "Antecipar restrições e incompatibilidades antes que elas se tornem custo operacional."],
];

const segments = ["Medicamentos", "Saúde hospitalar", "Construção civil", "Engenharia", "Tecnologia", "Alimentação", "Serviços especializados"];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="SintExec — início"><span className="brand-mark">S</span><span>SintExec</span></a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#visao">Visão</a><a href="#ciclo">Como pensamos</a><a href="#inteligencia">Plataforma</a><a href="#principios">Princípios</a>
        </nav>
        <a className="header-action" href="#conheca">Acessar plataforma <Arrow /></a>
        <details className="mobile-menu"><summary aria-label="Abrir menu">Menu</summary><nav><a href="#visao">Visão</a><a href="#ciclo">Como pensamos</a><a href="#inteligencia">Plataforma</a><a href="#principios">Princípios</a></nav></details>
      </header>

      <section className="hero shell" id="inicio">
        <div className="eyebrow"><span></span> Inteligência em Licitações</div>
        <h1>Decidir melhor<br />muda <em>tudo.</em></h1>
        <div className="hero-bottom">
          <p>Transformamos dados em decisões durante todo o ciclo da oportunidade pública.</p>
          <div className="hero-actions"><a className="button primary" href="#inteligencia">Conheça a plataforma <Arrow /></a><a className="button text" href="#manifesto">Leia o manifesto <span aria-hidden="true">↓</span></a></div>
        </div>
        <div className="signal-panel" aria-label="Representação conceitual da Central de Inteligência">
          <div className="signal-top"><span>Central de Inteligência</span><span className="live"><i></i> Análise em contexto</span></div>
          <div className="signal-grid">
            <div className="opportunity"><span className="micro">OPORTUNIDADE / 02384</span><strong>Aderência estratégica</strong><div className="score"><span>84</span><small>/ 100</small></div><div className="meter"><i></i></div><p>Compatibilidade elevada com o perfil operacional da empresa.</p></div>
            <div className="signals"><span className="micro">SINAIS PARA DECISÃO</span><div><i className="positive">+</i><span><b>Capacidade técnica</b><small>Histórico compatível</small></span></div><div><i className="attention">!</i><span><b>Prazo de entrega</b><small>Requer validação</small></span></div><div><i className="positive">+</i><span><b>Margem estimada</b><small>Dentro da estratégia</small></span></div></div>
          </div>
        </div>
      </section>

      <section className="question shell" id="visao">
        <span className="section-index">01 — UMA PERGUNTA NECESSÁRIA</span>
        <h2>Sua empresa realmente precisa analisar <em>todos</em> os editais?</h2>
        <div className="question-copy"><p>Volume não é oportunidade. Cada edital analisado mobiliza uma estrutura invisível antes mesmo de qualquer decisão.</p><p>Tempo, equipe, fornecedores, capital e energia operacional são recursos finitos. A inteligência começa ao escolher onde eles não devem ser usados.</p></div>
        <div className="resource-line" aria-label="Recursos consumidos por uma oportunidade"><span>Tempo</span><span>Equipe</span><span>Fornecedores</span><span>Capital</span><span>Energia operacional</span></div>
      </section>

      <section className="cost">
        <div className="shell cost-grid"><div><span className="section-index light">02 — O CUSTO INVISÍVEL</span><h2>Perder um pregão custa.<br /><em>Escolher o pregão errado custa mais.</em></h2></div><div className="cost-statement"><p>O verdadeiro prejuízo começa muito antes do lance.</p><div className="cost-flow"><span>Horas de análise</span><i>+</i><span>Mobilização da equipe</span><i>+</i><span>Capital comprometido</span><i>=</i><strong>Decisão cara</strong></div><p className="muted">O SintExec ajuda a tornar visível o que normalmente só aparece depois.</p></div></div>
      </section>

      <section className="manifesto shell" id="manifesto">
        <span className="section-index">03 — MANIFESTO</span>
        <blockquote>“Empresas não precisam de mais editais.<br />Precisam de <em>melhores decisões.</em>”</blockquote>
        <div className="manifesto-foot"><p>Informação é abundante. Clareza, não. Acreditamos que cada oportunidade pública deve ser compreendida antes de ser perseguida — com contexto, critério e intenção.</p><a className="button outline" href="#ciclo">Continue a leitura <Arrow /></a></div>
      </section>

      <section className="thinking" id="ciclo">
        <div className="shell"><div className="section-heading"><div><span className="section-index">04 — COMO O SINTEXEC PENSA</span><h2>Uma licitação não é um evento.<br /><em>É um ciclo de decisões.</em></h2></div><p>Do primeiro dado ao contrato concluído, cada etapa influencia a próxima. A inteligência conecta o ciclo inteiro.</p></div>
          <div className="cycle">{cycle.map(([n,title,desc],i)=><article className={i===3?"active":""} key={title}><span>{n}</span><div><h3>{title}</h3><p>{desc}</p></div>{i<cycle.length-1&&<b aria-hidden="true">→</b>}</article>)}</div>
          <p className="cycle-note"><span></span> A disputa eletrônica acontece nos portais oficiais. O SintExec prepara a inteligência antes e acompanha o contexto depois.</p>
        </div>
      </section>

      <section className="intelligence shell" id="inteligencia">
        <div className="section-heading"><div><span className="section-index">05 — CENTRAL DE INTELIGÊNCIA</span><h2>Do dado disperso<br />à <em>decisão possível.</em></h2></div><p>Um ambiente criado para organizar sinais, revelar contexto e apoiar a decisão da sua equipe.</p></div>
        <div className="product-stage"><div className="product-placeholder"><span>ESPAÇO RESERVADO</span><strong>Uma visão real da Central<br />de Inteligência viverá aqui.</strong><p>Nenhum dashboard fictício. Nenhuma promessa vazia.<br />Apenas o produto, quando estiver pronto para ser visto.</p></div><div className="annotation one"><b>01</b><span>Oportunidades priorizadas<br /><small>pelo que realmente importa</small></span></div><div className="annotation two"><b>02</b><span>Contexto em um só lugar<br /><small>para decidir com confiança</small></span></div></div>
      </section>

      <section className="principles shell" id="principios">
        <div className="section-heading"><div><span className="section-index">06 — NOSSOS PRINCÍPIOS</span><h2>Tecnologia com<br /><em>intenção.</em></h2></div><p>Princípios que guiam o produto, as decisões e a forma como enxergamos o mercado público.</p></div>
        <div className="principles-grid">{principles.map(([n,title,text])=><article key={title}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="audience"><div className="shell"><span className="section-index light">07 — PARA QUEM DECIDE</span><div className="audience-grid"><h2>Feito para empresas que levam o mercado público <em>a sério.</em></h2><div className="segments">{segments.map(s=><span key={s}>{s}</span>)}</div></div></div></section>

      <section className="not-section shell"><span className="section-index">08 — CLAREZA TAMBÉM É DIZER O QUE NÃO SOMOS</span><h2>O SintExec não tenta<br />ser tudo.</h2><div className="not-grid"><article><span>Não é</span><h3>um ERP.</h3><p>Não substituímos a gestão da sua operação.</p></article><article><span>Não substitui</span><h3>portais oficiais.</h3><p>A disputa continua onde deve acontecer.</p></article><article><span>Não realiza</span><h3>lances.</h3><p>Preparamos inteligência, não automatizamos a disputa.</p></article><article><span>Não decide</span><h3>pela empresa.</h3><p>A decisão final continua humana.</p></article></div></section>

      <section className="final-cta" id="conheca"><div className="shell"><span className="eyebrow light"><span></span> O próximo ciclo começa com uma escolha</span><h2>Decisões melhores<br />constroem empresas <em>melhores.</em></h2><a className="button white" href="mailto:contato@sintexec.com.br">Conheça a plataforma <Arrow /></a></div></section>

      <footer className="footer shell"><a className="brand" href="#inicio"><span className="brand-mark">S</span><span>SintExec</span></a><p>Inteligência em Licitações</p><div><a href="#inicio">Voltar ao início ↑</a><span>© 2026 SintExec</span></div></footer>
    </main>
  );
}
