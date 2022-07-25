## - Desafio-Back-end-XP

Olá, este é o meu repositório do desafio da XpInc para a turma XP da trybe.
Este é o código atual, porém ressalto que futaramente, após a avaliação teremos 
atualizações e melhorias constantes.

## ⚔️  Objetivos do projeto

Esta é uma API node com typescript, seu objetivo é simular um CRUD de ações comun
na empresa XP-Inc, os desafios poderiam ser feitos de diversas formas, porém 
respeitando os critérios estabelecidos para a criação da mesma.

## 🙂 Como fazer uso deste código?

Basta entrar ir ao seu terminal e digitar o seguinte comando:

- git clone git@github.com:car0l15/Desafio-Back-end-XP.git
- cd Desafio-Back-end-XP
- no terminal realizar o comando npm install e executar suas variáveis de ambiente
conforme o exemplo abaixo e pronto!

ex: 
MYSQL_HOST=localhost
MYSQL_USER=Seuser
MYSQL_PASSWORD=Suapassword
MYSQL_DATABASE=XpIncSchema
JWT_SECRET=segredo
PORT=3002

## ➡️  Intruções para rotas e como consumir;

- Rota para checar a lista de ativos 
get/investimentos/comprar

-Rota para comprar uma aplicação
post/investimentos/comprar

- Rota para verificar os ativos por clientes
get/investimentos/vender

- Rota para vender ativos
vender/investimentos/vender

- Rota para checar um cliente e seus ativos por codCliente (id)
get/ativos/cliente/identificador do cliente

- Rota para checar um ativo por codAtivo (id)
get/ativos/ identificador do ativo

- Rota para simular um deposito na conta
post/conta/deposito

- Rota para simular um saque
post/conta/saque

- Rota para encontrar uma conta especifica pelo codCliente
get/conta/identificador da conta

## Rotas Bônus

- Rota login
post/login

a rota login verifica se o usuário e senha já existem no DataBase,
caso a resposta seja positiva é retornado um token de validação feito
com JWT, a ideia é que no futuro somente pessoas autorizadas tenham
acesso a essas rotas.
