import Investiment from '../interface/Investiment';
import comprarInvestimentModel from '../models/comprar.investiment';

const getAll = async () => {
  const getAtivos = comprarInvestimentModel.getAll();
  return getAtivos;
};

const verifyQuantity = async (codAtivo: number, qtAtivo: number) => {
  const quantidade = await comprarInvestimentModel.verifyQuantity(codAtivo, qtAtivo);

  if (qtAtivo > quantidade) {
    return 'quantidade indisponível';
  }
  return quantidade;
};

const buyAssets = async (investimento: Investiment) => {
  await comprarInvestimentModel.buyAssets(investimento);

  return {
    codCliente: investimento.codCliente,
    codAtivo: investimento.codAtivo,
    qtAtivo: investimento.qtAtivo,
  };
};

export default { getAll, verifyQuantity, buyAssets };
