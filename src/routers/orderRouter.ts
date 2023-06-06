import { Router } from 'express';

import orderController from '../controllers/order.controller';

import authMiddleware from '../middlewares/tokenMiddle';

import orderMiddle from '../middlewares/orderMiddle';

const orderRouter = Router();

orderRouter.get('/', orderController.list);

orderRouter.post(
  '/',
  authMiddleware,
  orderMiddle.userMiddle,
  orderMiddle.productMiddle,
  orderController.create,
);

export default orderRouter;
