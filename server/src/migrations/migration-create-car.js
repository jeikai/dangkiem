'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Car', {
          
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            driverId: {
                type: Sequelize.INTEGER
            },
            plateNumber: {
                type: Sequelize.STRING
            },
            manufacture: {
                type: Sequelize.STRING
            },
            model: {
                type: Sequelize.STRING
            },
            color: {
                type: Sequelize.STRING
            },
            registerCity: {
                type: Sequelize.STRING
            },
            purpose: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Car');
    }
};