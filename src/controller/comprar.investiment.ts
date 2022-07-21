import { Request, Response, Router } from 'express';
import comprarInvestiment from '../service/comprar.investiment';

const comprarInvestimentController = Router();

comprarInvestimentController.get(
  '/comprar',
  async (req: Request, res: Response): Promise<Response> => {
    const result = await comprarInvestiment.getAll();
    return res.status(200).json(result);
  },
);

export default comprarInvestimentController;
