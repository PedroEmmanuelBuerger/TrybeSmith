import { NextFunction, Request, Response } from 'express';

async function loginMiddle(req: Request, _res: Response, next: NextFunction) {
  const { username, password } = req.body;
  if (!username || !password) {
    return next({ status: 400, message: '"username" and "password" are required' });
  }
  next();
}

export default loginMiddle;