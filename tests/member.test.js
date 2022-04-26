const supertest = require('supertest');
const app = require('../app');
const db = require('../models');

const api = supertest(app);

let token;

beforeAll((done) => {
    request(api)
      .post('/auth/login')
      .send({
        username: 'Usuario',
        password: '1234',
      })
      .end((err, response) => {
          token = response.body.token;
          console.log(token);  
        done();
      });
});

describe('members endpoint', () => {

    test('can get all the members', async () => {
        const response = await api.get('/members').expect(200);
    })
});