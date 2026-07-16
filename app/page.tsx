"use client";
import { useState } from "react";

const stages = [
  {name:"Edital", label:"O ponto de partida", text:"O documento é capturado, estruturado e conectado a fontes públicas e ao histórico da empresa.", metrics:[["1.248","sinais extraídos"],["37","requisitos"],["18","prazos"]], result:"Documento contextualizado", score:"100% processado"},
  {name:"Inteligência", label:"Contexto em movimento", text:"Dados isolados ganham relações: órgão, mercado, histórico, capacidade operacional e estratégia.", metrics:[["8","fontes conectadas"],["126","eventos históricos"],["24","correlações"]], result:"Cenário compreendido", score:"94% confiança"},
  {name:"Análise", label:"O que importa emerge", text:"Critérios técnicos, comerciais e operacionais revelam aderência, restrições e pontos de atenção.", metrics:[["12","critérios avaliados"],["3","alertas relevantes"],["6","sinais positivos"]], result:"Riscos priorizados", score:"87% aderência"},
  {name:"Decisão", label:"Momento crítico", text:"Todos os sinais convergem para uma escolha clara: avançar, revisar ou descartar.", metrics:[["12","critérios analisados"],["3","alertas relevantes"],["87%","aderência estimada"]], result:"Avançar", score:"87% aderência"},
  {name:"Preparação", label:"Estratégia em ação", text:"A decisão se transforma em plano: documentos, responsáveis, prazos e validações ficam visíveis.", metrics:[["14","tarefas mapeadas"],["5","responsáveis"],["2","pendências"]], result:"Plano coordenado", score:"86% concluído"},
  {name:"Pregão", label:"Consciência na disputa", text:"O contexto preparado acompanha a equipe enquanto a disputa acontece nos portais oficiais.", metrics:[["4","concorrentes"],["3","cenários de margem"],["1","limite aprovado"]], result:"Estratégia disponível", score:"Ao vivo"},
  {name:"Execução", label:"Do compromisso à entrega", text:"Obrigações, prazos e ocorrências mantêm o contrato conectado à inteligência que originou a decisão.", metrics:[["8","marcos previstos"],["2","riscos monitorados"],["96%","nível de serviço"]], result:"Execução acompanhada", score:"Em curso"},
  {name:"Contrato", label:"O ciclo aprende", text:"Resultados reais retornam ao sistema e aumentam a qualidade das próximas análises e decisões.", metrics:[["38%","aprendizado acumulado"],["7","lições registradas"],["1","ciclo concluído"]], result:"Inteligência ampliada", score:"Ciclo fechado"},
];
const signals = [
  { label: "Aderência ao objeto", value: "92", state: "positive" },
  { label: "Capacidade operacional", value: "84", state: "positive" },
  { label: "Risco de prazo", value: "Médio", state: "warning" },
  { label: "Pressão competitiva", value: "Alta", state: "purple" },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }
function Spark({purple=false}:{purple?:boolean}) { return <span className={purple?"spark purple":"spark"} aria-hidden="true">✦</span>; }

