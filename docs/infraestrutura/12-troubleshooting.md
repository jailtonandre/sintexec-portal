# 12 — Troubleshooting

## Objetivo

Centralizar diagnósticos seguros para incidentes recorrentes sem substituir a análise da causa raiz.

## Portal indisponível

1. Confirmar o erro por uma rede externa.
2. Verificar DNS e certificado.
3. Verificar borda, proxy e serviço da aplicação, nessa ordem.
4. Consultar logs no intervalo exato do incidente.
5. Evitar reinícios antes de preservar evidências.

## Deploy sem atualização visível

1. Confirmar versão executada no servidor.
2. Verificar artefato e container ativos.
3. Verificar cache no navegador, proxy e borda.
4. Invalidar apenas o cache necessário.

## Erros de certificado

Verificar validade, cadeia, nomes cobertos, modo TLS da borda e certificado de origem.

## E-mail não entregue

Verificar MX, SPF, DKIM, DMARC, reputação, fila do provedor e mensagem de rejeição.

## Disco ou recursos elevados

Identificar consumidor antes de limpar arquivos. Preservar logs necessários e nunca remover volumes sem confirmar seu conteúdo e backup.

## Registro de incidente

| Data | Sintoma | Causa raiz | Correção | Prevenção | Responsável |
|---|---|---|---|---|---|
| A definir | A definir | A definir | A definir | A definir | A definir |

## Última revisão

- Data: a definir
- Responsável: a definir
