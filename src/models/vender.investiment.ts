import connection from './connection';
import Investiment from '../interface/Investiment';

const getAll = async () => {
  const [rows] = await connection.execute('SELECT * FROM XpIncSchema.investimento');
  console.log(rows, 'model');
  return rows;
};

const verifyQuantity = async (codCliente: number, codAtivo:number, qtAtivo: number) => {
  const [rows] = await connection.execute(`
   SELECT qtAtivo FROM XpIncSchema.investimento WHERE codCliente=? AND codAtivo=?
   `, [codCliente, codAtivo]);
  const verify = rows as Investiment[];
  console.log(verify[0].qtAtivo, 'model');

  console.log(qtAtivo, 'body model');
};

//   const quantidade = qtdAtivosTable[0].qtAtivo;
//   if (qtAtivo > quantidade) {
//     return 'quantidade indisponível';
//   }

//   return 'quantidade suficiente';
// };

export default {
  getAll,
  verifyQuantity,
};
