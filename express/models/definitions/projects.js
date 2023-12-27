const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class Projects extends Model { }

Projects.init(
    {
        projectId: {
            primaryKey: true,
            type: DataTypes.STRING(60),
        },
        projectName: {
            type: DataTypes.STRING(60),
            allowNull: false,
        },
        projectDescription: {
            type: DataTypes.STRING(60),
            allowNull: false,
        },

    },
    {
        sequelize,
        timestamps: true,
        paranoid: true,
        modelName: "projects",
    }
);

module.exports = Projects;
