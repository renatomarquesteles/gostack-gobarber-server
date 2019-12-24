<h1 align="center">
  <br/>
    <img src="https://raw.githubusercontent.com/renatomarquesteles/gobarber/master/src/assets/logo-purple.svg?sanitize=true" alt="GoBarber" width="90">
  <br/><br/>
  GoBarber API
  <div>
    <img src="https://img.shields.io/badge/-Node.js-green" />
    <img src="https://img.shields.io/badge/-Express-yellow" />
  </div>
</h1>

> API para agendamentos de uma barbearia.

## Descrição

API em Node.js com Express desenvolvida durante o bootcamp GoStack da Rocketseat utilizando as tecnologias e boas práticas mais utilizadas pelas empresas.

- ⚡ **Express** — Framework web para criar APIs em Node.js
- 💎 **Sequelize** — ORM para Node.js que suporta banco de dados PostgreSQL e outros
- 🐘 **PostgreSQL** — Banco de dados relacional
- 🌱 **MongoDB** — Banco de dados não relacional orientado a documentos livres
- 🔑 **Redis** — Armazenamento de dados na memória orientado a chave-valor
- 🔍 **Yup** — Validação de formulários
- 🔺 **Sentry** — Monitoramento de erros na aplicação
- 📧 **Nodemailer** — Envia e-mails através do Node.js
- 📝 **ESLint/Prettier/Editor Config** — Ferramentas para formatar e manter padrão de código

## Dependências

- [Node.js](https://nodejs.org/en/) (8.x ou superior)
- [Yarn](https://yarnpkg.com/pt-BR/docs/install)
- [Docker](https://www.docker.com/)

## Pré-Requisitos

Para rodar este servidor é necessário criar 3 containers no docker, para o PostgreSQL, MongoDB e Redis.

Com o Docker devidamente instalado, rode os seguintes comandos no seu terminal:

- `docker run --name redisbarber -p 6379:6379 -d -t redis:alpine`;
- `docker run --name mongobarber -p 27017:27017 -d -t mongo`;
- `docker run --name pgbarber -e POSTGRES_PASSWORD=docker -p 5433:5432 -d postgres`;

_Obs: Caso você reinicie seu computador, deverá iniciar os containers novamente com `docker start <nome_do_container>`_

## Instalação

1. Abra seu terminal em uma pasta qualquer e clone este repositório<br/>
`git clone https://github.com/renatomarquesteles/gobarber-api.git`
2. Navegue até o diretório do servidor: `cd gobarber-api`
3. Rode `yarn` para instalar todas as dependências
4. Copie o arquivo `.env.example` e renomeie para `.env`
5. Insira todos os valores para as variáveis de ambiente no `.env`
6. Rode `yarn start` e `yarn queue` para iniciar a API no endereço `http://localhost:3000`.

_Para uma melhor experiência, confira também o [frontend](https://github.com/renatomarquesteles/gobarber) do GoBarber!_

## License

:brazil: Este projeto está licenciado sob a licença MIT - consulte o arquivo [LICENSE](LICENSE.md) para obter detalhes.

:us: This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.
