import { Request, Response, Router } from 'express';
import comprarInvestiment from '../service/comprar.investiment';
import middleware from '../middleware';

const comprarInvestimentController = Router();

comprarInvestimentController.get(
  '/comprar',
  async (req: Request, res: Response): Promise<Response> => {
    const result = await comprarInvestiment.getAll();
    return res.status(200).json(result);
  },
);

comprarInvestimentController.post(
  '/comprar',
  middleware.quantidade,
  async () => {
  },
);

export default comprarInvestimentController;
