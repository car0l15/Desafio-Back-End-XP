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
    return 'error do código do ativou ou cliente';
  }

  const qtAtivos = quantidade[0].qtAtivo;

  if (qtAtivo > qtAtivos) {
    return 'quantidade excedida';
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
