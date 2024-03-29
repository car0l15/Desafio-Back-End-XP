import IQtAtivos from '../interface/qtAtivos';
import connection from './connection';

const getAll = async () => {
  const [rows] = await connection.execute('SELECT * FROM cliente_ativos');
 
  return rows;
};

const quantityAssets = async (codCliente: number, codAtivo: number) => {
  const [rows] = await connection.execute(
    `SELECT qtAtivo FROM cliente_ativos WHERE codCliente=? AND codAtivo=? 
`,
    [codCliente, codAtivo],
  );
  const quantidade = rows as IQtAtivos[];

  return quantidade;
};

const insertAssets = async (codCliente: number, codAtivo: number, qtAtivos: number) => {
  const [rowsInsert] = await connection.execute(
    'INSERT INTO cliente_ativos (codCliente, codAtivo, qtAtivo) VALUES(?, ?, ?)',
    [codCliente, codAtivo, qtAtivos],
  );

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
