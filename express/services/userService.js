const userModel = require("../models/userModel");
const { v4: uuidV4 } = require("uuid");
const bycrypt = require("bcryptjs");

module.exports = {
    createUser: async (body) => {
        try {
            const userId = uuidV4();
            const isUser = await userModel.getUserByEmail(body.email);
            if (!isUser.response || isUser.error) {
                return {
                    error: "user with email already exists",
                };
            }
            delete body.confirmPassword;
            body.password = await bycrypt.hash(body.password, 10);
            const user = await userModel.createUser(body, userId);
            if (user.error) {
                return {
                    error: user.error,
                };
            }
            delete user.response.dataValues.password;
            return {
                response: user.response,
            };
        } catch (error) {
            return {
                error: error,
            };
        }
    },
    getAllUsers: async (query) => {
        try {
            const offset = (query.pageNo - 1) * query.limit;
            const users = await userModel.getAllUsers(offset, query);
            if (users.error) {
                return {
                    error: users.error,
                };
            }
            return {
                response: users.response,
            };
        } catch (error) {
            return {
                error: error,
            };
        }
    },

    deleteUser: async (query) => {
        try {
            const user = await userModel.deleteUser(query.userId);
            if (user.error) {
                return {
                    error: user.error,
                };
            }
            return {
                response: user.response,
            };
        } catch (error) {
            return {
                error: error,
            };
        }
    },

    updateUser: async (body) => {
        try {
            const isUser = await userModel.getUserByEmail(body.email);
            if (!isUser.response || isUser.error) {
                return {
                    error: "user does not exists",
                };
            }
            const user = await userModel.updateUser(body);
            if (user.error) {
                return {
                    error: user.error,
                };
            }
            return {
                response: user.response,
            };
        } catch (error) {
            return {
                error: error,
            };
        }
    },
    onBoarding: async (body) => {
        try {
            const user = await userModel.onBoarding(body.userId, body.instructorId);
            if (!user.response || user.error) {
                return {
                    error: "user does not exist",
                };
            }

            return {
                response: user.response,
            };
        } catch (error) {
            return {
                error: error,
            };
        }
    },
};