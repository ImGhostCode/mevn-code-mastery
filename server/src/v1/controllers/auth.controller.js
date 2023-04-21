const AuthService = require("../services/auth.service");
const ApiError = require("../utils/apiError");
const ApiRes = require("../utils/apiRes");
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
      res.cookie('accessToken', response.data.token, { httpOnly: true, secure: false, path: '/', sameSite: 'strict' })
      return res.json(response);
    } catch (error) {
      return res.json({ ...error, message: error.message })
    }
  },

  logoutUser: async (req, res, next) => {
    try {
      await res.clearCookie("accessToken")
      return res.json(new ApiRes(200, 'success', 'Logout successful', null))
    } catch (error) {
      return res.json({ ...error, message: error.message })
    }
  },

  deleteUser: async (req, res, next) => {
    try {
      const authService = new AuthService()
      const { userId } = req.params
      const result = await authService.deleteUser({ userId })
      return res.json(result)
    } catch (error) {
      return res.json({ ...error, message: error.message })
    }
  },
};
