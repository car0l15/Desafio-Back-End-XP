import IQtAtivos from '../interface/qtAtivos';
import connection from './connection';

const getAll = async () => {
  const [rows] = await connection.execute('SELECT * FROM XpIncSchema.investimento');
  console.log(rows, 'model');
  return rows;
};

const quantityAssets = async (codCliente: number, codAtivo: number) => {
  const [rows] = await connection.execute(
    'SELECT qtAtivo FROM XpIncSchema.investimento WHERE codCliente=? AND codAtivo=?',
    [codCliente, codAtivo],
  );
  const quantidade = rows as IQtAtivos[];

  return quantidade;
};

const insertAssets = async (codCliente: number, codAtivo: number, qtAtivos: number) => {
  const [rowsInsert] = await connection.execute(
    'INSERT INTO XpIncSchema.cliente_ativos (codCliente, codAtivo, qtAtivo) VALUES(?, ?, ?)',
    [codCliente, codAtivo, qtAtivos],
  );

  console.log(rowsInsert, 'ignora');

  return {
    codCliente,
    codAtivo,
    qtAtivo: qtAtivos,
  };
};

export default {
  getAll,
  quantityAssets,
  insertAssets,
};
