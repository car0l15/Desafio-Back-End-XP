import { sign, SignOptions, verify } from 'jsonwebtoken';
import dotenv from 'dotenv';
import Ilogin from '../interface/Ilogin';

dotenv.config();

const secret = process.env.JWT_SECRET || 'segredo';

const jwtconfig: SignOptions = { algorithm: 'HS256' };

const generationToken = (payload: Ilogin): string => sign(payload, secret, jwtconfig);

const authenticateToken = (token: string) => verify(token, secret);

export { generationToken, authenticateToken };
