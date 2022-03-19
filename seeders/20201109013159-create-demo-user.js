'use strict';

let users = [];
for (let i = 0; i < 10; i++) {
  users.push({
    firstName: `Admin${i + 1}`,
    lastName: `AdminLastName${i  + 1}`,
    email: `admin${i + 1}@demo.com`,
    password: `adminPass${i + 1}`,
    roleId: 1,
    photo: `http://admin-image.com/${i + 1}`,    
    createdAt: new Date,
    updatedAt: new Date
  });
};
for (let i = 0; i < 10; i++) {
  users.push({
    firstName: `Standard${i + 1}`,
    lastName: `StandardLastName${i + 1}`,
    email: `standard${i + 1}@demo.com`,
    password: `standardPass${i + 1}`,
    roleId: 2,
    photo: `http://standard-image.com/${i + 1}`,    
    createdAt: new Date,
    updatedAt: new Date
  });
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', users, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', users, {});     
  }
};
