import { Router } from 'express';
import comprarInvestimentController from '../controller/comprar.investiment';
import venderInvestimentController from '../controller/vender.investiment';
import ativosController from '../controller/ativos.controller';
import contaController from '../controller/conta.controller';

const routers = Router();

routers.use('/investimentos', comprarInvestimentController);

routers.use('/investimentos', venderInvestimentController);

routers.use('/ativos', ativosController);

routers.use('/conta', contaController);

export default routers;

// mid para saber se o codCliente existe
