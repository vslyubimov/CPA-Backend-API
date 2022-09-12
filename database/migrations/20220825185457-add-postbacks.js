module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Postbacks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      click_id: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      postback_type: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      offer_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Offers',
          key: 'id',
        },
      },
      pid: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },

      base: {
        allowNull: true,
        type: Sequelize.FLOAT,
      },

      deposit: {
        allowNull: true,
        type: Sequelize.FLOAT,
      },

      ngr: {
        allowNull: true,
        type: Sequelize.FLOAT,
      },

      ip: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Postbacks');
  },
};
