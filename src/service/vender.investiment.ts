// import Investiment from '../interface/Investiment';
import venderInvestiment from '../models/vender.investiment';

const getAllInvestiments = async () => {
  const getAll = await venderInvestiment.getAll();
  console.log(getAll, 'service');
  return getAll;
};

const quantityAssets = async (codCliente: number, codAtivo:number, qtAtivo: number) => {
  const t = await venderInvestiment.quantityAssets(codCliente, codAtivo, qtAtivo);
  return t;
};

export default {
  getAllInvestiments,
  quantityAssets,
};
