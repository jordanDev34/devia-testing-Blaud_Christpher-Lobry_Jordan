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

  it('should return an array of campaigns', async () => {
    const res = await request.get('/campaigns');

    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
    expect(res.body.length).to.equal(1);
  });

  it('should return a campaign', async () => {
    const campaign = await request.post('/campaigns').send({
      name: 'Grand depistage',
      eventDate: '2024-12-31',
      location: 'Paris'
    });

    const res = await request.get(`/campaigns/campaign/${campaign.body.id}`);

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('id', campaign.body.id);
    expect(res.body.name).to.equal('Grand depistage');
    const formattedEventDate = new Date(res.body.eventDate).toISOString().split('T')[0];
    expect(formattedEventDate).to.equal('2024-12-31');
    expect(res.body.location).to.equal('Paris');
  });

  it('should update a campaign', async () => {
    const campaign = await request.post('/campaigns').send({
      name: 'Moyen depistage',
      eventDate: '2024-02-25',
      location: 'Reims'
    });

    const res = await request.put(`/campaigns/campaign/${campaign.body.id}`).send({
      name: 'Depistage annuel',
      eventDate: '2024-01-30',
      location: 'Bayonne'
    });

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('id', campaign.body.id);
    expect(res.body.name).to.equal('Depistage annuel');
    const formattedEventDate = new Date(res.body.eventDate).toISOString().split('T')[0];
    expect(formattedEventDate).to.equal('2024-01-30');
    expect(res.body.location).to.equal('Bayonne');
  });

  it('should return an error during campaign update if data is invalid', async () => {
    const campaign = await request.post('/campaigns').send({
      name: 'Grand depistage',
      eventDate: '2024-12-31',
      location: 'Paris'
    });


    const res = await request.put(`/campaigns/campaign/${campaign.body.id}`).send({
      name: 'deptistage mensuel', 
      eventDate: '2024-11-30', 
      location: 12345
    });

    expect(res.status).to.equal(400);
    expect(res.body).to.have.property('error');
    expect(res.body.error).to.include('Data is invalid');
  });


  it('should delete a campaign', async () => {
    const campaign = await request.post('/campaigns').send({
      name: 'Petit depistage',
      eventDate: '2024-11-21',
      location: 'Marseille'
    });

    const res = await request.delete(`/campaigns/campaign/${campaign.body.id}`);
    expect(res.status).to.equal(204);

    const findRes = await request.get(`/campaigns/${campaign.body.id}`);
    expect(findRes.status).to.equal(404);
  });
});
