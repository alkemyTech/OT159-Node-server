const supertest = require('supertest');
const app = require('../app');

const api = supertest(app);

let token;

beforeEach(async() => {
  
  const response = await api.post('/auth/login')
    .send({
      email: 'test@test.com',
      password: 'Asd123456',
    });
    token = response.body.userToken
});

describe('members endpoint', () => {

    test('can get all the members', async () => {
      await api.get('/members')
        .set('Authorization', `Bearer ${token}`)
        .expect(200);
    })

    test('error 403 if Bearer token its not provided', async () => {
      const response = await api.get('/members').expect(403);
      expect(response.text).toBe("{\"msg\":\"Token must be provided\"}")
    })
});