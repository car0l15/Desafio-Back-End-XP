import { NextFunction, Request, Response } from 'express';
import loginService from '../service/login.service';

const validaEmailESenha = async (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;

  const regex = /\S+@\S+\.\S+/;
  const regexEmail = regex.test(email);

  if (!regexEmail) {
    return res.status(400).json({ message: '"email" não está em um formato válido' });
  }

  const verify = await loginService.login(req.body);

  if (verify === 'não autorizado') {
    return res.status(401).json({ message: 'login incorreto, tente novamente' });
  }

  next();
};

export default validaEmailESenha;
