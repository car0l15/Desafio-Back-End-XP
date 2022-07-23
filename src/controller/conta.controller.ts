import { Request, Response, Router } from 'express';
import middleware from '../middleware';
import contaService from '../service/conta.service';

const contaController = Router();

contaController.post('/deposito', async (req:Request, res: Response) => {
  const { codCliente, valor } = req.body;
  const result = await contaService.deposito(codCliente, valor);
  return res.status(201).json(result);
});

contaController.post(
  '/saque',
  middleware.saldo,
  async (req: Request, res: Response) => {
    const { codCliente, valor } = req.body;
    const result = await contaService.saque(codCliente, valor);
    return res.status(201).json(result);
  },
);

export default contaController;
