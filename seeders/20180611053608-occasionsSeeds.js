'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('occasions', [{
      category: "class",
      title: "Chicken Kablooie",
      date: "June 15 2018",
      start_time: "10 AM",
      end_time: "2:30 PM",
      zipcode: "94705",
      location: 'Golden Bear Center',
      description: 'We present this to the class',
      photo: 'fake.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
      FamilyId: 1
    }]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
