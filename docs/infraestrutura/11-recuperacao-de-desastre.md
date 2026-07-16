# 11 — Recuperação de desastre

## Objetivo

Definir como restaurar o portal após perda total ou parcial do ambiente.

## Metas

- RTO: a definir.
- RPO: a definir.
- Serviços prioritários: a definir.

## Cenários

- Instância indisponível ou perdida.
- Configuração de proxy corrompida.
- Erro de DNS ou Cloudflare.
- Certificado inválido.
- Artefato de aplicação defeituoso.
- Credencial comprometida.
- Backup ausente ou corrompido.

## Ordem de recuperação

1. Conter o incidente e preservar evidências.
2. Confirmar responsáveis e canal de coordenação.
3. Restaurar rede e infraestrutura base.
4. Restaurar proxy, certificados e aplicação.
5. Restaurar dados persistentes quando existirem.
6. Validar externamente todas as rotas críticas.
7. Comunicar recuperação e registrar a ocorrência.

## Testes

Executar simulação periódica em ambiente isolado e registrar duração, falhas e melhorias.

## Contatos de emergência

Referenciar a fonte segura onde os contatos atualizados são mantidos; não registrar dados pessoais desnecessários aqui.

## Última revisão

- Data: a definir
- Responsável: a definir
