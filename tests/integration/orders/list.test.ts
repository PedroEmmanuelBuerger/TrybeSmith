import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '../../../src/app';
import OrderModel from '../../../src/database/models/order.model';

import listMocks from '../../mocks/listMocks';

chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });
it('verifica se é retornado a lista com todos os produtos', async function () {
  // const mockAllReturn = OrderModel.build(listMocks.orders[0]);

  sinon.stub(OrderModel, 'findAll').resolves([]);
  
  const httpResponse = await chai.request(app).get('/orders');
  
  expect(httpResponse.status).to.equal(200);
 });
});
