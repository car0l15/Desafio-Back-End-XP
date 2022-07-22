// import Investiment from '../interface/Investiment';
import venderInvestiment from '../models/vender.investiment';

const getAllInvestiments = async () => {
  const getAll = await venderInvestiment.getAll();
  console.log(getAll, 'service');
  return getAll;
};

const quantityAssets = async (codCliente: number, codAtivo:number, qtAtivo: number) => {
  const quantidade = await venderInvestiment.quantityAssets(codCliente, codAtivo);
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

const insertAssets = async (codCliente: number, codAtivo: number, qtAtivos: number) => {
  const quantidadeTable = await venderInvestiment.quantityAssets(codCliente, codAtivo);

  const quantidadeFinal = quantidadeTable[0].qtAtivo - qtAtivos;

  const qtInsert = await venderInvestiment.insertAssets(codCliente, codAtivo, quantidadeFinal);

  return qtInsert;

  // return {
  //   codCliente,
  //   codAtivo,
  //   qtAtivo: qtInsert,
  // };
};

export default {
  getAllInvestiments,
  quantityAssets,
  insertAssets,
};
