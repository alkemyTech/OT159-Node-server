"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Testimonial extends Model {
    //Automatically called by `models/index`
    static associate(models) {
      //Define associations here
    }
  }
};

Testimonial.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.VARCHAR,
      allowNull: false,
    },
    image: {
      type: Sequelize.VARCHAR,
      allowNull: true,
    },
    content: {
      type: Sequelize.VARCHAR,
      allowNull: true,
    },
  },
  {
    sequelize,
    paranoid: true,
    timestamps: true,
  }
);
