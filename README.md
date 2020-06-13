# how-to-use-github
how to use github as a group

# Objetivo
Criar um repositório para aprender a trabalhar em equipe. Para isso vamos desenvolver uma aplicação em nodejs, mas ela será extremamente simples..

# Instalações

- [node](https://nodejs.org/en/)

Para instalar as dependências, rode o comando
```shell
$ npm install
```

# Projeto inicial
Criando um servidor http com o node.

```JavaScript
const express = require('express');
const app = express();
const routes = express.Router();
routes.get('/', (req, res) => {
    return res.send('hello world');
});

app.use(routes);

const port = process.env.PORT || 3333;
app.listen(port);
```

# Criar banchs de features
- mauricio: função de soma
- yle: função de multiplicação
- lucas: função exponencial

# criar os testes
cada função

# criar a action para rodar os testes
rodar quando tiver que dar um pull requeste para dentro da dev

# pull request para a master

# Criar novas branchs
objetivo, é duas pessoas mexerem no mesmo código
- mauricio: função soma
- yle: função soma

Oi mundo!

- lucas: resolver isso

# Dar rollback no commit
>>>>>>> 53e773acaf60489fc6bac9ca5e0a822aaea8d82f

