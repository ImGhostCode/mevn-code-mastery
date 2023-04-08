const AuthService = require("../services/auth.service");
const ApiError = require("../utils/apiError");
module.exports = {
  registerController: async (req, res, next) => {
    try {
      const { username, email, phone, password } = req.body;
      const authService = new AuthService();
      const response = await authService.register({
        username,
        email,
        phone,
        password,
      });

      return res.json(response);
    } catch (error) {
      return res.json({ ...error, message: error.message })
    }
  },
  loginController: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const authService = new AuthService();
      const response = await authService.login({
        email,
        password,
      });
      return res.json(response);
    } catch (error) {
      return res.json({ ...error, message: error.message })
    }
  },
};
