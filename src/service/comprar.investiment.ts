import comprarInvestiment from '../models/comprar.investiment';

const getAll = async () => {
  const getAtivos = comprarInvestiment.getAll();
  return getAtivos;
};

export default { getAll };
