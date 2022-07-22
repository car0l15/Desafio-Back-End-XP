import ativosModel from '../models/ativos.model';

const getClientByid = async (id:number) => {
  const result = await ativosModel.getClientById(id);
  return result;
};

const getAssetsById = async (id:number) => {
  const result = await ativosModel.getAssetsById(id);
  return result;
};

export default {
  getClientByid,
  getAssetsById,
};
