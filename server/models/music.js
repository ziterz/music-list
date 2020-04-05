'use strict';
module.exports = (sequelize, DataTypes) => {
    class Music extends sequelize.Sequelize.Model {}
    Music.init({
        title: DataTypes.STRING,
        artist: DataTypes.STRING,
        genre: DataTypes.STRING,
        UserId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Music'
    })
    Music.associate = function(models) {
        // associations can be defined here
        Music.belongsTo(models.User, { foreignKey: 'UserId' })
    };
    return Music;
};