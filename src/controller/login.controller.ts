import { Request, Response, Router } from 'express';
import middleware from '../middleware';
import loginService from '../service/login.service';
// import middleware from '../middleware';

const loginController = Router();

loginController.post(
  '/',
  middleware.loginValidate,
  async (req: Request, res: Response) => {
    const result = await loginService.login(req.body);
    console.log('result contro', result);
    return res.status(200).json({ token: result });
  },
);

export default loginController;
