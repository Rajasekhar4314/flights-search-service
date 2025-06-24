'use strict';

const { Model } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint("Airports", {
      type: "FOREIGN KEY",
      fields: ["cityId"],
      name: "city_fkey_constraint_name",
      references : {
        table: "Cities",
        field: "id"
      },
      onUpdate : "CASCADE",
      onDelete: "CASCADE"
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint("Airports", "city_fkey_constraint_name")
  }
};
