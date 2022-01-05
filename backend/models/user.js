"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class user extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            user.hasMany(models.post,
                {onDelete: 'CASCADE',
              });

            user.hasMany(models.comment,
                {onDelete: 'CASCADE',
              });
        }
    }
    user.init(
        {
            firstName: { type: DataTypes.STRING, allowNull: false },
            lastName: { type: DataTypes.STRING, allowNull: false },
            email: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            avatar: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            isAdmin: { type: DataTypes.BOOLEAN, allowNull: false, default:false },
        },
        {
            sequelize,
            modelName: "user",
        }
    );
    return user;
};
