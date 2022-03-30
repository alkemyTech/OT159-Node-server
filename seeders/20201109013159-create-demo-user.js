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
    await queryInterface.bulkInsert('Users', users, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', users, {});     
  }
};
