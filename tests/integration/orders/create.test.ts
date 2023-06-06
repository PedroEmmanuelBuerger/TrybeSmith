import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import app from '../../../src/app';

import OrderModel from '../../../src/database/models/order.model';
import ProductModel from '../../../src/database/models/product.model';
import UserModel from '../../../src/database/models/user.model';

import listMocks from '../../mocks/listMocks';
import createMocks from '../../mocks/createMocks';
import userMocks from '../../mocks/userMocks';

chai.use(chaiHttp);

describe('POST /orders', function () { 
  beforeEach(function () { sinon.restore(); });
  it('verifica se é retornado a lista com todos os produtos', async function () {
    const mockAllReturn = OrderModel.build(listMocks.newOrd[0]);
    const mockUser = UserModel.build(userMocks.user);
    sinon.stub(UserModel, 'findOne').resolves(mockUser);
    sinon.stub(OrderModel, 'create').resolves(mockAllReturn);
    sinon.stub(ProductModel, 'update').resolves([1]);
    sinon.stub(bcrypt, 'compareSync').returns(true);
    sinon.stub(jwt, 'verify').resolves();
     const httpRequestBody = createMocks.httpCreate;
    
     const httpResponse = await chai.request(app).post('/orders').send(httpRequestBody).set('Authorization', '123456');
    
     expect(httpResponse.status).to.equal(201);
     expect(httpResponse.body).to.be.deep.equal(createMocks.returnOrder);
   });
});
