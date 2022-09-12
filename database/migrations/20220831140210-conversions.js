module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Conversions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
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
      click_id: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      ua: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      ip: {
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
    await queryInterface.dropTable('Conversions');
  },
};
