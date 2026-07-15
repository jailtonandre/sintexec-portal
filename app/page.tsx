const stages = ["Edital", "Inteligência", "Análise", "Decisão", "Preparação", "Pregão", "Execução", "Contrato"];
const signals = [
  { label: "Aderência ao objeto", value: "92", state: "positive" },
  { label: "Capacidade operacional", value: "84", state: "positive" },
  { label: "Risco de prazo", value: "Médio", state: "warning" },
  { label: "Pressão competitiva", value: "Alta", state: "purple" },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }
function Spark({purple=false}:{purple?:boolean}) { return <span className={purple?"spark purple":"spark"} aria-hidden="true">✦</span>; }

export default function Home() {
  return <main>
    <header className="nav-wrap">
      <nav className="nav container" aria-label="Navegação principal">
        <a className="logo" href="#inicio"><span className="logo-symbol"><i></i><i></i></span>SintExec</a>
        <div className="nav-links"><a href="#plataforma">Plataforma</a><a href="#ciclo">Ciclo da oportunidade</a><a href="#inteligencia">Inteligência</a><a href="#principios">Princípios</a></div>
        <a className="nav-cta" href="#contato">Conheça a plataforma <Arrow /></a>
      </nav>
    </header>

    <section className="hero container" id="inicio">
      <div className="hero-copy">
        <div className="category"><Spark/> Inteligência em Licitações</div>
        <h1>Veja antes.<br/><span>Decida melhor.</span></h1>
        <p>Uma Central de Inteligência para transformar dados públicos em contexto, sinais e decisões durante todo o ciclo da oportunidade.</p>
        <div className="hero-actions"><a className="button solid" href="#plataforma">Conheça a plataforma <Arrow/></a><a className="button ghost" href="#ciclo"><span className="play">▶</span> Veja como funciona</a></div>
        <div className="hero-proofs"><span><i>✓</i> Dados com contexto</span><span><i>✓</i> Decisão assistida</span><span><i>✓</i> Ciclo completo</span></div>
      </div>
      <div className="hero-product" aria-label="Composição conceitual da Central de Inteligência">
        <div className="product-glow"></div>
        <div className="app-window">
          <div className="app-bar"><div className="app-brand"><span className="logo-symbol small"><i></i><i></i></span> Central de Inteligência</div><div className="app-actions"><span>⌕</span><span>?</span><b>MR</b></div></div>
          <div className="app-body">
            <aside><span className="aside-label">VISÃO GERAL</span><i className="selected">⌁</i><i>◇</i><i>◫</i><i>◎</i><i>⌘</i><span className="aside-bottom">⚙</span></aside>
            <div className="workspace">
              <div className="workspace-head"><div><small>OPORTUNIDADE / 2026-0187</small><h3>Aquisição de medicamentos hospitalares</h3></div><span className="status"><i></i> Em análise</span></div>
              <div className="decision-row">
                <div className="decision-score"><div className="ring"><span>87</span><small>/100</small></div><div><small>ÍNDICE DE ADERÊNCIA</small><strong>Oportunidade favorável</strong><p>6 de 8 sinais compatíveis com o perfil da empresa.</p></div></div>
                <div className="decision-action"><Spark/><small>PRÓXIMA MELHOR AÇÃO</small><strong>Avançar para análise técnica</strong><button>Revisar sinais <Arrow/></button></div>
              </div>
              <div className="signal-table"><div className="table-head"><span>Sinais para decisão</span><span>Resultado</span></div>{signals.map(s=><div className="signal-row" key={s.label}><span><i className={s.state}></i>{s.label}</span><b>{s.value}</b></div>)}</div>
            </div>
          </div>
        </div>
        <div className="float-card activity"><span className="pulse"></span><div><small>NOVO SINAL DETECTADO</small><strong>Prazo de entrega incompatível</strong></div></div>
        <div className="float-card confidence"><Spark purple/><div><small>CONFIANÇA DA ANÁLISE</small><strong>94%</strong></div><span className="mini-bars"><i></i><i></i><i></i><i></i></span></div>
        <span className="concept-label">Visualização conceitual do produto</span>
      </div>
    </section>

    <section className="trust-strip"><div className="container"><span>UMA NOVA CAMADA ENTRE O EDITAL E A DECISÃO</span><div><b>Contexto</b><i></i><b>Critério</b><i></i><b>Clareza</b><i></i><b>Inteligência</b></div></div></section>

    <section className="problem container" id="plataforma">
      <div className="section-intro"><span className="kicker">01 / DECISÃO ANTES DA EXECUÇÃO</span><h2>Nem toda oportunidade<br/>merece virar <span>operação.</span></h2><p>O maior custo não está em perder um pregão. Está em mobilizar recursos para uma oportunidade que nunca deveria ter avançado.</p></div>
      <div className="decision-engine">
        <div className="engine-toolbar"><span><Spark/> SintExec Decision Engine</span><span>Oportunidade 2026-0187 · análise atualizada agora</span><button>•••</button></div>
        <div className="engine-grid">
          <div className="source-card"><small>DADOS DE ENTRADA</small><h3>Um edital.<br/>Milhares de sinais.</h3><div className="data-stack"><span><i>01</i>Objeto e especificações<b>1.248</b></span><span><i>02</i>Requisitos técnicos<b>37</b></span><span><i>03</i>Prazos e condições<b>18</b></span><span><i>04</i>Histórico do órgão<b>126</b></span></div></div>
          <div className="processing-card"><div className="processing-orbit"><span className="core"><Spark/><b>SintExec</b><small>Inteligência</small></span><i className="orbit o1"></i><i className="orbit o2"></i><i className="dot d1"></i><i className="dot d2"></i><i className="dot d3"></i></div><div className="process-labels"><span>Normalização</span><span>Contextualização</span><span>Correlação</span><span>Priorização</span></div></div>
          <div className="output-card"><small>DECISÃO ASSISTIDA</small><div className="outcome"><span>87</span><div><b>Avançar</b><small>Alta aderência</small></div></div><div className="outcome-lines"><span><i style={{width:"92%"}}></i></span><span><i style={{width:"84%"}}></i></span><span><i className="violet" style={{width:"68%"}}></i></span></div><p>Oportunidade compatível com a capacidade técnica e estratégia comercial.</p><button>Ver racional da decisão <Arrow/></button></div>
        </div>
      </div>
    </section>

    <section className="lifecycle" id="ciclo"><div className="container">
      <div className="section-intro light"><span className="kicker">02 / O CICLO COMPLETO</span><h2>Uma oportunidade.<br/><span>Oito momentos decisivos.</span></h2><p>O SintExec conecta o que normalmente está fragmentado e acompanha a inteligência da descoberta ao contrato concluído.</p></div>
      <div className="cycle-experience">
        <div className="cycle-rail">{stages.map((s,i)=><div className={i===3?"cycle-step active":"cycle-step"} key={s}><span>{String(i+1).padStart(2,"0")}</span><b>{s}</b><i></i></div>)}</div>
        <div className="cycle-stage">
          <div className="stage-context"><span className="stage-number">04</span><small>MOMENTO CRÍTICO</small><h3>Decisão</h3><p>Todos os sinais convergem para uma escolha clara: avançar, revisar ou descartar.</p><div className="stage-metrics"><span><b>12</b><small>critérios analisados</small></span><span><b>3</b><small>alertas relevantes</small></span><span><b>87%</b><small>aderência estimada</small></span></div></div>
          <div className="stage-visual"><div className="decision-node"><span className="node-source">EDITAL<small>1.248 sinais</small></span><i className="node-line l1"></i><i className="node-line l2"></i><i className="node-line l3"></i><span className="node-center"><Spark/><b>DECISÃO</b><small>motor de contexto</small></span><span className="node-result go"><i></i>Avançar<small>87% aderência</small></span><span className="node-result review"><i></i>Revisar<small>3 alertas</small></span><span className="node-result stop"><i></i>Descartar<small>baixo fit</small></span></div></div>
        </div>
        <div className="cycle-footer"><span><i></i> O SintExec atua diretamente</span><span><i></i> Integração com portais oficiais</span><p>A inteligência retorna ao início e melhora o próximo ciclo <b>↻</b></p></div>
      </div>
    </div></section>

    <section className="intelligence container" id="inteligencia">
      <div className="section-intro"><span className="kicker">03 / CENTRAL DE INTELIGÊNCIA</span><h2>Dados explicam.<br/><span>Contexto decide.</span></h2><p>Cada tela foi pensada para conduzir a equipe do sinal ao entendimento — e do entendimento à ação.</p></div>
      <div className="story-grid">
        <article className="story-card context"><header><span>01</span><div><small>CONTEXTO</small><h3>Entenda antes de analisar.</h3></div></header><div className="ui-panel context-ui"><div className="doc-line"><i>OBJ</i><span><small>Objeto da licitação</small><b>Medicamentos hospitalares — lote único</b></span></div><div className="entity-map"><span className="entity main">Oportunidade</span><span className="entity e1">Órgão<small>Histórico</small></span><span className="entity e2">Mercado<small>Concorrência</small></span><span className="entity e3">Empresa<small>Capacidade</small></span><i></i><i></i><i></i></div></div><p>O edital deixa de ser um documento isolado e passa a existir dentro do cenário real da sua empresa.</p></article>
        <article className="story-card indicator"><header><span>02</span><div><small>INDICADOR</small><h3>Veja o que merece atenção.</h3></div></header><div className="ui-panel indicator-ui"><div className="risk-head"><span>Risco de execução</span><b>MODERADO</b></div><div className="risk-chart"><span className="chart-fill"></span><i className="mark m1"></i><i className="mark m2"></i><i className="mark m3"></i><label className="chart-tip">Prazo logístico<small>Principal ponto de atenção</small></label></div><div className="risk-labels"><span>Baixo</span><span>Moderado</span><span>Alto</span></div></div><p>Indicadores transformam centenas de variáveis em sinais objetivos para a equipe.</p></article>
        <article className="story-card result"><header><span>03</span><div><small>RESULTADO</small><h3>Chegue a uma decisão explicável.</h3></div></header><div className="ui-panel result-ui"><span className="result-badge"><Spark/> RECOMENDAÇÃO</span><h4>Avançar com ressalva</h4><p>Validar prazo de entrega com o fornecedor antes de iniciar a preparação.</p><div className="result-actions"><button>Ver justificativa</button><button>Enviar para análise <Arrow/></button></div></div><p>A tecnologia não toma a decisão. Ela torna o caminho até ela claro, rastreável e compartilhável.</p></article>
      </div>
    </section>

    <section className="system"><div className="container">
      <div className="system-head"><div><span className="kicker">04 / UMA PLATAFORMA, MUITAS PERSPECTIVAS</span><h2>Veja a oportunidade<br/>por inteiro.</h2></div><p>Uma camada contínua de inteligência conecta operação, estratégia e aprendizado.</p></div>
      <div className="bento"><article className="bento-large"><div><span className="feature-icon">⌁</span><small>RADAR DE OPORTUNIDADES</small><h3>Encontre relevância<br/>no meio do ruído.</h3><p>Priorize oportunidades por aderência, risco e valor estratégico.</p></div><div className="radar-ui"><div className="radar-header"><span>Oportunidades prioritárias</span><b>12 encontradas</b></div>{[92,87,79,68].map((v,i)=><div className="radar-row" key={v}><span><i>{i+1}</i><b>{["Medicamentos hospitalares","Serviços de engenharia","Equipamentos de rede","Materiais de consumo"][i]}</b></span><div><em style={{width:`${v}%`}}></em></div><strong>{v}</strong></div>)}</div></article>
        <article className="bento-small purple"><span className="feature-icon">◇</span><small>ALERTAS CONTEXTUAIS</small><h3>O risco certo,<br/>no momento certo.</h3><div className="alert-stack"><span><i>!</i>Prazo incompatível<small>Impacto alto</small></span><span><i>↗</i>Margem abaixo da meta<small>Revisar preço</small></span></div></article>
        <article className="bento-small white"><span className="feature-icon">◎</span><small>MEMÓRIA OPERACIONAL</small><h3>Cada contrato melhora<br/>a próxima decisão.</h3><div className="learning"><span>Aprendizado acumulado</span><strong>+38%</strong><div><i></i></div><small>Últimos 12 meses</small></div></article>
      </div>
    </div></section>

    <section className="principles container" id="principios"><div className="principle-copy"><span className="kicker">05 / TECNOLOGIA COM CRITÉRIO</span><h2>Inteligência que amplia a capacidade humana.</h2><p>Sem promessas vagas. Sem decisões opacas. O SintExec organiza a complexidade para que pessoas experientes decidam ainda melhor.</p><a href="#contato">Conheça nossos princípios <Arrow/></a></div><div className="principle-visual"><div className="human-core"><span>DECISÃO<br/><b>HUMANA</b></span></div><div className="principle-tag t1"><Spark/> Dados com contexto</div><div className="principle-tag t2"><Spark purple/> Critérios transparentes</div><div className="principle-tag t3"><span>⌁</span> Risco antecipado</div><div className="principle-tag t4"><span>◎</span> Inteligência contínua</div></div></section>

    <section className="cta" id="contato"><div className="cta-grid"></div><div className="container"><div className="category light"><Spark/> O próximo ciclo começa agora</div><h2>Menos oportunidades<br/>perseguidas.<br/><span>Mais decisões certas.</span></h2><p>Conheça a Central de Inteligência que acompanha sua empresa durante todo o ciclo da oportunidade pública.</p><div><a className="button white" href="mailto:contato@sintexec.com.br">Conheça a plataforma <Arrow/></a><a className="button dark-ghost" href="#ciclo">Explore o ciclo <span>↓</span></a></div></div></section>

    <footer><div className="container footer-grid"><a className="logo" href="#inicio"><span className="logo-symbol"><i></i><i></i></span>SintExec</a><span>Inteligência em Licitações</span><div><a href="#plataforma">Plataforma</a><a href="#ciclo">Ciclo</a><a href="#inteligencia">Inteligência</a><a href="#inicio">Topo ↑</a></div></div></footer>
  </main>;
}
