## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

----curl calls-----
curl --location --request POST 'http://localhost:3000/products' \
--header 'Content-Type: application/json' \
--data-raw '{
    "title": "amol",
    "desc": "D1",
    "price": 10011
}'

curl --location --request GET 'http://localhost:3000/products'


curl --location --request GET 'http://localhost:3000/products/10'

curl --location --request PATCH 'http://localhost:3000/products/10' \
--header 'Content-Type: application/json' \
--data-raw '{
    "title": "amoklllkk1",
    "desc": "D1111",
    "price": 444
}'

curl --location --request DELETE 'http://localhost:3000/products/10'