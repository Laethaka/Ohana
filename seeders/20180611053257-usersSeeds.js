'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      user_name: 'jesselof',
      user_password: 'password',
      name: 'Jesse',
      email: 'laethaka@gmail.com',
      age: 31,
      zipcode: '94087',
      createdAt: new Date(),
      updatedAt: new Date(),
      FamilyId: 1,
      primary_user: false
    }, {
      user_name: 'bryanalb',
      user_password: 'password',
      name: 'Bryan',
      email: 'bryan@alb.com',
      age: 45,
      zipcode: '95616',
      createdAt: new Date(),
      updatedAt: new Date(),
      FamilyId: 1,
      primary_user: false
    }, {
      user_name: 'sophieoba',
      user_password: 'password',
      name: 'Sophie',
      email: 'sophie@oba.com',
      age: 15,
      zipcode: '94705',
      createdAt: new Date(),
      updatedAt: new Date(),
      FamilyId: 1,
      primary_user: false
    }, {
      user_name: 'mariajes',
      user_password: 'password',
      name: 'Maria',
      email: 'maria@jes.com',
      age: 30,
      zipcode: '94705',
      createdAt: new Date(),
      updatedAt: new Date(),
      FamilyId: 1,
      primary_user: true
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
