'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Passengers', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            lname: {
                type: Sequelize.STRING
            },
            phone: {
                type: Sequelize.STRING
            },
            from: {
                type: Sequelize.STRING
            },
            to: {
                type: Sequelize.STRING
            },
            entrance: {
                type: Sequelize.TIME
            },
            exit: {
                type: Sequelize.TIME
            },
            roundTrip: {
                type: Sequelize.BOOLEAN
            },
            discapacity: {
                type: Sequelize.BOOLEAN
            },
            email: {
                type: Sequelize.STRING
            },
            password: {
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
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Passengers');
    }
};
