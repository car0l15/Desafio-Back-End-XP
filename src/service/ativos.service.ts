// import httpErrorMiddleware from '../middleware/errorHandler';
import ativosModel from '../models/ativos.model';

const getClientByid = async (id:number) => {
  const result = await ativosModel.getClientById(id);
  return result;
};

const getAssetsById = async (id:number) => {
  const result = await ativosModel.getAssetsById(id);
  if (result.length === 0) {
    return 'vazio';
  }
  return result;
};

export default {
  getClientByid,
  getAssetsById,
};
