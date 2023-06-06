import { Request, Response } from 'express';

import orderService from '../services/order.service';

async function list(_req: Request, res: Response) {
  const products = await orderService.list();
  
  res.status(200).json(products.message);
}

async function create(req: Request, res: Response) {
  const orders = await orderService.create(req.body);
  res.status(201).json(orders.message);
}

export default {
  list,
  create,
};
