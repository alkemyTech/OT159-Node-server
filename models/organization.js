'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Organization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Organization.init({
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.INTEGER
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    welcomeText: {
      type: DataTypes.STRING,
      allowNull: false
    },
    aboutUSText: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Organization',
  });
  return Organization;
};