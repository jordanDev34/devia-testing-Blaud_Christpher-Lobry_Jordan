const chai = require('chai');
const chaiHttp = require('chai-http');
const supertest = require('supertest');
const app = require('../app');
const sequelize = require('../config/db');

const { expect } = chai;
const request = supertest(app);

chai.use(chaiHttp);

describe('Campaign routes', () => {
  before(async () => {
    await sequelize.sync({ force: true });
  });

  it('should create a new campaign', async () => {
    const res = await request.post('/campaigns').send({
      name: 'Grand depistage',
      eventDate: '2024-12-31',
      location: 'Paris'
    });

    expect(res.status).to.equal(201);

    expect(res.body).to.have.property('id');
    expect(res.body.name).to.equal('Grand depistage');

    const formattedEventDate = new Date(res.body.eventDate).toISOString().split('T')[0];

    expect(formattedEventDate).to.equal('2024-12-31');

    expect(res.body.location).to.equal('Paris');
  });
});
