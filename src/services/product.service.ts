import ProductModel, {
  ProductInputtableTypes,
} from '../database/models/product.model';

import { NewProduct } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

async function create( 
  product: ProductInputtableTypes,
) : Promise<ServiceResponse<NewProduct>> {
  const actualProduct = await ProductModel
    .create({ name: product.name, orderId: product.orderId, price: product.price });
    
  const { name, id, price } = actualProduct.dataValues;
  const newProduct = { id, name, price };
  return {
    type: 'SUCCESSFUL', 
    message: newProduct,  
  };
}

export default {
  create,
};
