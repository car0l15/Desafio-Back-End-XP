import { Request, Response, Router } from 'express';
import ativosService from '../service/ativos.service';

const ativosController = Router();

ativosController.get('/cliente/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ativosService.getClientByid(Number(id));
  return res.status(200).json(result);
});

ativosController.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ativosService.getAssetsById(Number(id));
  return res.status(200).json(result);
});

export default ativosController;
