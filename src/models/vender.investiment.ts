import IQtAtivos from '../interface/qtAtivos';
import connection from './connection';
// import Investiment from '../interface/Investiment';

const getAll = async () => {
  const [rows] = await connection.execute('SELECT * FROM XpIncSchema.investimento');
  console.log(rows, 'model');
  return rows;
};

const quantityAssets = async (codCliente: number, codAtivo: number, qtAtivo: number) => {
  const [rows] = await connection.execute(
    'SELECT qtAtivo FROM XpIncSchema.investimento WHERE codCliente=? AND codAtivo=?',
    [codCliente, codAtivo],
  );
  const quantidade = rows as IQtAtivos[];

  return quantidade;

  //   const [rowsInsert] = await connection.execute(
  //     'INSERT INTO XpIncSchema.cliente_ativos (codCliente, codAtivo, qtAtivo) VALUES(?, ?, ?)',
  //     [codCliente, codAtivo, qtAtivos - qtAtivo],
  //   );

//   return rowsInsert;
};
export default {
  getAll,
  quantityAssets,
};
