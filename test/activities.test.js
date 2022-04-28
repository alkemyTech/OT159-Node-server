const supertest = require('supertest')
const app = require('../app')
const db = require('../models')
const { createToken } = require('../middlewares/tokenHandler')
const api = supertest(app)

const adminUser = {
    firstName : 'Lucas', 
    lastName: 'Novak', 
    email: 'lucasnovak08@gmail.com', 
    photo: 'encasa.jpg', 
    roleId: 1, 
    password: 'LucasNovak08' 
}

const standardUser = {
    firstName : 'Juan', 
    lastName: 'Perez', 
    email: 'juanperez08@gmail.com', 
    photo: 'enelparque.jpg', 
    roleId: 2, 
    password: 'JuanPerez08' 
}


const activitiesExamples = [
    {
        id: 1,
        name: 'Cena de socios',
        content: 'Se dará lugar a una cena con los socios la semana entrante',
        image: 'sociosDinner.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
    },

    {
        id: 2,
        name: 'Colecta',
        content: 'El día jueves próximo se realizará la colecta anual',
        image: 'colecta.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    {
        id: 3,
        name: '',
        content: 'El día jueves próximo se realizará la colecta anual',
        image: 'colecta.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
    }
]

beforeAll(async () => {
    await db.Activities.destroy({ truncate: true })
})

describe('POST methods in /activities endpoint', () => {
    test('Intenta crear una nueva actividad con roleId admin', async() => {
        await api
            .post('/activities')
            .set('authorization', `Bearer ${createToken(adminUser)}`)
            .send(activitiesExamples[0])
            .then((res) => {
                expect(res.statusCode).toBe(201)
                expect(res.body.newActivity.id).toStrictEqual(1)
                expect(res.body.newActivity.name).toStrictEqual('Cena de socios')
                expect(res.body.newActivity.content).toStrictEqual('Se dará lugar a una cena con los socios la semana entrante')
                expect(res.body.newActivity.image).toStrictEqual('sociosDinner.jpg')
                expect(res.body.newActivity.createdAt).toStrictEqual(expect.any(String))
                expect(res.body.newActivity.updatedAt).toStrictEqual(expect.any(String))
            })  
    })
    
    test('Intenta crear una nueva actividad con roleId standard', async() => {
        await api
            .post('/activities')
            .set('authorization', `Bearer ${createToken(standardUser)}`)
            .send(activitiesExamples[1])
            .expect(401)
            .expect(({"msg":`${standardUser.firstName} is not an administrator.`}))
    } )
    
    test('Intenta crear una nueva actividad con un campo requerido vacío', async() => {
        await api
            .post('/activities')
            .set('authorization', `Bearer ${createToken(adminUser)}`)
            .send(activitiesExamples[2])
            .expect(422)
            .expect({"errorList":[{"value":"","msg":"this field cannot be empty!","param":"name","location":"body"}]})
    })
})

describe('PUT methods in /activities endpoint', () => {
    test('Intenta editar una actividad con roleId admin', async() => {
        const id = 1
        await api
            .put(`/activities/${id}`)
            .set('authorization', `Bearer ${createToken(adminUser)}`)
            .send(activitiesExamples[1])
            .then((res) => {
                expect(res.statusCode).toBe(200)
                expect(res.body.activityUpdated.name).toStrictEqual('Colecta')
                expect(res.body.activityUpdated.content).toStrictEqual('El día jueves próximo se realizará la colecta anual')
                expect(res.body.activityUpdated.image).toStrictEqual('colecta.jpg')
            })  
    })

    test('Intenta editar una actividad con roleId standard', async() => {
        const id = 1
        await api
            .put(`/activities/${id}`)
            .set('authorization', `Bearer ${createToken(standardUser)}`)
            .send(activitiesExamples[1])
            .expect(401)
            .expect(({"msg":`${standardUser.firstName} is not an administrator.`}))
    } )
    
    test('Intenta editar una actividad con un campo requerido vacío', async() => {
        const id = 1
        await api
        .put(`/activities/${id}`)
            .set('authorization', `Bearer ${createToken(adminUser)}`)
            .send(activitiesExamples[2])
            .expect(422)
            .expect({"errorList":[{"value":"","msg":"this field cannot be empty!","param":"name","location":"body"}]})
    })
})
