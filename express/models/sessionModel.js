const { models } = require("./index");
const { Op } = require("sequelize");

module.exports = {
    createSession: async (sessionId, token, userId) => {
        try {
            console.log("session", sessionId, "token", token, "userId", userId)
            const session = await models.Sessions.create({
                sessionId: sessionId,
                token: token,
                userId: userId
            });
            console.log(session)
            return {

                response: session,
            };
        } catch (error) {
            return {
                error: error,
            };
        }
    },

    getSessionByUserId: async (userId) => {
        try {
            const session = await models.Sessions.findOne({
                where: {
                    userId: userId,
                },
            });
            return {
                session: session,
            };
        } catch (error) {
            return {
                error: error,
            };
        }
    },

    getSession: async (userId, token) => { // Add 'token' as a parameter
        try {
            const session = await models.Sessions.findOne({
                where: {
                    userId: userId,
                    token: token, // Use the 'token' parameter
                },
            });
            return {
                session: session,
            };
        } catch (error) {
            return {
                error: error,
            };
        }
    },

    deleteSession: async (userId) => {
        try {
            const session = await models.Sessions.destroy({
                where: {
                    userId: userId,
                },
            });
            return {
                response: session,
            };
        } catch (error) {
            return {
                error: error,
            };
        }
    },
};
