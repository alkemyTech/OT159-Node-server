'use strict';

let adminData = {
  firstName: 'Admin',
  lastName: 'AdminlastName',
  email: 'admin',
  password: 'adminPass',
  roleId: 1,
  photo: 'http://admin-image.com/'
};

let standardData = {
  firstName: 'Standard',
  lastName: 'StandardlastName',
  email: 'standard',
  password: 'standardPass',
  roleId: 2,
  photo: 'http://standard-image.com/'
};

function loadUser(cant, target, user) {

  const { firstName, lastName, email, password, roleId, photo } = user;
  cant++; 

  for (let i = 1; i < cant; i++) {
      target.push({
          firstName: `${firstName}${i}`,
          lastName: `${lastName}${i}`,
          email: `${email}${i}@demo.com`,
          password: `${password}${i}`,
          roleId,
          photo: `${photo}${i}`,
          createdAt: new Date(),
          updatedAt: new Date()
      })      
  };
};

let admin = [];
let standard = [];

loadUser(10, admin, adminData);
loadUser(10, standard, standardData);

let users =  [...admin, ...standard];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      firstName: 'Usuario',
      lastName: 'Demo',
      email: 'test@test.com',
      // Important: Password not encrypted yet! 
      password: '$2a$10$Z9ATTS9zr9qzIn/K0YQhbuL9rMe96.861ABvqfA1WY2sxszZ6D/mC',
      roleId: 1,
      photo: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', users, {});     
  }
};
