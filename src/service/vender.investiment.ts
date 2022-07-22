// import Investiment from '../interface/Investiment';
import venderInvestiment from '../models/vender.investiment';

const getAllInvestiments = async () => {
  const getAll = await venderInvestiment.getAll();
  console.log(getAll, 'service');
  return getAll;
};

const quantityAssets = async (codCliente: number, codAtivo:number, qtAtivo: number) => {
  const quantidade = await venderInvestiment.quantityAssets(codCliente, codAtivo, qtAtivo);
  if (quantidade.length < 1) {
    throw new Error('error ao passar o código da conta do cliente ou do ativo');
  }

  const qtAtivos = quantidade[0].qtAtivo;

  if (qtAtivo > qtAtivos) {
    throw new Error('quantidade excedida');
  }

  return {
    codCliente,
    codAtivo,
    qtAtivo,
  };
};

export default {
  getAllInvestiments,
  quantityAssets,
};
