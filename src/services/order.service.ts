// import ProductModel from '../database/models/product.model';
import OrderModel, {
} from '../database/models/order.model';

import ProductModel from '../database/models/product.model';

import { ServiceResponse } from '../types/ServiceResponse';

import { OrderEx, OrderReturn, OrderRequest } from '../types/Order';

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

async function create(order: OrderRequest): Promise<ServiceResponse<OrderRequest>> {
  const { userId, productIds } = order;
  productIds.forEach(async (product: number) => {
    const createOrder = await OrderModel.create({ userId });
    const { id } = createOrder.dataValues;
    await ProductModel.update({ orderId: id }, { where: { id: product } });
  });

  return { type: 'SUCCESSFUL', message: order };
}

export default {
  list,
  create,
};