export default function Home() {
  const [activeStage,setActiveStage]=useState(3);
  const stage=stages[activeStage];
  return <main>
    <section className="preview-hero" id="inicio">
      <div className="preview-grid"></div>
      <div className="preview-orbit orbit-one"></div><div className="preview-orbit orbit-two"></div>
      <div className="container preview-layout">
        <div className="preview-copy">
          <div className="preview-eyebrow"><span></span> Central de Inteligência SintExec</div>
          <h1 className="preview-title">Inteligência<br/>em Licitações</h1>
          <div className="preview-rule"></div>
          <div className="preview-slogan">Veja antes. <span>Decida melhor.</span></div>
          <p>Uma Central de Inteligência para transformar dados públicos em contexto, sinais e decisões durante todo o ciclo da oportunidade.</p>
          <div className="preview-actions"><a className="preview-primary" href="/plataforma">Conheça a plataforma <Arrow/></a><a className="preview-secondary" href="#ciclo"><span>▶</span> Veja como funciona</a></div>
          <div className="preview-proofs"><span><i></i> Dados com contexto</span><span><i></i> Decisão assistida</span><span><i></i> Ciclo completo</span></div>
        </div>
        <div className="preview-product" aria-label="Central de Inteligência SintExec">
          <div className="preview-side">
            <span className="side-module active">▤</span><span className="side-module">◔</span><span className="side-module">▽</span><span className="side-module">♜</span>
          </div>
          <div className="preview-dashboard">
            <div className="preview-topbar"><div><span className="logo-symbol small"><i></i><i></i></span><b>Central de Inteligência</b></div><span>Oportunidade 2026-0187 <i></i> Em análise</span></div>
            <div className="preview-chart panel"><div className="panel-title"><span>EVOLUÇÃO DA OPORTUNIDADE</span><b>Últimos 30 dias</b></div><div className="chart-bars">{[28,39,34,51,47,63,72,67,79,94].map((h,i)=><i key={i} style={{height:`${h}%`}}></i>)}</div><div className="chart-line"><i></i><i></i><i></i><i></i><i></i><i></i></div></div>
            <div className="preview-score panel"><span>ÍNDICE DE ADERÊNCIA</span><div className="score-orbit"><b>87</b><small>/100</small></div><strong>Oportunidade favorável</strong></div>
            <div className="preview-signals panel"><div className="panel-title"><span>SINAIS PARA DECISÃO</span><b>6 de 8 favoráveis</b></div>{signals.map((s,i)=><div className="preview-signal" key={s.label}><i className={s.state}></i><span>{s.label}</span><em><b style={{width:`${[92,84,61,76][i]}%`}}></b></em><strong>{s.value}</strong></div>)}</div>
            <div className="preview-map panel"><div className="panel-title"><span>INTELIGÊNCIA TERRITORIAL</span><b>Brasil</b></div><div className="map-field"><span className="map-node n1"></span><span className="map-node n2"></span><span className="map-node n3"></span><span className="map-node n4"></span><span className="map-node n5"></span><span className="map-core">BR<small>126 sinais</small></span></div></div>
            <div className="preview-flow"><span className="flow-item active">⌕<small>Descoberta</small></span><i></i><span className="flow-item">▤<small>Edital</small></span><i></i><span className="flow-item">✓<small>Decisão</small></span><i></i><span className="flow-item">▥<small>Execução</small></span><i></i><span className="flow-item">⚑<small>Contrato</small></span></div>
          </div>
        </div>
      </div>
    </section>

    <section className="problem container" id="plataforma">
      <div className="problem-opening"><div className="section-intro"><span className="kicker">01 / DECISÃO ANTES DA EXECUÇÃO</span><h2>Nem toda oportunidade<br/>merece virar <span>operação.</span></h2><div className="opportunity-equation"><strong>Mais oportunidades</strong><i>≠</i><span>melhores decisões</span></div><p>O maior custo não está em perder um pregão. Está em mobilizar recursos para uma oportunidade que nunca deveria ter avançado.</p></div><div className="mobilization-map" aria-label="Comparação entre mobilização indiscriminada e decisão orientada"><div className="mobilization-head"><span>CUSTO DE OPORTUNIDADE</span><b><i></i> Análise ativa</b></div><div className="resource-flow"><span className="resource-source">24<small>captadas</small></span><i data-flow="ENTRADA"></i><div className="resource-filter"><span className="filter-icon"><Spark/></span><b>Critério</b><small>contexto + aderência</small><em>6 sinais avaliados</em></div><i data-flow="SELEÇÃO"></i><span className="resource-result">06<small>priorizadas</small></span></div><div className="resource-summary"><span><small>18</small> oportunidades preservadas da mobilização</span><b>Decisão orientada</b></div><div className="resource-bars"><span><i></i><b>Esforço evitado</b><strong>−62%</strong></span><span><i></i><b>Foco operacional</b><strong>+41%</strong></span></div></div></div>
      <div className="decision-engine">
        <div className="engine-toolbar"><span><Spark/> SintExec Decision Engine</span><span>Oportunidade 2026-0187 · análise atualizada agora</span><button>•••</button></div>
        <div className="engine-narrative" aria-label="Fluxo do Decision Engine"><span>01 · Entrada</span><i>→</i><span>02 · Processamento</span><i>→</i><span>03 · Análise</span><i>→</i><span>04 · Recomendação</span></div>
        <div className="engine-grid">
          <div className="source-card"><small>01 · DADOS DE ENTRADA</small><h3>Um edital.<br/>Milhares de sinais.</h3><div className="data-stack"><span><i>01</i>Objeto e especificações<b>1.248</b></span><span><i>02</i>Requisitos técnicos<b>37</b></span><span><i>03</i>Prazos e condições<b>18</b></span><span><i>04</i>Histórico do órgão<b>126</b></span></div><div className="engine-feed">Indicadores alimentam a análise <span>→</span></div></div>
          <div className="processing-card"><small className="processing-label">02 · PROCESSAMENTO E ANÁLISE</small><div className="processing-orbit"><span className="core"><Spark/><b>SintExec</b><small>Decision Engine</small></span><i className="orbit o1"></i><i className="orbit o2"></i><i className="dot d1"></i><i className="dot d2"></i><i className="dot d3"></i></div><div className="process-labels"><span>Normalização</span><span>Contextualização</span><span>Correlação</span><span>Priorização</span></div><div className="analysis-index"><small>ÍNDICE CONSOLIDADO</small><strong>87</strong><span>/100</span></div></div>
          <div className="output-card"><small>04 · RECOMENDAÇÃO</small><div className="outcome"><span>87</span><div><b>Avançar</b><small>Alta aderência</small></div></div><div className="outcome-lines"><span><i style={{width:"92%"}}></i></span><span><i style={{width:"84%"}}></i></span><span><i className="violet" style={{width:"68%"}}></i></span></div><p>Oportunidade compatível com a capacidade técnica e estratégia comercial.</p><button>Ver racional da decisão <Arrow/></button><span className="human-note">Recomendação para avaliação humana</span></div>
        </div>
      </div>
    </section>

    <section className="lifecycle" id="ciclo"><div className="container">
      <div className="section-intro light"><span className="kicker">02 / O CICLO COMPLETO</span><h2>Uma oportunidade.<br/><span>Oito momentos decisivos.</span></h2><p>O SintExec conecta o que normalmente está fragmentado e acompanha a inteligência da descoberta ao contrato concluído.</p></div>
      <div className="cycle-experience">
        <div className="cycle-rail" role="tablist" aria-label="Etapas do ciclo">{stages.map((s,i)=><button role="tab" aria-selected={i===activeStage} className={i===activeStage?"cycle-step active":"cycle-step"} key={s.name} onClick={()=>setActiveStage(i)}><span>{String(i+1).padStart(2,"0")}</span><b>{s.name}</b><i></i></button>)}</div>
        <div className="cycle-stage">
          <div className="stage-context" key={`copy-${activeStage}`}><span className="stage-number">{String(activeStage+1).padStart(2,"0")}</span><small>{stage.label.toUpperCase()}</small><h3>{stage.name}</h3><p>{stage.text}</p><div className="stage-metrics">{stage.metrics.map(([v,l])=><span key={l}><b>{v}</b><small>{l}</small></span>)}</div></div>
          <div className="stage-visual" key={`visual-${activeStage}`}><div className="decision-node"><span className="node-source">ENTRADA<small>{stages[Math.max(0,activeStage-1)].name}</small></span><i className="node-line l1"></i><i className="node-line l2"></i><i className="node-line l3"></i><span className="node-center"><Spark/><b>{stage.name.toUpperCase()}</b><small>inteligência ativa</small></span><span className="node-result go"><i></i>{stage.result}<small>{stage.score}</small></span><span className="node-result review"><i></i>Revisar contexto<small>sinais explicáveis</small></span><span className="node-result stop"><i></i>Próxima etapa<small>{stages[(activeStage+1)%stages.length].name}</small></span></div></div>
        </div>
        <div className="cycle-footer"><span><i></i> Inteligência acompanha todo o ciclo</span><span><i></i> A disputa e os lances permanecem nos portais oficiais</span><p>A inteligência retorna ao início e melhora o próximo ciclo <b>↻</b></p></div>
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

    <section className="principles principles-final container" id="principios"><div className="principle-copy"><span className="kicker">05 / TECNOLOGIA COM CRITÉRIO</span><h2>Inteligência que amplia a capacidade humana.</h2><p>Princípios não são declarações abstratas. Cada um precisa produzir uma consequência observável na operação.</p></div><div className="principle-ledger">{[["01","Inteligência antes da execução","Recursos são mobilizados somente depois que a oportunidade demonstra aderência."],["02","Dados com contexto","Cada informação chega acompanhada de origem, relevância e impacto."],["03","Indicadores que orientam decisões","Sinais complexos se tornam prioridades compreensíveis para a equipe."],["04","Transparência","O racional permanece visível, rastreável e compartilhável."],["05","Apoio à decisão humana","A tecnologia amplia o julgamento; nunca decide pela empresa."],["06","Redução de riscos","Restrições aparecem antes de se transformarem em custo operacional."]].map(([n,t,d])=><article key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div><i></i></article>)}</div></section>

    <section className="audience"><div className="container audience-grid"><div className="audience-copy"><span className="kicker">06 / PARA OPERAÇÕES REAIS</span><h2>Feito para quem precisa escolher melhor, todos os dias.</h2><p>O SintExec atende empresas cuja complexidade não cabe em uma lista de editais.</p><div className="sector-line"><span>Medicamentos e hospitalar</span><span>Construção e engenharia</span><span>Alimentação</span><span>Tecnologia</span><span>Serviços</span></div></div><div className="profile-list">{["Empresas com grande volume de editais","Equipes especializadas em licitações","Gestores que precisam priorizar oportunidades","Operações com múltiplos fornecedores, unidades ou categorias","Empresas estruturando sua atuação no mercado público"].map((item,i)=><div key={item}><span>{String(i+1).padStart(2,"0")}</span><p>{item}</p><i>↗</i></div>)}</div></div></section>

    <section className="clarity container"><div className="clarity-statement"><span className="kicker">TRANSPARÊNCIA DE ESCOPO</span><h2>Inteligência aplicada.<br/>Sem substituir sua operação.</h2><p>Limites claros tornam a tecnologia mais confiável.</p></div><div className="clarity-list" aria-label="Limites conscientes do produto">{["Não é um ERP","Não substitui os portais oficiais","Não realiza lances","Não toma decisões pela empresa"].map((item,i)=><span key={item}><small>{String(i+1).padStart(2,"0")}</small><b>{item}</b><i>Decisão de produto</i></span>)}</div></section>

    <section className="manifesto" id="manifesto"><div className="manifesto-grid"></div><div className="container"><div><span className="kicker">07 / MANIFESTO SINTEXEC</span><h2>Uma visão sobre inteligência, critério e o futuro das oportunidades públicas.</h2></div><a href="#manifesto">Leia o Manifesto <Arrow/></a></div></section>

    <section className="cta" id="contato"><div className="cta-grid"></div><div className="container"><div className="category light"><Spark/> O próximo ciclo começa agora</div><h2>Decisões melhores<br/><span>constroem empresas melhores.</span></h2><p>Conheça a Central de Inteligência que transforma complexidade pública em contexto para decisões mais seguras.</p><div><a className="button white" href="/plataforma">Conheça a plataforma <Arrow/></a><a className="button dark-ghost" href="mailto:contato@sintexec.com.br">Fale com nosso time <Arrow/></a></div></div></section>

  </main>;
}
