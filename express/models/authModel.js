
const { models } = require("./index");


module.exports = {
    login: async (email) => {
        try {
            const user = await models.Users.findOne({
                where: {
                    email: email,
                },
                attriutes: {
                    exclude: ["createdAt", "updatedAt", "deletedAt"]
                }
            });
            return {
                response: user,

            };
        }
        catch (error) {
            return {
                error: error,
            };
        }
    },
    logout: () => {
        try {
            return {
                response: "you are logged out",

            };
        }
        catch (error) {
            return {
                error: error
            };
        }
    },
    signup: async (body) => {
        try {
            return {
                response: body,

            };
        }
        catch (error) {
            return {
                error: error,
            };
        }
    },
    forgot: () => {
        try {
            return {
                response: "you  Forgoted password",

            };
        }
        catch (error) {
            return {
                error: error
            };
        }
    },
    reset: () => {
        try {
            return {
                response: "you  reseted password",

            };
        }
        catch (error) {
            return {
                error: error
            };
        }
    }

}