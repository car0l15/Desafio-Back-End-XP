import connection from './connection';

const getClientById = async (codCliente:number) => {
  const [rows] = await connection.execute(`
       SELECT ca.codCliente, ca.codAtivo, ca.qtAtivo, a.valor FROM XpIncSchema.ativos  AS a
        INNER join XpIncSchema.cliente_ativos AS ca
        ON ca.codAtivo = a.codAtivo
        WHERE ca.codCliente=?`, [codCliente]);
  return rows;
};

const getAssetsById = async (codAtivo: number) => {
  const [rows] = await connection.execute(`
    SELECT * FROM XpIncSchema.ativos WHERE codAtivo=? 
    `, [codAtivo]);
  return rows;
};

export default {
  getClientById,
  getAssetsById,
};
