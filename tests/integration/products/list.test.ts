import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';

import listMocks from '../../mocks/listMocks';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('verifica se é retornado a lista com todos os produtos', async function () {
    const models = listMocks.products.map(item => ProductModel.build(item));
    sinon.stub(ProductModel, 'findAll').resolves(models);

    const httpResponse = await chai.request(app)
        .get('/products')

    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.be.deep.equal(listMocks.products);
});
});
