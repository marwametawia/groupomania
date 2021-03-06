"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("users", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
                onDelete:'CASCADE'
            },
            firstName: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            lastName: {
              type: Sequelize.STRING,
              allowNull: false,
            },
            email: {
              type: Sequelize.STRING,
              allowNull: false,
              unique: true,
            },
            password: {
                type: Sequelize.STRING,
                allowNull:false,
            },
            isAdmin: { 
                type: Sequelize.BOOLEAN,
                defaultValue:false,
                
            },
            avatar: {
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
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("users");
    },
};
