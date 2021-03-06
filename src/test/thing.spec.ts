
process.env.NODE_ENV = 'testing';

const chai = require('chai');
const chaiHttp = require('chai-http');

import httpServer from '../';

const expect = chai.expect;
chai.use(chaiHttp);

describe('Api Author', function (): void {

    it('should be able to create user', (done: Function): void => {
        chai.request(httpServer)
            .post('/api/author')
            .set('content-type', 'application/json')
            .send({
                name: 'Someone',
                description: '...'
            })
            .end((err: Error, res: any): void => {
                expect(res.statusCode).to.be.equal(200);
                expect(res.body.name).to.be.equal('Someone');
                done();
            });
    });

    it('should be able to get users', (done: Function): void => {
        chai.request(httpServer)
            .get('/api/author')
            .end((err: Error, res: any): void => {
                expect(res.statusCode).to.be.equal(200);
                expect(res.body.length).to.be.equal(3);
                done();
            });
    });
});
