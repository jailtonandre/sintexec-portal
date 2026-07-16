# 07 — Cloudflare

## Objetivo

Documentar DNS, proxy, TLS, cache e controles de segurança aplicados na borda.

## Conta e zona

- Zona: a definir.
- Plano: a definir.
- Responsáveis e controle de acesso: a definir.

## Configuração

- Modo TLS e certificado de origem.
- Registros com proxy habilitado.
- Regras de cache e exclusões.
- Redirecionamentos.
- WAF, limitação de requisições e proteção automatizada.

## Validação

- Certificado público e cadeia válidos.
- Origem não exposta indevidamente.
- Conteúdo atualizado após deploy.
- Regras não bloqueiam usuários legítimos.
- Cabeçalhos e cache correspondem ao planejado.

## Procedimento de alteração

Exportar ou registrar o estado anterior, alterar uma regra por vez e acompanhar eventos e métricas.

## Rollback

Desativar a regra alterada ou restaurar sua expressão e ação anteriores.

## Última revisão

- Data: a definir
- Responsável: a definir
