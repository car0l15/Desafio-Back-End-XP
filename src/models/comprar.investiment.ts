import Investiment from '../interface/Investiment';
import connection from './connection';

const getAll = async () => {
  const [rows] = await connection.execute('SELECT * FROM ativos');

  return rows;
};

const verifyQuantity = async (codAtivo: number, qtAtivo: number) => {
  const [rows] = await connection.execute(
    'SELECT qtAtivo FROM ativos WHERE codAtivo=?',
    [codAtivo],
  );
  const qtdAtivosTable = rows as Investiment[];

  const quantidade = qtdAtivosTable[0].qtAtivo;

  return quantidade;
};

const buyAssets = async (Investimento: Investiment) => {
  const [rows] = await connection.execute(`
 INSERT INTO cliente_ativos (codCliente, codAtivo, qtAtivo) VALUES (?,?,?)
 `, [Investimento.codCliente, Investimento.codAtivo, Investimento.qtAtivo]);
  return rows;
};

export default { getAll, verifyQuantity, buyAssets };
