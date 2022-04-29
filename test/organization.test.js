const supertest = require('supertest')
const app = require('../app')
const db = require('../models')
const { createToken } = require('../middlewares/tokenHandler')
const api = supertest(app)

const adminUser = {
    firstName : 'Omaro', 
    lastName: 'Aburto', 
    email: 'omaro.aburto@gmail.com', 
    photo: 'omaro.jpg', 
    roleId: 1, 
    password: 'Omaro134Aburto' 
}

const standardUser = {
    firstName : 'Juan', 
    lastName: 'Perez', 
    email: 'juanperez08@gmail.com', 
    photo: 'enelparque.jpg', 
    roleId: 2, 
    password: 'JuanPerez08' 
}


const organizationExamples = [
    {
        id: 1,
        name: 'buena vida1',
        image: 'buenavida1.jpg',
        address: 'buena vida 444',
        phone: 56959404913,
        email: 'test1@test.com',
        welcomeText: 'bienvenido a la buena vida 1',
        aboutUSText:'acerca de la buena vida 1',
        createdAt: new Date(),
        updatedAt: new Date(),
    },

    {
        id: 2,
        name: 'buena vida1',
        image: 'buenavida1.jpg',
        address: 'buena vida 444',
        phone: 56959404913,
        email: 'test2@test.com',
        welcomeText: 'bienvenido a la buena vida 1',
        aboutUSText:'acerca de la buena vida 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    {
        id: 3,
        name: '',
        image: 'buenavida3.jpg',
        address: 'buena vida 443',
        phone: 56959404913,
        email: 'test3@test.com',
        welcomeText: 'bienvenido a la buena vida 3',
        aboutUSText:'acerca de la buena vida 3',
        createdAt: new Date(),
        updatedAt: new Date(),
    }
]

beforeAll(async () => {
    await db.Organization.destroy({ truncate: true })
})

describe('POST methods in /organization/public endpoint', () => {
    test('Create a new organization with roleId admin', async() => {
        await api
            .post('/organization/public')
            .set('authorization', `Bearer ${createToken(adminUser)}`)
            .send(organizationExamples[0])
            .then((res) => {
                expect(res.statusCode).toBe(201) 
                expect(res.body.newOrganization.id).toStrictEqual(1)
                expect(res.body.newOrganization.name).toStrictEqual('buena vida1') 
                expect(res.body.newOrganization.image).toStrictEqual('buenavida1.jpg')
                expect(res.body.newOrganization.address).toStrictEqual('buena vida 444')
                expect(res.body.newOrganization.address).toStrictEqual(56959404913)
                expect(res.body.newOrganization.email).toStrictEqual('test1@test.com')
                expect(res.body.newOrganization.welcomeText).toStrictEqual('bienvenido a la buena vida 1')
                expect(res.body.newOrganization.aboutUSText).toStrictEqual('acerca de la buena vida 1')
                expect(res.body.newOrganization.createdAt).toStrictEqual(expect.any(String))
                expect(res.body.newOrganization.updatedAt).toStrictEqual(expect.any(String))
            })  
    })
    
    test('Create a new Organization with standard roleId', async() => {
        await api
            .post('/organization/public')
            .set('authorization', `Bearer ${createToken(standardUser)}`)
            .send(organizationExamples[1])
            .expect(401)
            .expect(({"msg":`${standardUser.firstName} is not an administrator.`}))
    } )
    
    test('create a new organization with an empty required field', async() => {
        await api
            .post('/organization/public')
            .set('authorization', `Bearer ${createToken(adminUser)}`)
            .send(organizationExamples[2])
            .expect(404)
            .expect({"errorList":[{"value":"","msg":"this field cannot be empty!","param":"name","location":"body"}]})
    })
})


describe('GET methods in /organization/public endpoint',()=>{
    test('GET /organization/public should return all organizations', async() => {
        const response = await api.get('/organization/public/')
          .set('Authorization',`Bearer ${adminToken}`)
          .expect(200)
          .expect('Content-Type', /application\/json/)
          expect(organizationExamples[0])
    })
})

describe('PUT methods in /organization/public endpoint', () => {
    test('edit an organization with roleId admin', async() => {
        const id = 1
        await api
            .put(`/organization/public/${id}`)
            .set('authorization', `Bearer ${createToken(adminUser)}`)
            .send(organizationExamples[1])
            .then((res) => {
                expect(res.statusCode).toBe(200)
                expect(res.body.newOrganization.name).toStrictEqual('buena vida1') 
                expect(res.body.newOrganization.image).toStrictEqual('buenavida1.jpg')
                expect(res.body.newOrganization.address).toStrictEqual('buena vida 444')
                expect(res.body.newOrganization.address).toStrictEqual(56959404913)
                expect(res.body.newOrganization.email).toStrictEqual('test1@test.com')
                expect(res.body.newOrganization.welcomeText).toStrictEqual('bienvenido a la buena vida 1')
                expect(res.body.newOrganization.aboutUSText).toStrictEqual('acerca de la buena vida 1')
            })  
    })

    test('edit an organization with  roleId standard', async() => {
        const id = 1
        await api
            .put(`/organization/public/${id}`)
            .set('authorization', `Bearer ${createToken(standardUser)}`)
            .send(organizationExamples[1])
            .expect(401)
            .expect(({"msg":`${standardUser.firstName} is not an administrator.`}))
    } )
    
    test('Edit an organization with an empty required field', async() => {
        const id = 1
        await api
        .put(`/organization/public/${id}`)
            .set('authorization', `Bearer ${createToken(adminUser)}`)
            .send(organizationExamples[2])
            .expect(404)
            .expect({"errorList":[{"value":"","msg":"this field cannot be empty!","param":"name","location":"body"}]})
    })
})