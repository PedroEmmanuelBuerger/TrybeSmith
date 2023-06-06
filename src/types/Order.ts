export type Order = {
  id: number;
  userId: number;
  productIds?: OrderObj[];
};

type OrderObj = {
  id: number,
  name: string,
  price: string,
  orderId: number,
};

export type OrderEx = {
  id: number;
  userId: number;
  productIds: OrderObj[];
};

export type OrderReturn = {
  id: number;
  userId: number;
  productIds: number[];
};

export type OrderRequest = {
  productIds: number[],
  userId: number
};