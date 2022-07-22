import connection from './connection';
// import Investiment from '../interface/Investiment';

const getAll = async () => {
  const [rows] = await connection.execute('SELECT * FROM XpIncSchema.investimento');
  console.log(rows, 'model');
  return rows;
};

export default {
  getAll,
};
