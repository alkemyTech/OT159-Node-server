'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('Comments', [
      {
        user_id: 1,
        body: 'A great comment from the user',
        post_id: 1,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        user_id: 1,
        body: 'You might think a single comment is enough',
        post_id: 2,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        user_id: 2,
        body: 'Well, think again',
        post_id: 1,
        createdAt: new Date,
        updatedAt: new Date
      }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
