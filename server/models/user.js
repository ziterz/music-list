'use strict';
const {encodePassword} = require('../helper/bycript.js')
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize
  class User extends sequelize.Sequelize.Model{}

  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (user, options) => {
        user.password = encodePassword(user.password)
        console.log(user.password);
        
      }
    },
    sequelize,
    modelName: 'User'
  })

  User.associate = function(models) {
    // associations can be defined here
    // User.hasMany(models.Music)
  };
  return User;
};