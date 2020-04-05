'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint("Music", ["UserId"], {
      type: "foreign key",
      name: "fkey_UserId",
      references: {
        table: "Users",
        field: "id"
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint("Music", "fkey_UserId")
  }
};
