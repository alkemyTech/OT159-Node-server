'use strict';

let users = [];
for (let i = 0; i < 10; i++) {
  users.push({
    firstName: `Standard${i + 1}`,
    lastName: `StandardLastName${i  + 1}`,
    email: `standardUser${i + 1}@demo.com`,
    password: `standardPass${i + 1}`,
    roleId: i + 1,
    photo: `http://standard-image.com/${i + 1}`,    
    createdAt: new Date,
    updatedAt: new Date
  });
};
for (let i = 0; i < 10; i++) {
  users.push({
    firstName: `Regular${i + 1}`,
    lastName: `RegularLastName${i + 1}`,
    email: `regularUser${i + 1}@demo.com`,
    password: `regularPass${i + 1}`,
    roleId: i + 1,
    photo: `http://regular-image.com/${i + 1}`,    
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
