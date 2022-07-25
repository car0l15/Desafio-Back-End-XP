## - Desafio-Back-end-XP

Olá, este é o meu repositório do desafio da XpInc para a turma XP da trybe.
Este é o código atual, porém ressalto que futuramente, após a avaliação teremos 
atualizações e melhorias constantes.

## ⚔️  Objetivos do projeto

Esta é uma API node com typescript, seu objetivo é simular um CRUD de ações comum
na empresa XP-Inc, os desafios poderiam ser feitos de diversas formas, porém 
respeitando os critérios estabelecidos para a criação da mesma.

## 🙂 Como fazer uso deste código?

Basta ir ao seu terminal e digitar o seguinte comando:

- git clone git@github.com:car0l15/Desafio-Back-end-XP.git
- cd Desafio-Back-end-XP
- no terminal realizar o comando npm install e executar suas variáveis de ambiente
conforme o exemplo abaixo e pronto!

ex: 
- MYSQL_HOST=localhost
- MYSQL_USER=Seuser
- MYSQL_PASSWORD=Suapassword
- MYSQL_DATABASE=XpIncSchema
- JWT_SECRET=segredo
- PORT=3002

## ➡️  Instruções para rotas e como consumir;

- Rota para checar a lista de ativos </br>
get/investimentos/comprar

- Rota para comprar ativos </br>
post/investimentos/comprar </br>

exemplo do body da requisição:

{
"codCliente": 1,
"codAtivo": 2,
"qtAtivo": 40
}

- Rota para verificar os ativos por clientes </br>
get/investimentos/vender

- Rota para vender ativos </br>
investimentos/vender </br>

exemplo do body da requisição:

{
"codCliente": 1,
"codAtivo": 2,
"qtAtivo": 40
}

- Rota para checar um cliente e seus ativos por codCliente (id) </br>
get/ativos/cliente/identificador do cliente </br>

a url da requisição deve seguir o exemplo:

 ativos/clientes/4

- Rota para checar um ativo por codAtivo (id) </br>
get/ativos/ identificador do ativo


a url da requisição deve seguir o exemplo:

ativos/4


- Rota para simular um depósito na conta </br>
post/conta/deposito </br>

exemplo do body da requisição:

{
"codCliente": 4,
"valor": 555.30
}


- Rota para simular um saque </br>
post/conta/saque

exemplo do body da requisição:

{
"codCliente": 4,
"valor": 555.30
}

- Rota para encontrar uma conta específica pelo codCliente </br>
get/conta/identificador da conta

a url da requisição deve seguir o exemplo:

 conta/4



## Rotas Bônus 🚀

- Rota login
post/login

exemplo do body da requisição:

{
"email": "email@email.com"
"senha": "123456"
}

a rota login verifica se o usuário e senha já existem no DataBase, </br>
caso a resposta seja positiva é retornado um token de validação feito </br>
com JWT, a ideia é que no futuro somente pessoas autorizadas tenham </br>
acesso a essas rotas.
