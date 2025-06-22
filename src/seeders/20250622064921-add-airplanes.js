'use strict';
const { Op, or } = require("sequelize")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert("Airplanes", [
    {
      modelNumber : "airbus180",
      capacity: 400,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      modelNumber : "airbus182",
      capacity: 350,
      createdAt : new Date(),
      updatedAt : new Date()
    }
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Airplanes", {[Op.or] : [{modelNumber : "airbus180"}, {modelNumber : "airbus182"}]})
  }
};
