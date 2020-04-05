'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize
  class Music extends Model {}

  Music.init({
    title: DataTypes.STRING,
    artist: DataTypes.STRING,
    release: DataTypes.DATE,
    UserId: DataTypes.INTEGER
  }, {sequelize})

  Music.associate = function(models) {
    // associations can be defined here
    // Music.belongsTo(models.User)
  };
  return Music;
};