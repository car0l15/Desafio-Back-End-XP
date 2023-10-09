import { NextFunction, Request, Response } from 'express';

import contaService from '../service/conta.service';

const verificaSaque = async (req: Request, res: Response, next: NextFunction) => {
  const { codCliente, valor } = req.body;

  const result = await contaService.saldoSaque(codCliente, valor);

  const msg = 'código da conta incorreto, por favor tente novamente';

  const mensagem = 'saldo insuficiente';

  if (result === 'código do cliente incorreto') {
    return res.status(404).json({ message: msg });
  }

  if (result === 'saldo insuficiente') {
    return res.status(404).json({ message: mensagem });
  }

  return next();
};

export default verificaSaque;
