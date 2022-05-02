const supertest = require('supertest')
const app = require('../app')
const db = require('../models')
const { createToken } = require('../middlewares/tokenHandler')
const api = supertest(app)

const adminUser = {
    firstName : 'Esteban', 
    lastName: 'Ferreccio', 
    email: 'estebanferreccio@gmail.com', 
    photo: 'avatarEsteban.jpg', 
    roleId: 1, 
    password: 'EstebanFerreccio15' 
}

const standardUser = {
    firstName : 'Juan', 
    lastName: 'Perez', 
    email: 'juanperez08@gmail.com', 
    photo: 'enelparque.jpg', 
    roleId: 2, 
    password: 'JuanPerez08' 
}

let adminToken = createToken(adminUser);
let standardToken = createToken(standardUser);

let successfulTestimonial = {    
    name: "Aniversario Fundación Somos Más!",
    image: "picture.jpg",
    content: "Este mes se hará un evento con motivo de festejar nuestro aniversario.",
}

let failedTestimonial = {    
    image: "picture.jpg",
    content: "Este mes se hará un evento con motivo de festejar nuestro aniversario."
}

let successfulTestimonialUpdated = {    
    name: "Colecta somo más!",
    image: "colecta.jpg",
    content: "Este mes se hará una colecta.",
}


describe('POST method in testimonial', () => {
    test('Create a new testimonial with roleId admin', async() => {
        const response = await api.post('/testimonials').set('authorization', `Bearer ${adminToken}`)
        .send(successfulTestimonial).expect(201);    
    
        expect(response.body.name).toBe('Aniversario Fundación Somos Más!') 
        expect(response.body.image).toBe('picture.jpg')
        expect(response.body.content).toBe('Este mes se hará un evento con motivo de festejar nuestro aniversario.')
    })

    test('Create a new testimonial with roleId standard', async() => {
        const response = await api.post('/testimonials').set('authorization', `Bearer ${standardToken}`)
        .send(successfulTestimonial).expect(401);    
    
        expect(({"msg":`${standardUser.firstName} is not an administrator.`}))
    })

    test('Create a new testimonial with name field empty', async() => {
        const response = await api.post('/testimonials').set('authorization', `Bearer ${adminToken}`)
        .send(failedTestimonial).expect(422);    
    
        expect({"errorList":[{"value":"","msg":"this field cannot be empty!","param":"name","location":"body"}]})
    })
})


describe('PUT method in testimonial', () => {
    test('Update a testimonial with roleId admin', async() => {
        const response = await api.put('/testimonials/1').set('authorization', `Bearer ${adminToken}`)
        .send(successfulTestimonialUpdated).expect(200);    

        expect(({"msg":`the testimonial has been updated`})) 
    })

    test('Update a testimonial with roleId standard', async() => {
        const response = await api.put('/testimonials/1').set('authorization', `Bearer ${standardToken}`)
        .send(successfulTestimonialUpdated).expect(401);    

        expect(({"msg":`${standardUser.firstName} is not an administrator.`}))
    })

    test('Update a testimonial without field name', async() => {
        const response = await api.put('/testimonials/1').set('authorization', `Bearer ${adminToken}`)
        .send(failedTestimonial).expect(422);    

        expect(({"msg":`the testimonial has not been updated`}))
    })
})


describe('DELETE method in testimonial', () => {
    test('Delete a testimonial with roleId admin', async() => {
        const response = await api.delete('/testimonials/1').set('authorization', `Bearer ${adminToken}`).expect(200);

        expect(({"msg":`the testimonial has been deleted`})) 
    })

    test('Delete a testimonial with roleId standard', async() => {
        const response = await api.delete('/testimonials/1').set('authorization', `Bearer ${standardToken}`).expect(401);

        expect(({"msg":`${standardUser.firstName} is not an administrator.`})) 
    })

    test('Try to delete a testimonial which does not exist', async() => {
        const response = await api.delete('/testimonials/22').set('authorization', `Bearer ${adminToken}`).expect(404);

        expect(({"msg":`	
        the id 22 does not exist`})) 
    })
})
