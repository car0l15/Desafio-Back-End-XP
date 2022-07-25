import connection from './connection';
import Ilogin from '../interface/Ilogin';

const login = async (body: Ilogin) => {
  const [rows] = await connection.execute(`
  SELECT * FROM clientes
  WHERE email=? AND senha=?`, [body.email, body.senha]);

  const result = rows as Ilogin[];

  return result;
};

export default { login };
