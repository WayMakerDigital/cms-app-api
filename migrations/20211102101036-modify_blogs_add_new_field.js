'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'Blogs', // table name
        'imageURL', // new field name
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      ),
      ])
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Blogs', 'imageURL'),
    ]);
  },
};