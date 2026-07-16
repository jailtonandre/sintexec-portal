# 03 — E-mail

## Objetivo

Registrar a operação do e-mail institucional sem expor credenciais ou dados pessoais.

## Provedor e domínios

- Provedor: a definir.
- Domínio de envio: a definir.
- Caixas, grupos e aliases institucionais: a definir.

## Autenticação do domínio

- MX: documentar no inventário de DNS.
- SPF: documentar política e fontes autorizadas.
- DKIM: registrar seletor e processo de rotação, nunca a chave privada.
- DMARC: registrar política, relatórios e evolução planejada.

## Operação

- Processo de criação e encerramento de contas.
- Recuperação de acesso e autenticação multifator.
- Retenção, encaminhamento e responsáveis.
- Integração futura do formulário de contato.

## Validação

- Envio e recebimento interno e externo.
- Resultado de SPF, DKIM e DMARC.
- Reputação e entrega em caixa de entrada.
- Links `mailto` do portal.

## Incidentes e rollback

Registrar como suspender uma origem de envio, revogar sessões e restaurar registros anteriores.

## Última revisão

- Data: a definir
- Responsável: a definir
