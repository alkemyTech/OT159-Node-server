const supertest = require('supertest');
const app = require('../app');
const { createToken } = require('../middlewares/tokenHandler');
const db = require('../models');
const api = supertest(app);
let adminToken;



   test('POST /auth/register should create a new user', async () => {
      user={
        email:'test2@test.com',
        password:'t3ST3123456!',
        firstName:'TestFristName',
        lastName:'TestLastName',
        roleId:1,
        photo:'google.com'
      }
      await api.post('/auth/register')
      .send(user)
      .expect(201);
   })

  test('create succesfully login',async() => {
  
  const response = await api.post('/auth/login')
    .send({
      email: 'test2@test.com',
      password: 't3ST3123456!',
    })
    .expect(200)
    token = response.body.userToken
    user= response.body.user;
    adminToken= createToken(user)
    });
  
  test('POST /contacts/ should create a new contact', async () => {
    contact = {
      name:'Contact 2',
      phone: '4234234234',
      email: 'contact2@test.com',
      photo: 'contact2Image.img',
      message: 'Contact test message 2'
    }
    await api.post('/contacts/')
    .send(contact)
    .expect(200);
  })

  test('POST /contacts/ try to create an exist contact and get a error 500', async () => {
    contact = {
      name:'Contact 2',
      phone: '4234234234',
      email: 'contact2@test.com',
      photo: 'contact2Image.img',
      message: 'Contact test message 2'
    }
    const response = await api.post('/contacts/')
    .send(contact)
    .expect(500);
    expect(response.body.error)
  })
  

  test('POST /contacts/ try to create a new contact with out name and get and error 500', async () => {
    contact = {
      phone: '4234234234',
      email: 'contact2@test.com',
      photo: 'contact2Image.img',
      message: 'Contact test message 2'
    }
    const response = await api.post('/contacts/')
    .send(contact)
    .expect(422);
    expect(response.body.errorList)
  })


test('GET /contact should return all contact', async() => {
    const response = await api.get('/contacts/')
      .set('Authorization',`Bearer ${adminToken}`)
      .expect(200)
      .expect('Content-Type', /application\/json/)
      expect(response.body.contacts)
})