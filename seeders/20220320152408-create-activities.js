'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Activities', [{
      name: 'Coding',
      content: 'Coding activity',
      image: 'coding.jpg',
      createdAt: new Date,
      updatedAt: new Date,
    }]
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Activities', null, {});
  }
};
