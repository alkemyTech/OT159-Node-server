'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Contacts', {
      id: {
        type: Sequelize.INTEGER, 
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
      },
      phone: {
          type: Sequelize.STRING,
          allowNull: false,
      }, 
      email: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      message: {
          type: Sequelize.STRING,
          allowNull: false,
      },  
      deletedAt: {
          type: Sequelize.DATE,
          allowNull: true,
      }, 
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Contacts');
  }
};
