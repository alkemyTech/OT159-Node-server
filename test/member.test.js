const supertest = require('supertest');
const app = require('../app');
const db = require('../models')

const api = supertest(app);

describe('members endpoint', () => {

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
    const membersBeforeCreate = await api.get('/members')
      .set('Authorization', `Bearer ${tokenAdmin}`);
    
    const response = await api.post('/members').send({
      name: 'New Member',
      image: 'newmember.jpg',
      facebookUrl: 'facebook.com/NewMember',
      instagramUrl: 'instagram.com/NewMember',
      linkedinUrl: 'linkedin.com/in/NewMember',
      description: 'NewMember description',
    }).expect(201);

    const newMember = response.body.newMember;
    const membersAfterCreate = await api.get('/members')
      .set('Authorization', `Bearer ${tokenAdmin}`);
    
    const oldMembersLength = membersBeforeCreate.body.data.length;
    const newMembersLength = membersAfterCreate.body.data.length

    expect(newMember.name).toBe('New Member');
    expect(newMembersLength).toBeGreaterThan(oldMembersLength);
  });

  test(`can't create a new member if name is not a string`, async () => {
    const response = await api.post('/members').send({
      name: 123456,
      image: 'newmember.jpg',
      facebookUrl: 'facebook.com/NewMember',
      instagramUrl: 'instagram.com/NewMember',
      linkedinUrl: 'linkedin.com/in/NewMember',
      description: 'NewMember description',
    }).expect(422);
    const errorList = response.body.errorList;
    expect(errorList[0].msg).toBe('the name most be String');
  });

  test(`can't create a new member if image is not a string`, async () => {
    const response = await api.post('/members').send({
      name: 'NewMember',
      image: 123456,
      facebookUrl: 'facebook.com/NewMember',
      instagramUrl: 'instagram.com/NewMember',
      linkedinUrl: 'linkedin.com/in/NewMember',
      description: 'NewMember description',
    }).expect(422);
    const errorList = response.body.errorList;
    expect(errorList[0].msg).toBe('the image most be String');
  });

  test(`can't create a new member if image is empty`, async () => {
    const response = await api.post('/members').send({
      name: 'NewMember',
      image: null,
      facebookUrl: 'facebook.com/NewMember',
      instagramUrl: 'instagram.com/NewMember',
      linkedinUrl: 'linkedin.com/in/NewMember',
      description: 'NewMember description',
    }).expect(422);
    const errorList = response.body.errorList;
    expect(errorList[0].msg).toBe('the image can not be empty');
  });
  
  test('can delete a member by id', async () => {
    const getMembers = await api.get('/members')
        .set('Authorization', `Bearer ${tokenAdmin}`)
      .expect(200);

    const id = getMembers.body.data[1].id;
    const response = await api.delete(`/members/${id}`)
        .set('Authorization', `Bearer ${tokenAdmin}`)
      .expect(200);
    
    const findMember = await db.members.findByPk(id);
    
    expect(response.body.msg).toBe('Member deleted successfully')
    expect(findMember).toBeNull()
  })

  test(`error 404 if member to delete doesn't exist`, async () => {
    const response = await api.delete(`/members/99`)
        .set('Authorization', `Bearer ${tokenAdmin}`)
      .expect(404);
    expect(response.body.message).toBe('Member not found');
  })
});