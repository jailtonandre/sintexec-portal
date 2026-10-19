import assert from "node:assert/strict";
import test from "node:test";

const { default: worker } = await import("../dist/server/index.js");

for (const path of ["/", "/plataforma", "/tecnologia", "/contato"]) {
  test(`${path} apresenta o aviso de desenvolvimento sem ofertas comerciais`, async () => {
    const response = await worker.fetch(
      new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
      { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
      { waitUntil() {}, passThroughOnException() {} },
    );
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
    const html = await response.text();
    assert.match(html, /<title>SintExec — Projeto em desenvolvimento<\/title>/);
    assert.match(html, /<main\b[^>]*id="conteudo"/);
    assert.match(html, /Projeto em desenvolvimento/);
    assert.match(html, /A plataforma ainda não está disponível\./);
    assert.match(html, /sem data de lançamento definida/);
    assert.match(html, /não oferecemos acesso, demonstrações ou contratação/);
    assert.match(html, /<img\b[^>]*src="\/logo-sintexec\.png"[^>]*alt="SintExec"/);
    assert.match(html, /href="mailto:contato@sintexec\.com\.br"/);
    const links = [...html.matchAll(/<a\b[^>]*href="([^"]*)"/g)].map(match => match[1]);
    assert.deepEqual(links.sort(), ["#conteudo", "/", "mailto:contato@sintexec.com.br"].sort());
    assert.doesNotMatch(html, /app\.sintexec\.com\.br|wa\.me|Solicit(?:e|ar) (?:uma )?demonstração|índice consolidado|aderência estimada|confiança<|<form\b/i);
  });
}
