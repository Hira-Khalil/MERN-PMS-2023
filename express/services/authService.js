const authModel = require("../models/authModel");
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config.json');
const { v4: uuidV4 } = require("uuid");
const sessionModel = require("../models/sessionModel");

module.exports = {
    login: async (body) => {
        try {
            const user = await authModel.login(body.email);
            if (user.error || !user.response) {
                return {
                    error: "invalid credentials",
                };
            }
            const login = await bcryptjs.compare(
                body.password,
                user.response.dataValues.password
            );
            if (!login) {
                return {
                    error: "invalid credentials",
                };
            }
            console.log(user.response.dataValues.userId);
            const session = await sessionModel.getSessionByUserId(user.response.dataValues.userId);
            if (session.error) {
                return {
                    error: error
                }
            }
            // console.log(session);
            const deleteSession = await sessionModel.deleteSession(user.response.dataValues.userId);
            if (deleteSession.error) {
                return {
                    error: error
                }
            }
            const token = jwt.sign(user.response.dataValues, config.jwt.secret, {
                expiresIn: "1h",
            });
            const sessionId = uuidV4();
            // console.log(sessionId)
            const createSession = await sessionModel.createSession(sessionId, token, user.response.dataValues.userId);
            // console.log("s1", createSession);
            if (createSession.error || !createSession.response) {
                return {
                    error: "Invalid user"
                }
            }
            return {
                response: token,
            };
        } catch (error) {
            return {
                error: error,
            };
        }
    },
    logout: (body) => {
        try {
            const logoutResponse = authModel.logout(body);
            console.log("req body data", body)
            var number = body.number;
            if (number % 2 === 0) {
                console.log("number is even");
            } else {
                console.log("number is odd");

            }
            if (logoutResponse.error) {
                return {
                    error: loginResponse.error,
                };
            }
            return {
                response: logoutResponse.response,
            };
        } catch (error) {
            return {
                error: error,
            };
        }
    },
    signup: async (body) => {
        try {

            // delete body.confirmPassword;
            console.log("check Service");
            body.password = await bcryptjs.hash(body.password, 2);
            const signupResponse = await authModel.signup(body);
            if (signupResponse.error) {
                return {
                    error: signupResponse.error,
                };
            }
            return {
                response: signupResponse.response,
            };
        } catch (error) {
            return {
                error: error,
            };
        }
    },
    forgot: () => {
        try {
            const loginResponse = authModel.forgot();
            if (loginResponse.error) {
                return {
                    error: loginResponse.error,
                };
            }
            return {
                response: loginResponse.response,
            };
        } catch (error) {
            return {
                error: error,
            };
        }
    },
    reset: () => {
        try {
            const loginResponse = authModel.reset();
            if (loginResponse.error) {
                return {
                    error: loginResponse.error,
                };
            }
            return {
                response: loginResponse.response,
            };
        } catch (error) {
            return {
                error: error,
            };
        }
    },
}