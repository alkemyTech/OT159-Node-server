'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
   
    static associate(models) { 
    }
  };
  Category.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    }, 
    image: {
        type: DataTypes.STRING,
        allowNull: true,
    }, 
    deletedAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    createdAt: DataTypes.DATE
  },
  { 
    sequelize,
    modelName: 'Category',
    timestamps: true,
    paranoid: true,
  });
  return Category;
};
