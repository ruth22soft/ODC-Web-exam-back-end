'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    //here is the user
    static associate(models) {
    }
  }
  user.init(
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      date_of_birth: DataTypes.DATE,
      sex: DataTypes.STRING,
      phone_no: DataTypes.STRING,
      city: DataTypes.STRING,
      sub_city: DataTypes.STRING,
      wereda: DataTypes.STRING,
      house_no: DataTypes.STRING,
      role_type: DataTypes.STRING,
      activation: DataTypes.BOOLEAN
    },
    {
      sequelize,
      modelName: 'user',
    }
  );
  return user;
};