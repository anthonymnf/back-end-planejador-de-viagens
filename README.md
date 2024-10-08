# ![plann.er](https://github.com/user-attachments/assets/661b2aef-880d-488d-9976-65ed352dca1b)

Este é o repositório back-end do projeto **plann.er**, uma API desenvolvida com **Fastify** e **Prisma** para o gerenciamento de viagens, permitindo a criação, edição e gerenciamento de atividades, links e participantes de uma viagem.

## 🔥 Introdução

A API do **plann.er** fornece endpoints para:

- Criação de viagens, atividades, links e convites para os participantes.
- Gerenciamento de convidados e suas confirmações de presença.
- Atualização e exclusão de viagens e suas respectivas atividades.
- Envio de convites por e-mail para os participantes.
- Esse projeto é a parte back-end da aplicação full-stack. O front-end está disponível [aqui](https://github.com/anthonymnf/planejador-de-viagens-React).

Este projeto começou no evento **NLW Journey** da RocketSeat e foi aprimorado com diversas funcionalidades, incluindo o envio de e-mails e a adição de novas rotas para gerenciar viagens e participantes.
A documentação completa da API pode ser acessada [aqui](https://nlw-journey.apidocumentation.com/reference).

### ⚙️ Pré-requisitos

Para executar o projeto, você precisará ter as seguintes ferramentas instaladas em sua máquina:

- Node.js (versão 18.x ou superior)
- npm ou yarn
- Prisma para gerenciar o banco de dados

#### Clonando o repositório:

```bash
git clone https://github.com/anthonymnf/back-end-planejador-de-viagens.git
```

#### Instalando dependências:

```bash
cd back-end-planejador-de-viagens
npm install
# ou
yarn install
```

### 🔨 Guia de instalação

Siga os passos abaixo para rodar o projeto em ambiente de desenvolvimento:

1. Configure as variáveis de ambiente no arquivo `.env`, incluindo as credenciais do banco de dados e a porta desejada.
2. Execute as migrations do Prisma:

```bash
npx prisma migrate dev
```
2. Inicie o servidor:

```bash
npm run dev
# ou
yarn dev
```

O servidor estará rodando em `http://localhost:3000`.

## 📦 Tecnologias usadas:

- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)

## 🏛 Arquitetura do projeto

O código do servidor está estruturado da seguinte maneira:
- `server.ts`: Arquivo principal que configura o servidor, registra rotas e middlewares.
- Rotas:
  - `create-trip.ts`: Criação de viagens.
  - `confirm-trip.ts`: Confirmação de viagens.
  - `create-activity.ts`: Criação de atividades.
  - `get-activities.ts`:  Listagem de atividades.
  - `create-link.ts`: Criação de links importantes.
  - `get-links.ts`: Listagem de links.
  - `get-participants.ts`: Listagem de participantes.
  - `create-invite.ts`: Criação e envio de convites para os convidados.
  - `update-trip.ts`: Atualização do local e data da viagem.
  - `get-trip-details.ts`: Detalhamento de uma viagem.

## 👷 Autores

- **Anthony Matheus Nascimento Freitas** - _Desenvolvedor Full-Stack_ - [ anthonymnf](https://github.com/anthonymnf)

## 💭 FAQ - Perguntas frequentes

#### Como as rotas da API estão estruturadas?

As rotas seguem um padrão `RESTful`, com métodos como `POST` para criação de viagens, atividades e links, e `GET` para listar ou buscar informações de viagens e seus detalhes.

#### A API tem validação de dados?

Sim, usamos o **Zod** em conjunto com o **Fastify** para validação de dados e schemas nas rotas.

#### Quais são os tipos de erros tratados?

Os erros são tratados por um handler personalizado que captura e responde de acordo com o tipo de exceção. Veja o arquivo `error-handler.ts` para mais detalhes.

## 💡 Expressões de gratidão

Gostaria de agradecer à **RocketSeat** pelo evento **NLW Journey**, onde esse projeto teve início. Para suporte, entre em contato através do meu e-mail: anthonymnf30@gmail.com ou pelo meu linkedin [Anthony Matheus](https://www.linkedin.com/in/anthony-matheus)
