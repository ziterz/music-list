'use strict';
const { encryptPassword } = require("../helper/bcyript")
module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model { }
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: "User",
    hooks: {
      beforeCreate(user, options){
        user.password = encryptPassword(user.password)
      }
    }
  })

  User.associate = function(models) {
    User.hasMany(models.Music, {foreignKey: "UserId"})
  };
  return User;
};