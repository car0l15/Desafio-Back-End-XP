import IConta from '../interface/conta';
import contaModel from '../models/conta.model';

const deposito = (codCliente: number, valor: number) => {
  contaModel.deposito(codCliente, valor);
  return {
    codCliente,
    valor,
  };
};

const saldoSaque = async (codCliente:number, valor: number) => {
  const saldo = await contaModel.saldoSaque(codCliente);

  if (saldo.length < 1) {
    return 'código do cliente incorreto';
  }

  const saldoCliente = saldo[0].saldo;

  if (valor > saldoCliente) {
    return 'saldo insuficiente';
  }

  return {
    codCliente,
    valor,
  };
};

const saque = async (codCliente: number, valor: number) => {
  const saldoCliente = await contaModel.saldoSaque(codCliente);

  const saldoFinal = saldoCliente[0].saldo - valor;

  const insert = await contaModel.saque(codCliente, saldoFinal);

  return insert;
};

const getContaById = async (id: number) => {
  const conta = await contaModel.getContaById(id);
  const contaAtualizada = conta as IConta[];
  return contaAtualizada;
};

export default { deposito, saldoSaque, saque, getContaById };
