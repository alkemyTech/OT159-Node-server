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
    const response = await api.get('/members')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);
    const activeMembers = response.body.data.length;
    const member1 = response.body.data[0];
    expect(activeMembers).toEqual(2);
    expect(member1.name).toBe('Member1');
  })

  test('error 403 if Bearer token its not provided', async () => {
    const response = await api.get('/members').expect(403);
    const message = response.text;
    expect(message).toBe("{\"msg\":\"Token must be provided\"}")
  })
  
  test('can delete a member by id', async () => {
    const getMembers = await api.get('/members')
        .set('Authorization', `Bearer ${token}`)
      .expect(200);
    const activeMembers = getMembers.body.data.length;
    expect(activeMembers).toEqual(2);
    const id = getMembers.body.data[1].id;
    const response = await api.delete(`/members/${id}`)
        .set('Authorization', `Bearer ${token}`)
      .expect(200);
    expect(response.body.msg).toBe('Member deleted successfully')
  })

  test(`error 404 if member to delete doesn't exist`, async () => {
    const response = await api.delete(`/members/99`)
        .set('Authorization', `Bearer ${token}`)
      .expect(404);
    expect(response.body.message).toBe('Member not found');
  })
});