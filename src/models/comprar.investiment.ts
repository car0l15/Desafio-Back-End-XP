import Investiment from '../interface/Investiment';
import connection from './connection';

const getAll = async () => {
  const [rows] = await connection.execute('SELECT * FROM XpIncSchema.ativos');
  console.log(rows, 'model');
  return rows;
};

const verifyQuantity = async (codAtivo: number, qtAtivo: number) => {
  const [rows] = await connection.execute(
    'SELECT qtAtivo FROM XpIncSchema.ativos WHERE codAtivo=?',
    [codAtivo],
  );
  const qtdAtivosTable = rows as Investiment[];

  const quantidade = qtdAtivosTable[0].qtAtivo;

  console.log(qtAtivo, quantidade, 'model');

  return quantidade;
};

// fazer uma função para verificar o codCliente

const buyAssets = async (Investimento: Investiment) => {
  const [rows] = await connection.execute(`
 INSERT INTO XpIncSchema.cliente_ativos (codCliente, codAtivo, qtAtivo) VALUES (?,?,?)
 `, [Investimento.codCliente, Investimento.codAtivo, Investimento.qtAtivo]);
  return rows;
};

export default { getAll, verifyQuantity, buyAssets };
