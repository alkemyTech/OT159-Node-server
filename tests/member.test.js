const supertest = require('supertest');
const app = require('../app');
const db = require('../models');

const api = supertest(app);

let tokenAdmin;
let tokenStandard;

beforeEach(async() => {
  
  const response = await api.post('/auth/login')
    .send({
      email: 'test@test.com',
      password: 'Asd123456',
    });
  tokenAdmin = response.body.userToken
  
  const response2 = await api.post('/auth/login')
    .send({
      email: 'standard@test.com',
      password: 'Asd123456',
    });
    tokenStandard = response2.body.userToken
});

describe('members endpoint', () => {

  test('can get all the members if user is Admin', async () => {
    const response = await api.get('/members')
      .set('Authorization', `Bearer ${tokenAdmin}`)
      .expect(200);
    const activeMembers = response.body.data.length;
    const member1 = response.body.data[0];
    expect(activeMembers).toEqual(2);
    expect(member1.name).toBe('Member1');
  })

  test(`can't get any members if user is not Admin`, async () => {
    const response = await api.get('/members')
      .set('Authorization', `Bearer ${tokenStandard}`)
      .expect(401);
    const errorMessage = response.error.text;
    expect(errorMessage).toBe("{\"msg\":\"Standard is not an administrator.\"}")
  })

  test('error 403 if Bearer tokenAdmin its not provided', async () => {
    const response = await api.get('/members').expect(403);
    const message = response.text;
    expect(message).toBe("{\"msg\":\"Token must be provided\"}")
  })

  test('can create a new member', async () => {
    const response = await api.post('/members').send({
      name: 'New Member',
      image: 'newmember.jpg',
      facebookUrl: 'facebook.com/NewMember',
      instagramUrl: 'instagram.com/NewMember',
      linkedinUrl: 'linkedin.com/in/NewMember',
      description: 'NewMember description',
    }).expect(201);
    const newMember = response.body.newMember;
    expect(newMember.name).toBe('New Member');
  });
  
  test('can delete a member by id', async () => {
    const getMembers = await api.get('/members')
        .set('Authorization', `Bearer ${tokenAdmin}`)
      .expect(200);
    const activeMembers = getMembers.body.data.length;
    expect(activeMembers).toEqual(3);
    const id = getMembers.body.data[1].id;
    const response = await api.delete(`/members/${id}`)
        .set('Authorization', `Bearer ${tokenAdmin}`)
      .expect(200);
    expect(response.body.msg).toBe('Member deleted successfully')
  })

  test(`error 404 if member to delete doesn't exist`, async () => {
    const response = await api.delete(`/members/99`)
        .set('Authorization', `Bearer ${tokenAdmin}`)
      .expect(404);
    expect(response.body.message).toBe('Member not found');
  })
});