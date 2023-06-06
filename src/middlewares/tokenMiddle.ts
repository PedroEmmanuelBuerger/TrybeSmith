import { NextFunction, Request, Response } from 'express';
import jwtUtil from '../utils/jwt.util';

async function authMiddleware(req: Request, _res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  if (!authorization) {
    return next({ status: 401, message: 'Token not found' });
  }
  try {
    jwtUtil.verify(authorization);
    return next();
  } catch (e) {
    return next({ status: 401, message: 'Invalid token' });
  }
}

export default authMiddleware;