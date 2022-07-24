import Ilogin from '../interface/Ilogin';
import loginModels from '../models/login.models';
import { generationToken } from '../Utils/JWTToken';

const login = async (body: Ilogin) => {
  const log = await loginModels.login(body);

  if (log.length < 1) {
    return 'não autorizado';
  }

  const token = generationToken(body);
  console.log(token);
  return token;
};

export default { login };
