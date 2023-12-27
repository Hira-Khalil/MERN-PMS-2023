const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

const jwt = require('jsonwebtoken');
const config = require('../../config/config.json');
const { v4: uuidV4 } = require("uuid");
const session = require("./sessions")

class Users extends Model { }

Users.init(
    {
        userId: {
            primaryKey: true,
            type: DataTypes.STRING(60),
        },
        firstname: {
            type: DataTypes.STRING(60),
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING(60),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(60),
            unique: true,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(60),
            allowNull: false,
        },
        role: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ["instructor", "trainee"],
            defaultValue: "trainee"
        }
    },
    {
        hooks: {
            afterCreate: async (Users) => {
                delete Users.dataValues.password;

                const token = jwt.sign(Users.dataValues, config.jwt.secret, {
                    expiresIn: "1h",
                });
                await session.create({
                    userId: Users.dataValues.userId,
                    token,
                    sessionId: uuidV4(),
                })
            }
        },


        sequelize,
        timestamps: true,
        paranoid: true,
        modelName: "Users",

    });

module.exports = Users;
