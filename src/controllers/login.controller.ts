import { Request, Response } from 'express';
import loginService from '../services/login.service';

async function login(req: Request, res: Response) {
  const serviceResponse = await loginService.login(req.body);    
  if (serviceResponse.message === 'Username or password invalid') {
    return res.status(401).json({ message: serviceResponse.message });
  }
  res.status(200).json(serviceResponse.message);
}
  
export default {
  login,
};