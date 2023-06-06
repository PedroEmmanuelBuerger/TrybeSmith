import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

import createMocks from '../../mocks/createMocks';

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('verifica se é retornado o objeto criado', async function () {

    const httpRequestBody = createMocks.createObject;
    const mockFindOneReturn = ProductModel.build(createMocks.createObject);
    sinon.stub(ProductModel, 'create').resolves(mockFindOneReturn);

    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

    expect(httpResponse.status).to.equal(201);
    expect(httpResponse.body).to.be.deep.equal(createMocks.returnObj);
});
});
