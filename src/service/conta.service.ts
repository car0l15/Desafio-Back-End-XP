import contaModel from '../models/conta.model';

const deposito = (codCliente: number, valor: number) => {
  contaModel.deposito(codCliente, valor);
  return {
    codCliente,
    valor,
  };
};

export default { deposito };
