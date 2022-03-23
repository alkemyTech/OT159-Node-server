'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  
  class Category extends Model {}
  
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
  },{
    hooks: {
      beforeUpdate: (category, options, fn) => {
        category.updatedAt = new Date();
        fn(null, category);
      },
      beforeCreate: (category, options, fn) => {
        category.createdAt = new Date();
        fn(null,cagetory)
      }
    },
  },
  { 
    sequelize,
    modelName: 'Category', 
  });
  return Category;
};
