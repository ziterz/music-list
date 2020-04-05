'use strict';
module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model { }
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: "User"
  })

  User.associate = function(models) {
    User.hasMany(models.Music, {foreignKey: "UserId"})
  };
  return User;
};