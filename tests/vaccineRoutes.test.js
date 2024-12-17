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

  it('should return an array of vaccines', async () => {
    const res = await request.get('/vaccines');

    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
    expect(res.body.length).to.equal(1);
  })

  it('should return a vaccine', async () => {
    const vaccine = await request.post('/vaccines').send({
        name: 'SPL.45'
    });

    const res = await request.get(`/vaccines/vaccine/${vaccine.body.id}`);

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('id', vaccine.body.id);
    expect(res.body.name).to.equal('SPL.45');
  })

  it('should delete a vaccine', async () => {
    const vaccine = await request.post('/vaccines').send({
      name: 'SPL39',
    });

    const res = await request.delete(`/vaccines/vaccine/${vaccine.body.id}`);
    expect(res.status).to.equal(204);

    const findRes = await request.get(`/vaccines/${vaccine.body.id}`);
    expect(findRes.status).to.equal(404);
  });
})