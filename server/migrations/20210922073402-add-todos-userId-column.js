'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('todos', 'userId', Sequelize.INTEGER);

    // foreign key 연결
    await queryInterface.addConstraint('todos', {
      fields: ['userId'],
      type: 'foreign key',
      name: 'userId',
      references: {
        table: 'Users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('todos', 'userId');
    await queryInterface.removeColumn('todos', 'userId');
  }
};