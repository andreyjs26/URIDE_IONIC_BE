'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Cars', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            brand: {
                allowNull: false,
                type: Sequelize.STRING
            },
            type: {
                allowNull: false,
                type: Sequelize.STRING
            },
            model: {
                allowNull: false,
                type: Sequelize.STRING
            },
            color: {
                allowNull: false,
                type: Sequelize.STRING
            },
            license: {
                allowNull: false,
                type: Sequelize.STRING
            },
            riteve: {
                allowNull: false,
                type: Sequelize.BOOLEAN
            },
            capacity: {
                allowNull: false,
                type: Sequelize.INTEGER
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
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Cars');
    }
};
