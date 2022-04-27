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
        deletedAt: null
    },

    {
        id: 2,
        name: 'Colecta',
        content: 'El día jueves próximo se realizará la colecta anual',
        image: 'colecta.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
    },

    {
        id: 3,
        name: '',
        content: 'El día jueves próximo se realizará la colecta anual',
        image: 'colecta.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
    }
]

beforeEach(async () => {
    await db.Activities.destroy({ truncate: true })
})

// test('POST valid new activity', async() => {
//     await api
//         .post('/activities')
//         .set('authorization', `Bearer ${createToken(adminUser)}`)
//         .send(activitiesExamples[0])
//         .expect(201)
//         .expect({"newActivity":{"id":1,"name":"Cena de socios","content":"Se dará lugar a una cena con los socios la semana entrante","image":"sociosDinner.jpg","updatedAt":"2022-04-27T00:03:51.394Z","createdAt":"2022-04-27T00:03:51.394Z"}})
// })

test('POST new activity without admin roleId', async() => {
    await api
        .post('/activities')
        .set('authorization', `Bearer ${createToken(standardUser)}`)
        .send(activitiesExamples[1])
        .expect(401)
        .expect(({"msg":`${standardUser.firstName} is not an administrator.`}))
} )

test('POST empty field - express-validation error', async() => {
    await api
        .post('/activities')
        .set('authorization', `Bearer ${createToken(adminUser)}`)
        .send(activitiesExamples[2])
        .expect(422)
        .expect({"errorList":[{"value":"","msg":"this field cannot be empty!","param":"name","location":"body"}]})
})

// test('PUT activity', async() => {
//     const id = 1
//     await api
//         .put(`/activities/${id}`)
//         .send(activitiesExamples[0])
//         .expect(200)
//         .expect({"newActivity":{"id":1,"name":"Cena de socios","content":"Se dará lugar a una cena con los socios la semana entrante","image":"sociosDinner.jpg","updatedAt":"2022-04-27T00:03:51.394Z","createdAt":"2022-04-27T00:03:51.394Z"}})
// })

test('PUT new activity without admin roleId', async() => {
    const id = 1
    await api
        .put(`/activities/${id}`)
        .set('authorization', `Bearer ${createToken(standardUser)}`)
        .send(activitiesExamples[1])
        .expect(401)
        .expect(({"msg":`${standardUser.firstName} is not an administrator.`}))
} )

test('PUT empty field - express-validation error', async() => {
    const id = 1
    await api
    .put(`/activities/${id}`)
        .set('authorization', `Bearer ${createToken(adminUser)}`)
        .send(activitiesExamples[2])
        .expect(422)
        .expect({"errorList":[{"value":"","msg":"this field cannot be empty!","param":"name","location":"body"}]})
})
