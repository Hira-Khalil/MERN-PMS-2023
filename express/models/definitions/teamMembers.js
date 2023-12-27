const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class TeamMembers extends Model { }

TeamMembers.init(
    {
        teamMembersId: {
            type: DataTypes.STRING(60),
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: true,
        paranoid: true,
        modelName: "TeamMembers",
    }
);

module.exports = TeamMembers;
