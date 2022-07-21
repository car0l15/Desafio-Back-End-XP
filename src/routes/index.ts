import { Router } from 'express';
import comprarInvestimentController from '../controller/comprar.investiment';

const routers = Router();

routers.use('/investimentos', comprarInvestimentController);

export default routers;
