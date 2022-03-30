'use strict';    
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Categories', {
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
        deletedAt: {
            type: Sequelize.DATE,
            allowNull: false
        },
        updatedAt: {
            type: Sequelize.DATE,
            allowNull: false
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false
        }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Categories');
  }
};
