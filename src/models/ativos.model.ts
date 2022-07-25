import IAtivo from '../interface/IAtivo';
import IClienteAtivo from '../interface/IClienteAtivo';
import connection from './connection';

const getClientById = async (codCliente:number) => {
  const [rows] = await connection.execute(`
       SELECT ca.codCliente, ca.codAtivo, ca.qtAtivo, a.valor FROM ativos  AS a
        INNER join cliente_ativos AS ca
        ON ca.codAtivo = a.codAtivo
        WHERE ca.codCliente=?`, [codCliente]);

  const rowsType = rows as IClienteAtivo[];

  return rowsType;
};

const getAssetsById = async (codAtivo: number) => {
  const [rows] = await connection.execute(`
    SELECT * FROM ativos WHERE codAtivo=? 
    `, [codAtivo]);
  const rowsType = rows as IAtivo[];

  return rowsType;
};

export default {
  getClientById,
  getAssetsById,
};
