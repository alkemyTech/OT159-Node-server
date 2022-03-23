'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Categories',{
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
      description: {
          type: Sequelize.STRING,
          allowNull: true,
      }, 
      image: {
          type: Sequelize.STRING,
          allowNull: true,
      }, 
      createdAt: {
          allowNull: false,
          type: Sequelize.DATE
      },
      updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
      },
      deletedAt: {
          type: Sequelize.DATE
      },
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Categories');
  }
};
