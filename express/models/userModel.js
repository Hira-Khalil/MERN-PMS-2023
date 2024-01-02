const { models } = require("./index");
const { Op } = require("sequelize")
module.exports = {
    createUser: async (body, userId) => {
        try {
            const user = await models.Users.create({
                userId,
                ...body,
            });
            return {
                response: user,
            };
        } catch (error) {
            return {
                error: error,
            };
        }
    },

    getUserByEmail: async (email) => {
        try {
            const user = await models.Users.findOne({
                where: {
                    email: email,
                },
            });
            return {
                response: user,
            };
        } catch (error) {
            return {
                error: error,
            };
        }
    },
    getAllUsers: async (offset, query) => {
        try {
            const users = await models.Users.findAll({
                attributes: {
                    exclude: ["password", "createdAt", "updatedAt", "deletedAt"],
                },
                where: [{
                    ...(query.userId ?
                        { userId: query.userId }
                        : true),
                },
                {
                    ...(query.firstname ?
                        { firstname: { [Op.substring]: query.firstname } }
                        : true),
                },
                {
                    ...(query.lastName ?
                        { lastName: { [Op.substring]: query.lastName } }
                        : true),
                },

                {
                    ...(query.email ?
                        { email: { [Op.substring]: query.email } }
                        : true),
                },
                {
                    ...(query.role ?
                        { role: { [Op.in]: [query.role] } }
                        : true),
                },
                ],
                offset: offset,
                limit: query.limit,
                order: [[query.sortValue, query.sortOrder]]

            })
            return {
                response: users,
            };
        } catch (error) {
            console.log("error", error)
            return {
                error: error,
            };
        }
    },
    deleteUser: async (userId) => {
        try {
            const user = await models.Users.destroy({
                where: {
                    userId: userId,
                },
            });
            return {
                response: user,
            };
        } catch (error) {
            return {
                error: error,
            };
        }

    },

    updateUser: async (body) => {
        try {
            const user = await models.Users.update({
                ...body,

            },
                {
                    where: {
                        userId: body.userId,
                    }
                });
            return {
                response: user,
            };
        } catch (error) {
            return {
                error: error,
            };
        }

    },
    onBoarding: async (userId, instructorId) => {
        try {
            const user = await models.Users.update(
                {
                    isRequested: true,
                    instructorId,
                },
                {
                    where: {
                        userId: userId,
                    },
                }
            );

            return {
                response: user,
            };
        } catch (error) {
            return {
                error: error,
            };
        }
    },
};