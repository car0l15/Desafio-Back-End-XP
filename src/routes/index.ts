import { Router } from 'express';
import comprarInvestimentController from '../controller/comprar.investiment';
import venderInvestimentController from '../controller/vender.investiment';

const routers = Router();

routers.use('/investimentos', comprarInvestimentController);

routers.use('/investimentos', venderInvestimentController);

export default routers;
