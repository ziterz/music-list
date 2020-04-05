'use strict';
module.exports = (sequelize, DataTypes) => {
  const Music = sequelize.define('Music', {
    title: DataTypes.STRING,
    artist: DataTypes.STRING,
    genre: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {});
  Music.associate = function(models) {
    Music.belongsTo(models.User)
    // associations can be defined here
  };
  return Music;
};