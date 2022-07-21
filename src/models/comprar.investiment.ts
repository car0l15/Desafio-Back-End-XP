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
  if (qtAtivo > quantidade) {
    return 'quantidade indisponível';
  }

  return 'quantidade suficiente';
};

const buyAtivos = async (Investimento: Investiment) => {
  const [rows] = await connection.execute(`
 INSERT INTO XpIncSchema.investimento (codCliente, codAtivo, qtAtivo) VALUES (?,?,?)
 `, [Investimento.codCliente, Investimento.codAtivo, Investimento.qtAtivo]);
  return rows;
};

export default { getAll, verifyQuantity, buyAtivos };
