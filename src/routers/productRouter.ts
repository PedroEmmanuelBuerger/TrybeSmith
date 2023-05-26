import { Router } from 'express';
import productController from '../controllers/product.controller';
import productMiddle from '../middlewares/productMiddle';

const productRouter = Router();

productRouter.post(
  '/',
  productMiddle.nameMiddle,
  productMiddle.priceMiddle,
  productController.create,
);

productRouter.get('/', productController.list);

export default productRouter;
