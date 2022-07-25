import { Request, Response, Router } from 'express';
import ativosService from '../service/ativos.service';

const ativosController = Router();

ativosController.get('/cliente/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ativosService.getClientByid(Number(id));
  if (result.length === 0) {
    return res.status(404).json({ message: 'cliente não encontrado' });
  }
  return res.status(200).json(result);
});

ativosController.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ativosService.getAssetsById(Number(id));
  if (result === 'vazio') {
    return res.status(404).json({ message: 'codAtivo não encontrado' });
  }
  return res.status(200).json(result);
});

export default ativosController;
