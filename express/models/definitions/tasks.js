const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");


class Tasks extends Model { }

Tasks.init(
    {
        taskId: {
            primaryKey: true,
            type: DataTypes.STRING(60),
        },
        taskName: {
            type: DataTypes.STRING(60),
            allowNull: false,
        },
        taskDescription: {
            type: DataTypes.STRING(60),
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: true,
        paranoid: true,
        modelName: "Tasks",
    }
);

module.exports = Tasks;
