import { NextFunction, Request, Response } from 'express';
import investimentService from '../service/vender.investiment';

const quantidadeVendas = async (req: Request, res: Response, next: NextFunction) => {
  const { codCliente, codAtivo, qtAtivo } = req.body;

  const result = await investimentService.quantityAssets(codCliente, codAtivo, qtAtivo);

  const msg = 'você não possui quantidade de ativos suficiente para completar esta venda';

  const mensagem = 'erro ao passar o código da conta ou código do ativo';

  if (result === 'error do código do ativou ou cliente') {
    return res.status(404).json({ mensage: mensagem });
  }

  if (result === 'quantidade excedida') {
    return res.status(404).json({ mensage: msg });
  }

  return next();
};

export default quantidadeVendas;
