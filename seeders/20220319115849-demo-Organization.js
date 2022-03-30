'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Organizations', [{
      name: "somos mas",
      image: "somosmas.jpg",
      address: "somos mas 1234",
      phone: 223,
      email: "somosmas@gmail.com",
      welcomeText: "Lorem",
      aboutUSText: "somos lorem",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Organizations', null, {});
  }
};
