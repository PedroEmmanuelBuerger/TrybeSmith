import { Request, Response } from 'express';

import productService from '../services/product.service';

async function create(req: Request, res: Response) {
  const serviceResponse = await productService.create(req.body);
  const product = serviceResponse.message;
  
  res.status(201).json(product);
}

async function list(_req: Request, res: Response) {
  const products = await productService.list();
  
  res.status(200).json(products.message);
}

export default {
  create,
  list,
};