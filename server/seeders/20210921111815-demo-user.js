'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
      id: 1,
      userId: 'kimcoding',
      password: '1234',
      email: 'kimcoding@home.com',
      salt: '564635321321',
      createdAt: new Date(),
      updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
