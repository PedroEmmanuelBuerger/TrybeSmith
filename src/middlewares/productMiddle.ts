import { NextFunction, Request, Response } from 'express';

async function nameMiddle(req: Request, _res: Response, next: NextFunction) {
  const { name } = req.body;
  if (!name) {
    return next({ status: 400, message: '"name" is required' });
  }
  if (typeof name !== 'string') {
    return next({ status: 422, message: '"name" must be a string' });
  }
  if (name.length <= 2) {
    return next({ status: 422, message: '"name" length must be at least 3 characters long' });
  }
  next();
}

async function priceMiddle(req: Request, _res: Response, next: NextFunction) {
  const { price } = req.body;
  if (!price) {
    return next({ status: 400, message: '"price" is required' });
  }
  if (typeof price !== 'string') {
    return next({ status: 422, message: '"price" must be a string' });
  }
  if (price.length <= 2) {
    return next({ status: 422, message: '"price" length must be at least 3 characters long' });
  }
  next();
}
  
export default {
  nameMiddle,
  priceMiddle,
};