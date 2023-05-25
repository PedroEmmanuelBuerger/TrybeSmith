import { Request, Response } from 'express';

import orderService from '../services/order.service';

async function list(_req: Request, res: Response) {
  const products = await orderService.list();
  
  res.status(200).json(products.message);
}

export default {
  list,
};
