import IConta from '../interface/conta';
import connection from './connection';

const deposito = async (codCliente: number, valor: number) => {
  const [rows] = await connection.execute(`
  INSERT INTO XpIncSchema.cliente_conta (codCliente, saldo) VALUES (?, ?)
    `, [codCliente, valor]);

  return rows;
};

const saldoSaque = async (codCliente:number) => {
  const [rows] = await connection.execute(`SELECT saldo FROM XpIncSchema.cliente_conta 
    WHERE codCliente=?`, [codCliente]);

  const saldo = rows as IConta[];

  return saldo;
};

const saque = async (codCliente: number, valor: number) => {
  const [rows] = await connection.execute(`
   INSERT INTO XpIncSchema.cliente_conta (codCliente, saldo) VALUES (?, ?)
   `, [codCliente, valor]);

  console.log(rows);

  return {
    codCliente,
    saldo: valor,
  };
};

export default {
  deposito,
  saldoSaque,
  saque,
};
