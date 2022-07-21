import Investiment from '../interface/Investiment';
import comprarInvestimentModel from '../models/comprar.investiment';

const getAll = async () => {
  const getAtivos = comprarInvestimentModel.getAll();
  return getAtivos;
};

const verifyQuantity = async (codAtivo: number, qtAtivo: number) => {
  const verify = await comprarInvestimentModel.verifyQuantity(codAtivo, qtAtivo);
  return verify;
};

const buyAtivos = async (investimento: Investiment) => {
  await comprarInvestimentModel.buyAtivos(investimento);

  return {
    codCliente: investimento.codCliente,
    codAtivo: investimento.codAtivo,
    qtAtivo: investimento.qtAtivo,
  };
};

export default { getAll, verifyQuantity, buyAtivos };
