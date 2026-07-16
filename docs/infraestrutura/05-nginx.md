# 05 — Nginx

## Objetivo

Registrar o proxy reverso, TLS, redirecionamentos e limites aplicados ao portal.

## Topologia

- Origem atendida: a definir.
- Serviço interno de destino: a definir.
- Portas e protocolos: a definir.

## Configuração

Documentar localização dos arquivos, includes utilizados e proprietário dos processos. Não copiar segredos ou chaves privadas.

## Regras esperadas

- Redirecionamento HTTP para HTTPS.
- Host canônico.
- Cabeçalhos de encaminhamento.
- Limites de tamanho e tempo.
- Compressão e cache quando aplicáveis.
- Página de indisponibilidade controlada.

## Validação

1. Testar sintaxe antes de recarregar.
2. Recarregar sem interromper conexões existentes.
3. Validar HTTPS, redirecionamentos e cabeçalhos.
4. Verificar logs e serviço de origem.

## Rollback

Manter cópia versionada da última configuração válida e documentar a restauração seguida de teste de sintaxe.

## Última revisão

- Data: a definir
- Responsável: a definir
