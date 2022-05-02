const supertest = require('supertest');
const app = require('../app');
const db = require('../models');
const { createToken } = require('../middlewares/tokenHandler');

const api = supertest(app);

//Generate test DB entities
const User = db.User;
const Role = db.Role;

const initialUsers = [
  {
    firstName:'First',
    lastName: 'User',
    email: 'test0@test.com',
    photo: 'firstPic.img',
    password: 'Test9999',
    roleId: 1
  },
  {
    firstName:'Second',
    lastName: 'User',
    email: 'test1@test.com',
    photo: 'secondPic.img',
    password: 'Test0000',
    roleId:2
  },
]
const user1 = initialUsers[0];
const user2 = initialUsers[1];

//Setup DB and Token
let adminToken = '';
let standardToken = '';

describe('users endpoint', () => {



beforeEach(async () => {
  //DB cleanup and create
  await Role.destroy({where:{}, force: true}) //Ignore paranoid
  await Role.create({id: 1,name: 'Admin'})
  await Role.create({id:2,name: 'Standard'})

  await User.destroy({truncate: true})
  const adminUser = await User.create(user1)
  const standardUser = await User.create(user2)

  //Token gen
  adminToken = createToken(adminUser);
  standardToken = createToken(standardUser);
})

//Tests <3
test('GET /users with NO token should return Forbidden', async() => {
  const response = await api.get('/users')
    .expect(403)
    .expect('Content-Type', /application\/json/)
  expect(response.body.msg).toBe('Token must be provided')
})

test('GET /users with Standard user token should return Unauthorized', async() => {
  const response = await api.get('/users')
    .set('Authorization', `Bearer ${standardToken}`)
    .expect(401)
    .expect('Content-Type', /application\/json/)
  expect(response.body.msg).toContain('is not an administrator')
})

test('GET /users with Admin token should return 2 users', async() => {
  const response = await api.get('/users')
    .set('Authorization',`Bearer ${adminToken}`)
    .expect(200)
    .expect('Content-Type', /application\/json/)
  expect(response.body.meta.total).toBe(initialUsers.length)
  expect(response.body.data).toHaveLength(initialUsers.length)
  expect(response.body.data[0]).toMatchObject(user1)
  expect(response.body.data[1]).toMatchObject(user2)
})

test('PATCH /users/1 with missing fields should be unprocessable', async() => {
  const response = await api.patch('/users/1')
    .set('Authorization',`Bearer ${adminToken}`)
    .send({
      "firstName":"Great",
      "lastName":"Person"
    })
    .expect(422)
    .expect('Content-Type', /application\/json/)

  expect(response.body.errorList)
  .toEqual(expect.arrayContaining([expect.objectContaining({"param": "image"})]))
})

test('PATCH /users/1 with correct fields', async() => {
  const response = await api.patch('/users/1')
    .set('Authorization',`Bearer ${adminToken}`)
    .send({
      "firstName":"Great",
      "lastName":"Person",
      "image":"pers.png"
    })
    .expect(200)
    .expect('Content-Type', /application\/json/)
  expect(response.body.msg).toContain('The user was successfully edited')
})

test('DELETE /users/3 should return user not found', async() => {
  const response = await api.delete('/users/3')
    .set('Authorization',`Bearer ${adminToken}`)
    .expect(404)
    .expect('Content-Type', /application\/json/)
  expect(response.body.msg).toContain('User not found')
})

test('DELETE /users/1 should return deleted successfully', async() => {
  const response = await api.delete('/users/1')
    .set('Authorization',`Bearer ${adminToken}`)
    .expect(200)
    .expect('Content-Type', /application\/json/)
  expect(response.body.msg).toContain('user deleted successfully')
})
})