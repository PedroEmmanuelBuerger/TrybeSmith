import { Request, Response } from 'express';

import productService from '../services/product.service';

async function create(req: Request, res: Response) {
  const serviceResponse = await productService.create(req.body);
  const product = serviceResponse.message;
  
  res.status(201).json(product);
}

export default {
  create,
};