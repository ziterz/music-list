'use strict';
module.exports = (sequelize, DataTypes) => {
  // const Music = sequelize.define('Music', {
  //   title: DataTypes.STRING,
  //   artist: DataTypes.STRING,
  //   genre: DataTypes.STRING,
  //   UserId: DataTypes.INTEGER
  // }, {});
  class Music extends sequelize.Sequelize.Model { }
  Music.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'title is required'
        },
        notEmpty: {
          msg: 'title is required'
        }
      }
    },
    artist: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'artist is required'
        },
        notEmpty: {
          msg: 'artist is required'
        }
      }
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'genre is required'
        },
        notEmpty: {
          msg: 'genre is required'
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      references: {
        model: sequelize.Sequelize.User,
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Music'
  })
  Music.associate = function (models) {
    // associations can be defined here
    Music.belongsTo(models.User)
  };
  return Music;
};