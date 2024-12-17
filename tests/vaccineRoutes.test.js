const chai = require('chai');
const chaiHttp = require('chai-http');
const supertest = require('supertest');
const app = require('../app');
const sequelize = require('../config/db');

const { expect } = chai;
const request = supertest(app);

chai.use(chaiHttp);

describe('Vaccine routes', () => {
  before(async () => {
    await sequelize.sync({ force: true }); 
  });

  it('should create a new vaccin', async () => {
    const res = await request.post('/vaccines').send({
        name: 'SPL.45'
    });

    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('id');
    expect(res.body.name).to.equal('SPL.45');
  });
})