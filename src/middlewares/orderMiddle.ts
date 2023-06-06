import { NextFunction, Request, Response } from 'express';
import UserModel from '../database/models/user.model';

async function userMiddle(req: Request, _res: Response, next: NextFunction) {
  const { userId } = req.body;
  if (!userId) {
    return next({ status: 400, message: '"userId" is required' });
  }
  if (typeof userId !== 'number') {
    return next({ status: 422, message: '"userId" must be a number' });
  }
  const user = await UserModel.findOne({ where: { id: userId } });
  console.log(user);
  if (!user) return next({ status: 404, message: '"userId" not found' });
  next();
}

async function productMiddle(req: Request, _res: Response, next: NextFunction) {
  const { productIds } = req.body;
  if (!productIds) {
    return next({ status: 400, message: '"productIds" is required' });
  }
  if (!Array.isArray(productIds)) {
    return next({ status: 422, message: '"productIds" must be an array' });
  }
  if (productIds.length <= 0) {
    return next({ status: 422, message: '"productIds" must include only numbers' });
  }
  next();
}
export default {
  userMiddle,
  productMiddle,
};