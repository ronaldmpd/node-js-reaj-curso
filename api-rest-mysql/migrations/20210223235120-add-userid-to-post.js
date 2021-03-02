"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Posts", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: "Users",
        },
        key: "id",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Posts", "userId");
  },
};
