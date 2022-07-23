import connection from './connection';

const deposito = async (codCliente: number, valor: number) => {
  const [rows] = await connection.execute(`
  INSERT INTO XpIncSchema.cliente_conta (codCliente, saldo) VALUES (?, ?)
    `, [codCliente, valor]);

  return rows;
};

export default {
  deposito,
};
