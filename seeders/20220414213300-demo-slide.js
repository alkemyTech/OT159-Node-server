'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('Slide', [{
      imageUrl: 'SLIDE1.jpg',
      text: 'Slide1',
      orderw: 1,
      organizationId: 1,
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      imageUrl:'SLIDE2.jpg',
      text: 'Slide2',
      orderw: 1,
      organizationId: 1,
      createdAt: new Date,
      updatedAt: new Date
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Slide', null, {});
  }
};
