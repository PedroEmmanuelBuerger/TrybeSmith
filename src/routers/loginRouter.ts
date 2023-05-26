import { Router } from 'express';

import loginController from '../controllers/login.controller';

import loginMiddle from '../middlewares/loginMiddle';

const loginRouter = Router();

loginRouter.post('/', loginMiddle, loginController.login);

export default loginRouter;
