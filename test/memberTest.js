const chai = require('chai');
const chaiHttp = require('chai-http')
const member = require('../controlers/membersController');
const port = process.env.PORT;
const server = require('../app')
const paths = {
    member: `/members/`,
}

//Assertions Style
chai.should();

chai.use(chaiHttp)

describe('Member API', () => {


    //Test the post route
    describe('post /api/member/', () => {
        it('it should post a new member happy way with two params', (done) => {
            const member = {
                name: "Juan Perez",
                image: "url.com/member/12378512"
            }
            chai.request(server)
                .post(paths.member)
                .send(member)
                .end((err, response) => {
                    response.should.have.status(201);
                    response.body.should.be.a('object')
                    done();
                });
        });

        it('it should post a new member happy way with two params', (done) => {
            const member = {
                name: "Juan Perez",
                image: "url.com/member/12378512",
                facebookUrl: "facebook.com",
                linkedinUrl: "linkedinUrl",
                description: 'this is a description'
            }
            chai.request(server)
                .post(paths.member)
                .send(member)
                .end((err, response) => {
                    response.should.have.status(201);
                    response.body.should.be.a('object')
                    done();
                });
        });

        it('it should NOT Post a new member, happy way but wrong url', (done) => {
            const member = {
                name: "Juan Perez",
                image: "url.com/member/12378512"
            }
            chai.request(server)
                .post('http://localhost:8080/member/')
                .send(member)
                .end((err, response) => {
                    response.should.have.status(404);
                    done();
                });
        });

        it('it should NOT Post a new member because one of two params bad, happy way ', (done) => {
            const member = {
                name: true,
                image: "url.com/member/12378512"
            }
            chai.request(server)
                .post(paths.member)
                .send(member)
                .end((err, response) => {
                    response.should.have.status(400);
                    done();
                });
        });

        it('it should NOT Post a new member because one of two params bad, happy way ', (done) => {
            const member = {
                name: { name: "Juan Perez" },
                image: 123456
            }
            chai.request(server)
                .post(paths.member)
                .send(member)
                .end((err, response) => {
                    response.should.have.status(400);
                    done();
                });
        });
    });
});