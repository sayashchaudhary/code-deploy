'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('users', {
            id: {
                unique: true,
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.BIGINT
            },

            role: {
                type: Sequelize.STRING,
                allowNull: false
            },

            name: {
                type: Sequelize.STRING,
                allowNull: false
            },

            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },

            phoneNumber: {
                unique: true,
                type: Sequelize.STRING,
                allowNull: false
            },

            password: {
                type: Sequelize.STRING,
                allowNull: false
            },

            createdAt: {
                type: Sequelize.DATE,
                allowNull: false
            },

            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false
            }
        })
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('users')
    }
};
