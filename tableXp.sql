CREATE DATABASE `XpIncSchema`;

CREATE TABLE XpIncSchema.ativos(
codAtivo INT NOT NULL AUTO_INCREMENT primary key,
tipo VARCHAR(100) NOT NULL,
valor DECIMAL (7,2) NOT NULL,
qtAtivo INT NOT NULL 
)engine = InnoDB;

CREATE TABLE XpIncSchema.clientes(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(100) NOT NULL,
  senha VARCHAR(100) NOT NULL
)engine = InnoDB;

CREATE TABLE XpIncSchema.cliente_ativos(
 codCliente INT NOT NULL,
 codAtivo INT NOT NULL,
 qtAtivo INT NOT NULL,
 FOREIGN KEY(codAtivo) REFERENCES ativos (codAtivo),
 FOREIGN KEY(codCliente) REFERENCES clientes (id)  
)engine = InnoDB;

CREATE TABLE XpIncSchema.cliente_conta(
codCliente INT NOT NULL,
saldo DECIMAL(7,2),
FOREIGN KEY(codCliente) REFERENCES clientes (id)
)engine = InnoDB;

INSERT INTO XpIncSchema.ativos( tipo, valor, qtAtivo) VALUES 
('CDB', 12.20, 400),
('SELIC', 10.13, 12000),
('CDI', 11.40, 550),
('XPTO', 25.90, 2500);

INSERT INTO XpIncSchema.clientes (email, senha) VALUES 
('Martas@gmail.com', '12345678'),
('Carlossouza@hotmail.com', 'abcde12345'),
('eduardoBRI@yahoo.com', 'senhasenha'),
('carol35@gmail.com', 'percy12355');

