import { NextFunction, Request, Response } from 'express';
import investimentService from '../service/vender.investiment';

const quantidade = async (req: Request, res: Response, next: NextFunction) => {
  const { codCliente, codAtivo, qtAtivo } = req.body;

  const result = await investimentService.quantityAssets(codCliente, codAtivo, qtAtivo);
};

export default quantidade;
