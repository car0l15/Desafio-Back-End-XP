import { NextFunction, Request, Response } from 'express';
import investimentService from '../service/comprar.investiment';

const quantidade = async (req: Request, res: Response, next: NextFunction) => {
  const { codAtivo, qtAtivo } = req.body;
  const message = await investimentService.verifyQuantity(codAtivo, qtAtivo);

  const msg = 'a quantidade de ações requeridas é maior que a disponível na carteira';

  if (String(message) === 'quantidade indisponível') {
    return res.status(404).json({ message: msg });
  }

  return next();
};

export default quantidade;
