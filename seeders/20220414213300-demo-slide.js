'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('Slides', [{
      imageUrl: 'SLIDE1.jpg',
      text: 'Slide1',
      order: 1,
      organizationId: null,
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      imageUrl:'SLIDE2.jpg',
      text: 'Slide2',
      order: 1,
      organizationId: null,
      createdAt: new Date,
      updatedAt: new Date
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Slides', null, {});
  }
};
