# Burger Queen

## Índice

* [1. Preâmbulo](#1-preâmbulo)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Objetivos de aprendizagem](#3-objetivos-de-aprendizagem)
* [4. Considerações gerais](#4-considerações-gerais)
* [5. Critérios de aceitação mínima do
  projeto](#5-critérios-de-aceitação-mínima-do-projeto)
* [6. Avaliação](#6-avaliação)
* [7. Dicas e leituras complementares](#7-dicas-e-leituras-complementares)

***

## 1. Preâmbulo

[React](https://reactjs.org/), [Angular](https://angular.io/) e
[Vue](https://vuejs.org/) são alguns dos _frameworks_ e _bibliotecas_ de
JavaScript mais usados na área de desenvolvimento ao redor do mundo e existe uma
razão para isso. No contexto do navegador, [_manter a interface sincronizada com
o estado é difícil_](https://medium.com/dailyjs/the-deepest-reason-why-modern-javascript-frameworks-exist-933b86ebc445).

Ao eleger um _framework_ ou _biblioteca_ para nossa interface, nos apoiamos em
uma série de convenções e implementações _testadas_ e _documentadas_ para
resolver um problema comum a toda interface web. Isto nos permite concentrar-nos
melhor (dedicar mais tempo) nas características _específicas_ de nossa
aplicação.

Quando escolhemos uma destas tecnologias não só importamos um pedaço de código
para reusar (o qual já é um grande valor por si só), mas também adotamos uma
**arquitetura**, uma série de **princípios de desenho**, um paradigma, algumas
**abstrações**, um **vocabulário**, uma **comunidade**, etc...

Como desenvolvedora Front-end, estes kits de desenvolvimento podem resultar em
uma grande ajuda para implementar rapidamente características dos projetos em que
você for trabalhar.

## 2. Resumo do projeto

Desta vez temos um projeto 100% por demanda. Se bem que você sempre pode (e
deve) fazer sugestões de melhora e mudança, mas muitas vezes trabalhará em um
projeto que primeiro deve se assegurar de cumprir com os requisitos. 

Um pequeno restaurante de hambúrgueres, que está crescendo, necessita uma
interface em que se possa realizar pedidos utilizando um _tablet_, e enviar-los
para a cozinha para que sejam preparadas de forma ordenada e eficiente (através
de um _backend_ que os detalhes serão dados mais adiante). 

![burger-queen](https://user-images.githubusercontent.com/110297/42118136-996b4a52-7bc6-11e8-8a03-ada078754715.jpg)

Estas são as informações que temos do cliente:

> Somos **Burguer Queen**, um fast food 24hrs.
>
>A nossa proposta de serviço 24 horas foi muito bem recebida e, para continuar a
>crescer, precisamos de um sistema que nos ajude a receber pedidos de nossos
>clientes.
>
>Nós temos 2 menus. Um muito simples para o café da manhã:
>
>| Ítem                      |Preço R$|
>|---------------------------|------|
>| Café americano            |    5 |
>| Café com leite            |    7 |
>| Sanduíche de presunto e queijo|   10 |
>| Suco de fruta natural     |    7 |
>
>E outro menu para o resto do dia: 
>
>| Ítem                      |Preço |
>|---------------------------|------|
>|**Hambúrgueres**           |   **R$**   |
>|Hambúrguer simples         |    10|
>|Hambúrguer duplo           |    15|
>|**Acompanhamentos**        |   **R$**   |
>|Batata frita               |     5|
>|Aros de cebolla            |     5|
>|**Bebidas**                |   **R$**   |
>|Água 500ml                 |     5|
>|Água 750ml                 |     7|
>|Bebida gaseificada 500ml   |     7|
>|Bebida gaseificada 750ml   |    10|
>
>**Importante:** Os clientes podem escolher entre hambúrgueres de carne bovina,
>frango ou vegetariano. Além disso, por um adicional de R$ 1,00 , eles podem
>adicionar queijo ou ovo.
>
>Nossos clientes são bastante indecisos, por isso é muito comum que eles mudem o
>seu pedido várias vezes antes de finalizar.

A interface deve mostrar os dois menus (café da manhã e restante do dia), cada
um com todos os seus _produtos_. O usuário deve poder escolher que _produtos_
adicionar e a interface deve mostrar o _resumo do pedido_ com o custo total.

![out](https://user-images.githubusercontent.com/110297/45984241-b8b51c00-c025-11e8-8fa4-a390016bee9d.gif)

## 3. Objetivos de aprendizagem

1. O objetivo principal é aprender a construir uma interface web usando o _framework_ escolhido (React, Vue ou Angular). Todas esses frameworks front-end atacam o mesmo problema: ** como manter a interface e estado sincronizados**. Portanto, esta experiência espera familiarizá-lo com o conceito de estado da tela, e como cada mudança no estado vai refletir na interface (por exemplo, toda vez que adicionamos um _producto_ para um _pedido_, a interface deve atualizar a lista de pedidos e o total).

2. Como objetivo secundário, você deve seguir as recomendações para PWAs (_Progressive Web Apps_), que inclui conceitos como **offline**. Para orientá-las sobre este tema,recomendamos que você use [Lighthouse](https://developers.google.com/web/tools/lighthouse/?hl=es), que é uma ferramenta do Google que nos ajuda a garantir que nossos aplicativos web sigam "boas práticas". Na verdade, usaremos o Lighthouse ao avaliar o projeto.

3. Finalmente, a interface deve ser projetada especificamente para rodar em **tablets**.

Tópicos: _react_, _angular_, _vue_, _pwa_, _offline-first_, _service-worker_.
 
## 4. Considerações gerais

Este projeto deve ser "resolvido" individualmente.

Trabalhe integralmente uma história de usuário antes de passar para a próxima. Cumpra todas as histórias possíveis dentro do tempo especificado.

A lógica do projeto deve ser totalmente implementada em JavaScript (ES6 +), HTML e CSS e empacotados de forma automatizada. Neste projeto é sim permitido usar bibliotecas ou frameworks (você deve escolher entre
[React](https://reactjs.org/), [Vue](https://vuejs.org/) ou
[Angular](https://angular.io/)).

O aplicativo deve ser um _Single Page App_. Os pedidos serão enviados por meio de um _tablet_, mas **não queremos um aplicativo nativo**, mas sim um aplicativo Web que seja **responsivo** e possa funcionar **offline**.

Precisamos pensar bem sobre o UX para aqueles que vão receber os pedidos, o tamanho e a aparência dos botões, a visibilidade do estado atual do pedido, etc.

O aplicativo implantado deve ter 80% ou mais das pontuações de Performance, Progressive Web App, Acessibilidade e Melhores Práticas do Lighthouse.

O aplicativo deve usar scripts `npm-scripts` e ter` start`, `test`,` build` e `deploy`, que são responsáveis por iniciar,executar os testes, pacote e implantar o aplicativo, respectivamente.

Os testes unitários devem abranger um mínimo de 70% dos _statements_, _functions_, _lines_ e _branches_.

Este projeto inclui um _boilerplate_ com o código necessário para começar. A parte de back-end já foi resolvida. O _boilerplate_ inclui os seguintes arquivos/pastas com configurações do Fierbase(hosting, firestore y functions):

```text
./04-burger-queen/
├── firebase.json
├── firestore.indexes.json
├── firestore.rules
├── functions
│   ├── index.js
│   ├── package.json
└── README.md
```

A parte da interface não está incluída, então, você deve definir a estrutura das pastas e arquivos que você considera necessários. Você pode estruturá-los de acordo com as convenções do _framework_ escolhido. Portanto, os _tests_ e os _setups_ necessários para executá-los serão feitos por você.

Para iniciar este projeto você terá que fazer um _fork_ e _clone_ deste repositório.

## 5. Critérios mínimos de aceitação do projeto

### Definição do produto

O [_Product Owner_](https://www.youtube.com/watch?v=r2hU7MVIzxs&t=202s) nos apresentou este _backlog_ que é o resultado do seu trabalho com o cliente até hoje
***

#### [História de usuário 1] Garçom/Garçonete deve ser capaz de levar o pedido do cliente

Eu como graçom/garçonete quero poder anotar o pedido de um cliente para não depender da minha memória, saber quanto cobrar e poder enviar os pedidos para a cozinha para evitar erros e para que eles possam ser preparados em ordem.

##### Critérios de aceitação

O que deve acontecer para satisfazer as necessidades do usuário?

* Anotar o nome do cliente.
* Adicionar produtos aos pedidos.
* Excluir produtos.
* Ver resumo e o total da compra.
* Enviar o pedido para a cozinha (guardar em algum banco de dados).
* Funcionar bem e se adequar a um _tablet_.

##### Definição de pronto

O acordado abaixo deve acontecer para dizer que a história está terminada:

* Você deve ter recebido _code review_ de pelo menos uma parceira.
* Você fez _test_ unitários e, além disso, testou seu produto manualmente.
* Você fez _testes_ de usabilidade e incorporou o _feedback_ do usuário.
* Você deu deploy de seu aplicativo e marcou sua versão (tag git).

***

#### [História de usuário 2] Chefe de cozinha deve ver os pedidos

Eu como chefe de cozinha quero ver as encomendas dos clientes em ordem, poder marcar que estão prontos e poder notificar os graçons/garçonetes que um o pedido está pronto para atender um cliente.

##### Critérios de aceitação

* Ver as encomendas à medida que são feitas.
* Marcar os pedidos que foram preparados e estão prontos para serem servidos.
* Ver o tempo que levou para preparar o pedido desde que chegou, até ser marcado como concluído.

##### Definição de pronto

* Você deve ter recebido _code review_ de pelo menos uma parceira.
* Você fez _test_ unitários e, além disso, testou seu produto manualmente.
* Você fez _testes_ de usabilidade e incorporou o _feedback_ do usuário.
* Você deu deploy de seu aplicativo e marcou sua versão (tag git).

***

#### [História de usuário 3] Garçom/Garçonete deve ver os pedidos prontos para servir

Eu como garçom/garçonete quero ver os pedidos que estão prontos para entregá-los rapidamente para os clientes que os fizeram.

##### Critérios de aceitação

* Ver a lista de pedidos prontos para servir.
* Marque os pedidos que foram entregues.

##### Definição de pronto

* Você deve ter recebido _code review_ de pelo menos uma parceira.
* Você fez _test_ unitários e, além disso, testou seu produto manualmente.
* Você fez _testes_ de usabilidade e incorporou o _feedback_ do usuário.
* Você deu deploy de seu aplicativo e marcou sua versão (tag git).
* Os dados devem ser mantidos intactos, mesmo depois que um pedido terminado. Tudo isso para poder ter estatísticas no futuro.

***

## 6. Avaliação

NOTA: Esta seção inclui uma lista de habilidades que podem ser levadas em conta ao avaliar o projeto. Os níveis esperados são _sugestões_ bem como _guias_ no design
curricular, mas não regras absolutas.

Te aconselhamos revisar a [nossa
rúbrica](https://docs.google.com/spreadsheets/d/1hwyBoJWbA0MHGEMDLKqftIv64IhA1uKe2kmJhYpir4s/edit#gid=1789463812) para ver a descrição detalhada de cada _habilidade_ e cada _nível_. Também recomendamos que você tente aplicar a rúbrica a si mesmo e/ou ao projeto de
suas companheiras ao longo do Bootcamp para ver sua evolução.

### Habilidades Socioemocionais

| Habilidade                                      | Nível esperado |
|-------------------------------------------------|----------------|
| Planejamento, organização e administração do tempo| 4              |
| Autoaprendizagem                                | 4              |
| Apresentação                                    | 4              |
| Adaptabilidade                                  | 4              |
| Solução de problemas                            | 4              |
| Trabalho em equipe                              | 4              |
| Responsabilidade                                | 4              |
| Dar e reciber feedback                          | 4              |
| Comunicação eficaz                              | 4              |

### Habilidades Técnicas, Front-end

| Habilidade              | Nível esperado |
|------------------------|----------------|
| **Computer Science**                    | | Lógica                 | 2
| | Arquitetura            | 3              | | **Source Control Management**
| | Git                    | 3              | | GitHub                 | 3
| | **JavaScript**                          | | Estilo                 | 3
| | Nomenclatura/semântica | 3              | | Funções/modularidade   | 4
| | Estruturas de dados    | 3              | | Testes                 | 3
| | **HTML**                                | | Validação              | 3
| | Estilo                 | 3              | | Semântica              | 4
| | **CSS**                                 | | DRY                    | 4
| | Responsividade         | 4              |

### Habilidades Técnicas, UX

| Habilidade                                        | Nível esperado |
|---------------------------------------------------|----------------|
| User Centricity                                   | 4              |
| Visual Design                                     | 2              |

***

## 7. Dicas e leituras complementares

### Primeros passos

1. O primeiro passo deste projeto deve ser converter o menu descrito pelo cliente em uma estrutura JSON para mais tarde _printar_ na tela.

2. Faça um _fork_ deste repositório (no GitHub).

3. Clone seu _fork_ no seu computador:

   ```sh
   git clone git@github.com:<tu-usuario-de-github>/<cohortid>-burger-queen.git
   cd <cohortid>-burger-queen
   ```

4. Crie uma ramificação da `master` para começar a trabalhar. Por exemplo:

   ```sh
   git checkout -b develop
   ```

5. Criar um projeto no [Firebase](https://firebase.google.com/)

6. Habilitar Firestore (_começar em modo bloqueado_) nas "Bases de Dados" de [Firebase console](https://console.firebase.google.com/).

7. Instale o utilitário de linha de comando do Firebase:

   ```sh
   npm i -g firebase-tools
   ```

8. Adicionar o ambiente de produção para fazer o deploy:

   ```sh
   firebase use --add
   ```

9. Instalar dependências de cloud functions:

   ```sh
   # usando yarn
   cd functions && yarn && cd ..
   # alternativamente, usando npm
   cd functions && npm install && cd ..
   ```

10. Rodar o comando: `firebase deploy`

11. Neste ponto, você pode começar com o _front-end_ :wink:

***

Nota para estudantes que escolhem React e querem usar `create-react-app`:

Se você tentar usar o `create-react-app` no diretório do projeto, você receberá
um erro dizendo que há arquivos que podem apresentar um conflito. Para evitar
esse problema você pode criar um novo aplicativo usando `create-react-app` e a
partir daí _ misture com a pasta do projeto:

```sh
# se estava na pasta do projeto, fomos para a pasta acima
cd ..

create-react-app burger-queen-tmp
cp -r burger-queen/* burger-queen-tmp/
cp -r burger-queen-tmp/.gitignore burger-queen-tmp/* burger-queen/
rm -rf burger-queen-tmp
cd burger-queen
```

### Outros recursos

#### Frameworks / bibliotecas

* [React](https://reactjs.org/)
* [Vue](https://vuejs.org/)
* [Angular](https://angular.io/)

#### Ferramentas

* [npm-scripts](https://docs.npmjs.com/misc/scripts)
* [Babel](https://babeljs.io/)
* [webpack](https://webpack.js.org/)

#### PWA

* [Seu primeiro Progressive Web App - Google
  developers](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/?hl=es)
* [Progressive Web Apps -
  codigofacilito.com](https://codigofacilito.com/articulos/progressive-apps)
* [offlinefirst.org](http://offlinefirst.org/)
* [Usando Service Workers -
  MDN](https://developer.mozilla.org/es/docs/Web/API/Service_Worker_API/Using_Service_Workers)
* [Como habilitar dados sem conexão - Firebase
  Docs](https://firebase.google.com/docs/firestore/manage-data/enable-offline?hl=es-419)

#### Serverless

* [O que é Serverless? | FooBar -
  YouTube](https://www.youtube.com/watch?v=_SYHUpLi-2U)
* [Firebase](https://firebase.google.com/)
* [Serverless Architectures - Martin
  Fowler](https://www.martinfowler.com/articles/serverless.html)

#### Cloud functions

* [Cloud functions - Firebase
  Docs](https://firebase.google.com/docs/functions/?hl=es-419)

<!-- ## Checklist

### Geral

* [ ] O produto final segue as diretrizes de design.

### `README.md`

* [ ] Processo de design de documentos.
* [ ] Inclui informações para desenvolvedores (deps, instalação, uso, implantação, teste,
   ...)

### Lighthouse

* [ ] 80% ou mais na sessão _Performance_.
* [ ] 80% ou mais na sessão _Progressive Web App_.
* [ ] 80% ou mais na sessão _Accessibility_.
* [ ] 80% ou mais na sessão _Best Practices_.

### Tests

* [ ] 70% ou mais em cobertura de _statements_.
* [ ] 70% ou mais em cobertura de _functions_.
* [ ] 70% ou mais em cobertura de _lines_.
* [ ] 70% ou mais em cobertura de _branches_.

### UI

#### HU 1: Anotar pedidos

* [ ] Digite o nome do cliente.
* [ ] Filtre _menu_ para _desayuno_ e _resto del día_.
* [ ] Adicionar item ao pedido.
* [ ] Excluir item do pedido.
* [ ] Mostra _resume_ de ordem com todos os itens e o total.
* [ ] Enviar para a cozinha (isso deve salvar o pedido).

#### HU 2: Ver pedidos

* [ ] Visualização de pedidos pendentes.
* [ ] Marque a ordem como pronta.
* [ ] Ver histórico do pedido.

#### HU 3: Autenticação

* [ ] Conecte-Se.
* [ ] Restaurar senha.

### UX

* [ ] É bem e funciona bem em tablets.
* [ ] Você pode _adicionar a tela inicial_ como um aplicativo da web (ele tem um manifesto,
   ícones, ...) em iOS e Android.
* [ ] Fácil utilização em telas sensíveis ao toque (telas sensíveis ao toque).
* [ ] Status atual do pedido sempre visível enquanto fazemos um pedido.

-->