# Avaliação QA — Colmeia

## Resumo do Projeto
Suite de testes E2E para a aplicação Colmeia usando Cypress. Cobre fluxos principais da UI com Page Objects e geração de relatórios em Mochawesome.

## Pré-requisitos
- Node.js (recomendado >= 16)
- npm ou yarn
- Variáveis de ambiente ou credenciais necessárias para acessar ambientes (defina em `.env` quando aplicável)

## Instalação
Instale dependências:

```bash
npm install
```
## Configuração

- Crie o arquivo .env.qa e/ou .env.dev na raiz do projeto
```bash
BASE_URL={{endereco-pagina}}
USER={{usuario-valido))
PASSWORD={{senha-usuario}}
```

## Execução

- Abrir run interativo (p/ desenvolvimento):

```bash
npm run cy:open:qa
```

- Executar em modo headless (runs automatizados):

```bash
npm run cy:run:qa
ou
npm run cy:run:qaReport
```

## Geração de relatório
Após executar os testes, gere o relatório final (HTML) com:

```bash
npm run report
```

O relatório final será salvo em: `cypress/reports/index.html`.

Observações:
- Os JSONs individuais gerados pelo `cypress-mochawesome-reporter` ficam em `cypress/reports/.jsons`.
- O script `report` mescla esses JSONs e gera o `index.html`.
- Então, vale o ponto de atenção em deletar os JSONs anteriores.

## Estrutura dos testes
- `cypress/e2e` — arquivos de teste (cenários)
- `cypress/pages` — Page Objects organizados por tela/fluxo

Padrões de nomeação:
- Arquivos de teste: `XX-nomeDoFluxo.cy.js` (ex.: `01-login.cy.js`)
- Page Objects: pasta por tela com `index.js` e `elements.js`


## Padrões de Projeto
- [Page Objects](https://martinfowler.com/bliki/PageObject.html) 

## Reports
Mochawesome

## Para avaliador
Erros encontrados.md
