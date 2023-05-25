// import ProductModel from '../database/models/product.model';
import OrderModel, {
} from '../database/models/order.model';

import { ServiceResponse } from '../types/ServiceResponse';

import { OrderEx, OrderReturn } from '../types/Order';

async function list(): Promise<ServiceResponse<OrderReturn[]>> {
  const orders = await OrderModel.findAll({
    include: 'productIds',
  });

  const newOrd = orders.map((order) => order.dataValues) as OrderEx[];

  const transformedOrders = newOrd.map((order) => ({
    id: order.id,
    userId: order.userId,
    productIds: order.productIds.map((id) => id.id),
  }));

  return { type: 'SUCCESSFUL', message: transformedOrders };
}

export default {
  list,
};
