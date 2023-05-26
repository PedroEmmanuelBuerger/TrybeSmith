import express, { NextFunction, Request, Response } from 'express';

import productRouter from './routers/productRouter';
import orderRouter from './routers/orderRouter';
import loginRouter from './routers/loginRouter';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/orders', orderRouter);
app.use('/login', loginRouter);

interface CustomError extends Error {
  status?: number;
}
  
app.use((error: CustomError, _req: Request, res: Response, _next: NextFunction) => {
  const status = error.status || 500;
  res.status(status).json({ message: error.message });
});

export default app;
