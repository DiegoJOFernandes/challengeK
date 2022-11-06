# challengeA
Software automation challenge K

<div justify-content="space-between" align-items="center">
    <img src="https://seekicon.com/free-icon-download/cypress_1.svg" width="50" alt= "Cypress"/>
    <img src="https://seekicon.com/free-icon-download/javascript_3.svg" width="50" alt="Javascript"/>
    <img src="https://seekicon.com/free-icon-download/cucumber_1.svg" width="50" alt="Cucumber"/>
    <img src="https://seekicon.com/free-icon-download/prettier_2.svg" width="50" alt="Prettier"/>
</div>

## Configuração

1. Após clonar este repositório, execute o comando no terminal:
```
npm i
```
2. Para executar os testes em modo headless(oculto):
```
npm run e2e:headless
```
3. Para executar os testes no modo interativo com a interace gráfica do cypress:
```
npm run e2e
```
4. Para executar os testes de API:
```
npm run api
```

## Estrutura

O projeto de automação desktop possui a seguinte estrutura:

- **_fixtures_** - Armazenamos dados que vão ser utilizados em nossos testes ex.: .json, .yml, .txt, .jgp. Os arquivos de fixture ficam localizados na pasta cypress/fixtures por padrão. [_mais sobre..._](https://docs.cypress.io/api/commands/fixture#Syntax)
- **_e2e_** - Contém todos os arquivos de teste _.feature_ e os _steps_ do gherkin.
- **_common_** - Aqui podemos adicionar tags com @before e @after para preparar dados antes da execução dos cenários. Também adicionamos steps que são comuns em mais de um cenário de automação para reutilizar código e fazer mais com menos esse é o _commons steps_.
- **_nameFeature_** - Para padronizar nosso projeto no modelo POM(Page Object Model) e escrever cenários utilizando o gherkin temos que criar uma pasta com o nome da feature que vamos trabalhar e dentro dessa pasta criamos outro arquivo nomeado de _steps.js_ nele vamos gerar os steps a partir do nosso BDD(.feature).
- **_.feature_** - Descrevemos cenários com a sintaxe gherkin, afim de explorar uma funcionalidade e atraves de ações chegar a um resultado esperado.
- **_support_** - Esta pasta contém commands.js. É possível personalizar comandos e chama-los em qualquer linha de código das pages objects e steps do cucumber.
- **_pages_** - Criamos pastas para organizar classes e métodos que vamos utilizar em nossas steps, para interagir com os elementos das WebPages.
- **_cypress.config.js_** - Arquivo de configurações relacionadas ao Cypress, por exemplo: URL base, tempo de limite de execução, configuração de diretórios e etc. O comportamento padrão do Cypress pode ser modificado fornecendo parâmetros de configuração. [_mais sobre..._](https://docs.cypress.io/guides/references/configuration#cypress-json).

Para entender melhor como um projeto de automação cypress é estruturado, consulte a [documentação oficial](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Test-Structure).


````
challenge K/
    ├──cypress/
    |   ├──api/
    |   |   └──nameApi/
    |   |       └──steps.spec.js
    |   ├──e2e/
    |   |   ├──hooks/
    |   |   |    └──steps.js
    |   |   ├──nameFeature
    |   |   |    └──steps.js
    |   |   └──nameFeature.feature/
    |   ├──fixtures/
    |   └──support/
    |       └──pages/
    |           └──namePageFeature/
    |               └──index.js
    ├──api.config.js
    └──cypress.config.js
````

## Fontes e plugins

- [Documentação do Cypress](https://docs.cypress.io/guides/overview/why-cypress)
- [Documentação do Cucumber](https://cucumber.io/docs/gherkin/reference/)
- [Documentação do Prettier](https://prettier.io/docs/en/index.html)

## Cenários

### e2e

| Checkout                                      |
| --------------------------------------------- |
| Usuário verifica produto na tela de pagamento |
|                                               |

### API
| Trello Api                                    |
| --------------------------------------------- |
| Validar chave e valor de list.name            |
|                                               |
