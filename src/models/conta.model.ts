import IConta from '../interface/conta';
import connection from './connection';

const deposito = async (codCliente: number, valor: number) => {
  const [rows] = await connection.execute(`
  INSERT INTO cliente_conta (codCliente, saldo) VALUES (?, ?)
    `, [codCliente, valor]);
  const rowAtualizado = rows as IConta[];
  return rowAtualizado;
};

const saldoSaque = async (codCliente:number) => {
  const [rows] = await connection.execute(`SELECT saldo FROM cliente_conta 
    WHERE codCliente=?`, [codCliente]);

  const saldo = rows as IConta[];

  return saldo;
};

const saque = async (codCliente: number, valor: number) => {
  const [rows] = await connection.execute(`
   INSERT INTO cliente_conta (codCliente, saldo) VALUES (?, ?)
   `, [codCliente, valor]);

  return {
    codCliente,
    saldo: valor,
  };
};

const getContaById = async (codCliente: number) => {
  const [rows] = await connection.execute(`
   SELECT * FROM cliente_conta WHERE codCliente=?
   `, [codCliente]);
  const contaAtualizada = rows as IConta[];

  return contaAtualizada;
};

export default {
  deposito,
  saldoSaque,
  saque,
  getContaById,
};
