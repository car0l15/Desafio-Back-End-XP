import { Request, Response, Router } from 'express';
import middleware from '../middleware';
import venderInvestiment from '../service/vender.investiment';

const venderInvestimentController = Router();

venderInvestimentController.get('/vender', async (req: Request, res: Response) => {
  const result = await venderInvestiment.getAllInvestiments();
  console.log(result, 'controller');
  return res.status(200).json(result);
});

venderInvestimentController.post(
  '/vender',
  middleware.JoiInvestimento,
  middleware.quantidadeVendas,
  async (req: Request, res: Response) => {
    const { codCliente, codAtivo, qtAtivo } = req.body;
    const result = await venderInvestiment.insertAssets(codCliente, codAtivo, qtAtivo);
    console.log(result, 'aqui controller');
    return res.status(201).json(result);
  },
);

export default venderInvestimentController;
