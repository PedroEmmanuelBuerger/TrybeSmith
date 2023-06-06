import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '../../../src/app';
import UserModel from '../../../src/database/models/user.model';

import userMocks  from '../../mocks/userMocks';

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });
  it('verifica se é possivel logar', async function () {
  
    const httpRequestBody = userMocks.userLogin;
    const mockFindOneReturn = UserModel.build(userMocks.user);
    sinon.stub(UserModel, 'findOne').resolves(mockFindOneReturn);
    
    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);
    
    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.have.key('token');
   });
});
