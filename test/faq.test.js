const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');

chai.use(chaiHttp);
const { expect } = chai;

describe('FAQ API Tests', () => {
    it('should fetch FAQs', (done) => {
        chai.request(app)
            .get('/api/faqs?lang=hi')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                done();
            });
    });

    it('should create an FAQ', (done) => {
        chai.request(app)
            .post('/api/faqs')
            .send({ question: 'Test Question?', answer: 'Test Answer' })
            .end((err, res) => {
                expect(res).to.have.status(201);
                expect(res.body).to.be.an('object');
                done();
            });
    });
});
