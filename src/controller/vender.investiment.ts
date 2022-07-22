import { Request, Response, Router } from 'express';
import venderInvestiment from '../service/vender.investiment';

const venderInvestimentController = Router();

venderInvestimentController.get('/vender', async (req: Request, res: Response) => {
  const result = await venderInvestiment.getAllInvestiments();
  console.log(result, 'controller');
  return res.status(200).json(result);
});

venderInvestimentController.post('/vender', async (req: Request, res: Response) => {
  const { codCliente, codAtivo, qtAtivo } = req.body;
  const result = await venderInvestiment.quantityAssets(codCliente, codAtivo, qtAtivo);
  return res.status(201).json(result);
});

export default venderInvestimentController;
