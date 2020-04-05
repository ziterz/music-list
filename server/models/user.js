'use strict';
module.exports = (sequelize, DataTypes) => {
  // const User = sequelize.define('User', {
  //   email: DataTypes.STRING,
  //   password: DataTypes.STRING
  // }, {});
  class User extends sequelize.Sequelize.Model { }
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User'
  })
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Music)
  };
  return User;
};