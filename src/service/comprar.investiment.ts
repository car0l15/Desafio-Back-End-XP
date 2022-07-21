import comprarInvestiment from '../models/comprar.investiment';

const getAll = async () => {
  const getAtivos = comprarInvestiment.getAll();
  return getAtivos;
};

const verifyQuantity = async (codAtivo: number, qtAtivo: number) => {
  const verify = await comprarInvestiment.verifyQuantity(codAtivo, qtAtivo);
  return verify;
};

export default { getAll, verifyQuantity };
