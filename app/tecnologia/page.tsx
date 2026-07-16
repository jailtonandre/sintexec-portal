const Arrow = () => <span aria-hidden="true">↗</span>;

const explainableFlow = ["Informações", "Critérios", "Indicadores", "Recomendação", "Avaliação humana"];

export default function Tecnologia() {
  return <main className="tech-page" id="top">
    <header className="tech-nav">
      <nav className="container" aria-label="Navegação principal">
        <a className="tech-logo" href="/" aria-label="SintExec — página inicial"><img src="/logo-sintexec.png" alt="SintExec" /></a>
        <div className="tech-nav-links"><a href="/plataforma">Plataforma</a><a className="active" href="/tecnologia">Tecnologia</a><a href="/contato">Contato</a><a href="/#principios">Princípios</a></div>
        <a className="tech-nav-cta" href="https://wa.me/5584996631083">Solicitar demonstração <Arrow /></a>
      </nav>
    </header>

    <section className="tech-hero">
      <div className="tech-grid" aria-hidden="true" />
      <div className="container tech-hero-layout">
        <div className="tech-hero-copy">
          <span className="tech-kicker">TECNOLOGIA SINTEXEC</span>
          <h1>Tecnologia construída para decisões que precisam de confiança.</h1>
          <p>No SintExec, tecnologia não existe para substituir profissionais ou produzir respostas automáticas. Ela organiza informações, preserva contexto e torna análises e recomendações mais claras, rastreáveis e seguras.</p>
          <div className="tech-actions"><a className="tech-button primary" href="/plataforma">Conheça a plataforma <Arrow /></a><a className="tech-button secondary" href="https://wa.me/5584996631083">Solicite uma demonstração</a></div>
        </div>
        <div className="trust-composition" aria-label="Fluxo conceitual da tecnologia SintExec">
          <header><span>BASE DE CONFIANÇA</span><small>Contexto preservado</small></header>
          <div className="trust-core">
            <div className="trust-rail" aria-hidden="true"><i /><i /><i /><i /><i /></div>
            <ol>
              <li><span>01</span><div><b>Dados</b><small>Fontes e evidências organizadas</small></div><em>Íntegro</em></li>
              <li><span>02</span><div><b>Contexto</b><small>Relações e histórico preservados</small></div><em>Rastreável</em></li>
              <li><span>03</span><div><b>Critérios</b><small>Regras aplicadas com consistência</small></div><em>Explicável</em></li>
              <li><span>04</span><div><b>Recomendação</b><small>Racional e limites visíveis</small></div><em>Auditável</em></li>
              <li className="human"><span>05</span><div><b>Avaliação humana</b><small>A decisão permanece com a empresa</small></div><em>Essencial</em></li>
            </ol>
          </div>
          <footer><i /> Tecnologia a serviço da decisão</footer>
        </div>
      </div>
    </section>

    <section className="tech-explain">
      <div className="container">
        <div className="tech-heading"><span className="tech-kicker dark">01 / INTELIGÊNCIA EXPLICÁVEL</span><h2>Uma recomendação precisa mostrar como foi construída.</h2><p>O SintExec não deve apresentar apenas um número ou uma resposta final. A tecnologia preserva os sinais analisados, critérios utilizados, indicadores, riscos, aderência e o racional que sustenta cada recomendação.</p><strong>O usuário não recebe apenas uma recomendação. Recebe contexto para avaliá-la.</strong></div>
        <ol className="explain-flow" aria-label="Etapas para construir uma recomendação explicável">{explainableFlow.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><b>{item}</b>{index < explainableFlow.length - 1 && <i aria-hidden="true">→</i>}</li>)}</ol>
      </div>
    </section>

    <section className="tech-security">
      <div className="tech-grid" aria-hidden="true" />
      <div className="container security-layout">
        <div className="tech-heading light"><span className="tech-kicker">02 / SEGURANÇA E ISOLAMENTO</span><h2>Cada empresa trabalha dentro do seu próprio ambiente.</h2><p>Autenticação, controle de acesso, permissões e registros por usuário orientam quem pode acessar informações e quais ações podem ser realizadas. O isolamento mantém dados e contextos operacionais separados entre empresas.</p><strong>Segurança não é uma camada adicionada depois. É parte da forma como a plataforma é construída.</strong></div>
        <div className="isolation-visual" aria-label="Representação de ambientes operacionais isolados">
          <div className="isolation-company featured"><header><span>AMBIENTE A</span><b>Empresa participante</b></header><div><span>Gestão</span><span>Comercial</span><span>Operação</span></div><footer><i /> Acessos autorizados</footer></div>
          <div className="isolation-boundary"><span>ISOLAMENTO DE DADOS</span></div>
          <div className="isolation-company"><header><span>AMBIENTE B</span><b>Outra organização</b></header><div><span>Usuários</span><span>Critérios</span><span>Histórico</span></div><footer><i /> Contexto independente</footer></div>
        </div>
      </div>
    </section>

    <section className="tech-trace">
      <div className="container trace-layout">
        <div className="tech-heading"><span className="tech-kicker dark">03 / RASTREABILIDADE E GOVERNANÇA</span><h2>Decisões importantes precisam deixar memória.</h2><p>Mais do que guardar dados, o SintExec busca preservar a trajetória: alterações, autoria, justificativas, critérios, decisões e evidências que acompanharam a evolução da oportunidade.</p><strong>O histórico deixa de ser uma sequência dispersa e passa a formar uma memória operacional.</strong></div>
        <ol className="audit-line">
          <li><time>09:12</time><div><b>Critério atualizado</b><p>Prazo logístico revisado por Marina Alves.</p></div><span>CRITÉRIO</span></li>
          <li><time>10:48</time><div><b>Nova evidência vinculada</b><p>Referência de fornecimento adicionada à análise.</p></div><span>EVIDÊNCIA</span></li>
          <li><time>14:06</time><div><b>Recomendação revisada</b><p>Racional preservado para avaliação da equipe.</p></div><span>DECISÃO</span></li>
        </ol>
      </div>
    </section>

    <section className="tech-evolution">
      <div className="container">
        <div className="tech-heading centered"><span className="tech-kicker dark">04 / EVOLUÇÃO RESPONSÁVEL</span><h2>A inteligência evolui sem esconder seus limites.</h2><p>A tecnologia pode fazer o trabalho pesado. A decisão continua sendo humana.</p></div>
        <div className="evolution-compare">
          <article><header><span>DISPONÍVEL NA VISÃO DO PRODUTO</span><b>Decision Engine</b></header><p>O núcleo analítico que aplica critérios, organiza sinais, consolida indicadores, apresenta recomendações e preserva o racional.</p><ul><li>Critérios definidos</li><li>Indicadores consolidados</li><li>Recomendação explicável</li></ul><footer>Não é inteligência artificial e não decide pela empresa.</footer></article>
          <article className="future"><header><span>CONCEITO EM EVOLUÇÃO</span><b>Sint AI</b></header><p>Uma futura forma de interação conversacional para interpretar e consultar documentos e informações da plataforma.</p><ul><li>Consulta mais natural</li><li>Apoio à interpretação</li><li>Limites tornados explícitos</li></ul><footer>O Sint AI ainda não representa uma funcionalidade disponível no produto.</footer></article>
        </div>
      </div>
    </section>

    <section className="tech-operation">
      <div className="container operation-layout">
        <div className="tech-heading"><span className="tech-kicker dark">05 / TECNOLOGIA E OPERAÇÃO</span><h2>Sofisticação técnica só importa quando melhora o trabalho real.</h2><p>Menos dispersão, análises mais consistentes, riscos mais visíveis e decisões justificáveis. A tecnologia SintExec existe para dar continuidade e clareza ao cotidiano das equipes.</p></div>
        <ol className="operation-flow"><li><span>01</span><b>Complexidade pública</b></li><li><span>02</span><b>Tecnologia SintExec</b></li><li><span>03</span><b>Contexto operacional</b></li><li><span>04</span><b>Decisão mais segura</b></li></ol>
      </div>
    </section>

    <section className="tech-final">
      <div className="tech-grid" aria-hidden="true" />
      <div className="container"><span className="tech-kicker">TECNOLOGIA EM CONTEXTO</span><h2>Conheça a tecnologia apoiando decisões reais.</h2><p>Veja como o SintExec organiza informações, preserva contexto e oferece uma base mais confiável para a análise das oportunidades públicas.</p><div><a className="tech-button primary" href="https://wa.me/5584996631083">Solicite uma demonstração <Arrow /></a><a className="tech-button secondary" href="/plataforma">Conheça a plataforma</a></div></div>
    </section>

    <footer className="tech-footer"><div className="container"><a href="/" aria-label="SintExec — página inicial"><img src="/logo-sintexec.png" alt="SintExec" /></a><span>Inteligência em Licitações</span><div><a href="/">Home</a><a href="/plataforma">Plataforma</a><a href="/tecnologia">Tecnologia</a><a href="/contato">Contato</a><a href="#top">Topo ↑</a></div></div></footer>
  </main>;
}
