'use strict';
module.exports = (sequelize, DataTypes) => {
  class Music extends sequelize.Sequelize.Model {}
  Music.init({
    title: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  },{
    sequelize,
    modelName: "Music"
  })
  Music.associate = function(models) {
    // associations can be defined here
  };
  return Music;
};