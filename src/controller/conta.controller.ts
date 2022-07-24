import { Request, Response, Router } from 'express';
import middleware from '../middleware';
import contaService from '../service/conta.service';

const contaController = Router();

contaController.post(
  '/deposito',
  middleware.JoiValidateConta,
  async (req:Request, res: Response) => {
    const { codCliente, valor } = req.body;
    const result = await contaService.deposito(codCliente, valor);
    console.log(result, 'controller');
    return res.status(201).json(result);
  },
);

contaController.post(
  '/saque',
  middleware.JoiValidateConta,
  middleware.saldo,
  async (req: Request, res: Response) => {
    const { codCliente, valor } = req.body;
    const result = await contaService.saque(codCliente, valor);
    return res.status(201).json(result);
  },
);

contaController.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await contaService.getContaById(Number(id));
  return res.status(200).json(result[0]);
});

export default contaController;
