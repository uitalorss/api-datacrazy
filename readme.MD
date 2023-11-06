## 🚀 Instalando as dependências

Para instalar o projeto, instale as dependências usando o comando abaxo:

npm:

```
npm install
```

yarn:

```
yarn install
```

## ☕ Usando a api

Para utilizar a aplicação, siga estas etapas:

Configure as variáveis de ambiente da aplicação criando um arquivo `.env` na raíz do projeto e definindo o valor das seguintes variáveis.

- variáveis para configurar.
  - DB_HOST=
  - DB_PORT=
  - DB_USER=
  - DB_PASSWORD=
  - DB_NAME=
  - PORT=

npm:

```
npm run typeorm:run - Para rodar o comando de criação da tabela no banco de dados
npm run dev
```

yarn:

```
yarn typeorm:run - Para rodar o comando de criação da tabela no banco de dados
yarn dev
```

## Endpoints

### Cadastro de usuário

`POST/user`

- Esse serviço cadastra um novo usuário no sistema.

**Exemplo de Requisição**

```javascript
{
    "name": "José",
    "email": "jose@email.com",
    "phone": "71999999999"
}
```

**Exemplo de Respostas**

```javascript
// HTTP Status Code - 201
{
  message: "Usuário criado com sucesso.";
}
```

```javascript
// HTTP Status Code - 400
{
    "mensagem": "Já existe usuário cadastrado com o e-mail informado."
}
```

```javascript
// HTTP Status Code 400
- Erros de validação no corpo da requisição. (Campo em branco, email inválido, phone inválido)
```

### Listagem de usuários

`GET/users`

- Esse serviço lista os usuários cadastrados.

**Exemplo de Requisição**

```javascript
// Sem conteúdo no corpo (body) da requisição
```

**Exemplo de Respostas**

```javascript
// HTTP Status Code - 200
[
  {
    name: "José",
    email: "jose@email.com",
    phone: "71999999999",
  },
  {
    name: "Maria",
    email: "maria@email.com",
    phone: "71999999999",
  },
];
```

`GET/users/search?name=nome`

- Esse serviço lista os usuários com o nome passado por parâmetro de query.

**Exemplo de Requisição**

```javascript
// GET /users/search?name=josé
// Sem conteúdo no corpo (body) da requisição
```

**Exemplo de Respostas**

```javascript
// HTTP Status Code - 200
[
  {
    name: "José",
    email: "jose@email.com",
    phone: "71999999999",
  },
];
```

```javascript
// HTTP Status Code - 200
[];
```

`GET/users/younger`

- Esse serviço lista os usuários ordenando pelo criado mais recente ao mais antigo.

**Exemplo de Requisição**

```javascript
// Sem conteúdo no corpo (body) da requisição
```

**Exemplo de Respostas**

```javascript
// HTTP Status Code - 200
[
  {
    name: "José",
    email: "jose@email.com",
    phone: "71999999999",
  },
  {
    name: "Maria",
    email: "maria@email.com",
    phone: "71999999999",
  },
];
```

`GET/users/older`

- Esse serviço lista os usuários ordenando pelo criado mais antigo ao mais recente.

**Exemplo de Requisição**

```javascript
// Sem conteúdo no corpo (body) da requisição
```

**Exemplo de Respostas**

```javascript
// HTTP Status Code - 200
[
  {
    name: "Maria",
    email: "maria@email.com",
    phone: "71999999999",
  },
  {
    name: "José",
    email: "jose@email.com",
    phone: "71999999999",
  },
];
```

### Atualização de usuário

`PUT/user/:id`

- Esse serviço recebe um id pela rota da aplicação e os dados pelo corpo e atualiza as informações desse usuário.

**Exemplo de Requisição**

```javascript
  {
    name: "Maria Augusta",
    email: "maria@email.com",
    phone: "71999999999",
  }
```

**Exemplo de Respostas**

```javascript
// HTTP Status Code 204
// Sem conteúdo no corpo (body) da resposta
```

```javascript
// HTTP Status Code 404
{
    "mensagem": "Usuário não encontrado"
}
```

```javascript
// HTTP Status Code 400
- Erros de validação no corpo da requisição. (Campo em branco, email inválido, phone inválido)
- Erros de validação de parâmetro da requisição. (valor não numérico, inválido)
```

### Exclusão de usuário

`DELETE/user/:id`

- Esse serviço recebe um id de usuário na rota da aplicação e exclui o usuário correspondente a esse identificador.

**Exemplo de Requisição**

```javascript
// Sem conteúdo no corpo (body) da requisição
```

**Exemplo de Respostas**

```javascript
// HTTP Status Code 204
// Sem conteúdo no corpo (body) da resposta
```

```javascript
// HTTP Status Code 404
{
    "mensagem": "Usuário não encontrado"
}
```

```javascript
// HTTP Status Code 400
- Erros de validação de parâmetro da requisição. (valor não numérico, inválido)
```
