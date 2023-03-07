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
      return next(new ApiError(400, "failed", error.message, null));
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
      return next(new ApiError(400, "failed", error.message, null));
    }
  },
};
