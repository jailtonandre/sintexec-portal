# 02 — DNS

## Objetivo

Documentar zonas, registros e procedimentos seguros de alteração do domínio SintExec.

## Provedor e zonas

- Registrador: a definir.
- Provedor DNS autoritativo: a definir.
- Domínios e subdomínios: a definir.

## Registros

| Tipo | Nome | Destino | Proxy | TTL | Finalidade |
|---|---|---|---|---|---|
| A definir | A definir | A definir | A definir | A definir | A definir |

## Procedimento de alteração

1. Registrar o estado atual.
2. Confirmar o impacto sobre portal e e-mail.
3. Reduzir o TTL antecipadamente quando necessário.
4. Aplicar a alteração em janela apropriada.
5. Validar resolução autoritativa e pública.
6. Registrar data, responsável e resultado.

## Validação

- Resolução de domínio e subdomínios.
- Registros MX, SPF, DKIM e DMARC preservados.
- Certificado TLS válido.
- Redirecionamentos esperados.

## Rollback

Restaurar os valores registrados antes da mudança e acompanhar a propagação conforme o TTL.

## Última revisão

- Data: a definir
- Responsável: a definir
