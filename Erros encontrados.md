# Erros encontrados

## Visão geral
Este documento lista os problemas identificados na aplicação durante a execução dos testes E2E. Os itens estão organizados por fluxo/página e incluem uma breve descrição.

## Como usar
- ❌ `[FAIL]` = problema ativo
- As rotas indicam a localização aproximada do bug

## Resumo por área
| # | Página / Fluxo | Descrição curta | Status |
|---|----------------|-----------------|--------|
| 01 | `/login` | Fluxo feliz de login mostra mensagem de login incorreto e botão de bypass | ❌ |
| 02 | `/login` | Fluxo "Esqueceu sua senha?" não abre modal ou direciona para página de recuperação | ❌ |
| 03 | `/dashboard` | Dashboard não carrega funcionalidade dashboard | ❌ |
| 04 | `/dashboard` | Menu de usuário não está implementado | ❌ |
(Se 05 for um problema)
| 05 | `/dashboard/campanha/bancos-de-dados` | Botão arquivar item está removendo itens em vez de arquivar | ❌ |
(Então 06 também é)
| 06 | `/dashboard/campanha/bancos-de-dados` | Permite criar itens com mesmo nome | ❌ |
(Senão 07 que é)
| 07 | `/dashboard/campanha/bancos-de-dados` | Botão remover item remove itens com mesmo nome (deve tratar nome como chave única) | ❌ |
| 08 | `/dashboard/campanha/bancos-de-dados` | Arquivar item arquiva apenas 1 item em lista com nomes duplicados | ❌ |
| 09 | `/dashboard/campanha/bancos-de-dados` | Tabela de itens arquivados falta coluna de ações | ❌ |
| 10 | `/dashboard/campanha/bancos-de-dados` | Tabela de itens arquivados não exibe mensagem de vazio | ❌ |
| 11 | `/dashboard/campanha/colmeia-forms` | Colmeia Forms não carrega | ❌ |
