"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    let categories = [
      {
        name: "category1",
        description: "category1",
        createdAt: new Date(),
        updatedAt: new Date(),
        image: "category1.jpg",
      },
      {
        name: "category2",
        description: "category2",
        createdAt: new Date(),
        updatedAt: new Date(),
        image: "category2.jpg",
      },
      {
        name: "category3",
        description: "category3",
        createdAt: new Date(),
        updatedAt: new Date(),
        image: "category3.jpg",
      },
      {
        name: "category4",
        description: "category4",
        createdAt: new Date(),
        updatedAt: new Date(),
        image: "category4.jpg",
      },
    ];

    return queryInterface.bulkInsert("categories", categories, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
