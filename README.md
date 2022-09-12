<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>


## Description
RESTful-API Backend for CPA network, developed with Nest.js on TypeScript language, with framework with PostgreSQL using Sequelize ORM and Swagger at the Backend Summer School from the Lanit company. 

## Installation

```bash
$ npm install
```

Create file .env (there is file .env.example that you can use as template). In .env file you need to write:

* In port field write your localhost port (default 5000)

* For the correct operation of the server with PostgreSQL database write your POSTGRES_USER and POSTGRES_PORT. Server creates tables automaticly. 

* JWT_SECRET is also in .env file, you can use any keyword


## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

To open Swagger and test some requests you need to open page <a href="http://localhost:5000/api/" target="_blank">"Swagger"</a> (<a href="http://localhost:5000/api/" target="_blank">http://localhost:5000/api/</a>)
