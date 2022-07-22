import { NextFunction, Request, Response } from 'express';
import investimentService from '../service/vender.investiment';

const quantidadeVendas = async (req: Request, res: Response, next: NextFunction) => {
  const { codCliente, codAtivo, qtAtivo } = req.body;

  const result = await investimentService.quantityAssets(codCliente, codAtivo, qtAtivo);

  const msg = 'você não possui quantidade de ativos suficiente para completar esta venda';

  const msg2 = 'erro ao passar o código da conta do cliente ou código do ativo';

  if (result === 'error do código do ativou ou cliente') {
    return res.status(404).json({ mensage: msg2 });
  }

  if (result === 'quantidade excedida') {
    return res.status(404).json({ mensage: msg });
  }

  return next();
};

export default quantidadeVendas;
