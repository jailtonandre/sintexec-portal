# Infraestrutura do Portal SintExec

Este diretório reúne os procedimentos necessários para compreender, operar e reconstruir a infraestrutura do Portal SintExec.

## Ordem de leitura

1. [Visão geral](01-visao-geral.md)
2. [DNS](02-dns.md)
3. [E-mail](03-email.md)
4. [Oracle](04-oracle.md)
5. [Nginx](05-nginx.md)
6. [Docker](06-docker.md)
7. [Cloudflare](07-cloudflare.md)
8. [Backup](08-backup.md)
9. [Deploy](09-deploy.md)
10. [Monitoramento](10-monitoramento.md)
11. [Recuperação de desastre](11-recuperacao-de-desastre.md)
12. [Troubleshooting](12-troubleshooting.md)

## Convenções

- Registrar apenas configurações confirmadas no ambiente.
- Identificar claramente produção, homologação e desenvolvimento.
- Informar data, responsável e motivo de cada decisão relevante.
- Documentar nomes de variáveis, nunca valores secretos.
- Validar procedimentos de backup, restauração e rollback periodicamente.
- Atualizar o documento correspondente na mesma sprint da mudança operacional.

## Segurança

Não armazenar neste repositório senhas, tokens, chaves privadas, cookies, códigos de recuperação, arquivos `.env` ou dados pessoais. Referenciar o gerenciador de segredos utilizado sem copiar seu conteúdo.

## Status

Os documentos abaixo são estruturas iniciais. Devem ser preenchidos à medida que a infraestrutura real for configurada e validada.
