// import Investiment from '../interface/Investiment';
import venderInvestiment from '../models/vender.investiment';

const getAllInvestiments = async () => {
  const getAll = await venderInvestiment.getAll();
  console.log(getAll, 'service');
  return getAll;
};

const verify = async (codCliente: number, codAtivo: number, qtAtivo: number) => {
  await venderInvestiment.verifyQuantity(
    codCliente,
    codAtivo,
    qtAtivo,
  );

  return {
    codCliente,
    codAtivo,
    qtAtivo,
  };
};

export default {
  getAllInvestiments,
  verify,
};
