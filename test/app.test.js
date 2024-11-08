import chai from 'chai';
import chaiHttp from 'chai-http';
import { expect } from 'chai';
import app from '../app.mjs';

chai.use(chaiHttp);

describe('GET /', () => {
  it('should return status 200 and HTML content', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.html;
        done();
      });
  });
});
