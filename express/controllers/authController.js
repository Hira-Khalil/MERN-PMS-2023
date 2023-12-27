const authService = require("../services/authService");
const joi = require("joi");

const loginSchema = joi.object().keys({
    email: joi.string().required().email(),
    password: joi.string().required().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
});
const signUpSchema = joi.object().keys({
    firstName: joi.string().required().min(3).max(40),
    lastName: joi.string().required().min(3).max(40),
    email: joi.string().required().email(),
    password: joi.string().required().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    confirmPassword: joi.ref("password")
})
module.exports = {
    login: async (req, res) => {
        try {
            const validate = await loginSchema.validateAsync(req.body);
            const loginResponse = await authService.login(validate);
            if (loginResponse.error) {
                return res.send({
                    error: loginResponse.error,
                });
            }
            res.cookie("auth", loginResponse.response)
            return res.send({
                response: loginResponse.response,
            });
        } catch (error) {
            return res.send({
                error: error,
            });
        }
    },
    logout: (req, res) => {
        try {
            const loginResponse = authService.logout(req.body);
            if (loginResponse.error) {
                res.send({
                    error: loginResponse.error,
                });
            }
            res.send({
                response: loginResponse.response,
            });
        }
        catch (error) {
            req.send({
                error: error,
            });
        }
    },
    signup: async (req, res) => {
        try {
            const validate = await signUpSchema.validateAsync(req.body);
            const signupResponse = await authService.signup(validate);
            if (signupResponse.error) {
                res.send({
                    error: signupResponse.error,
                });
            }
            res.send({
                response: signupResponse.response,
            });
        }
        catch (error) {
            res.send({
                error: error,
            });
        }
    },
    forgot: (req, res) => {
        try {
            const loginResponse = authService.forgot();
            if (loginResponse.error) {
                req.send({
                    error: loginResponse.error,
                });
            }
            res.send({
                response: loginResponse.response,
            });
        }
        catch (error) {
            req.send({
                error: error,
            });
        }
    },
    reset: (req, res) => {
        try {
            const loginResponse = authService.reset();
            if (loginResponse.error) {
                req.send({
                    error: loginResponse.error,
                });
            }
            res.send({
                response: loginResponse.response,
            });
        }
        catch (error) {
            req.send({
                error: error,
            });
        }
    }
}