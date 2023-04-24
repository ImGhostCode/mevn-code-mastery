const UserService = require("../services/user.service");
const ApiError = require("../utils/apiError");

module.exports = {
  getAllUsers: async (req, res, next) => {
    try {
      const userService = new UserService();
      const result = await userService.findAllUsers({});
      return res.json(result);
    } catch (error) {
      return res.json({ ...error, message: error.message })
    }
  },
  getUserById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const userService = new UserService();
      const result = await userService.findUserById({ id });
      return res.json(result);
    } catch (error) {
      return res.json({ ...error, message: error.message })
    }
  },
  updateUserById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { username, city, phone } = req.body;

      const userService = new UserService();
      const result = await userService.updateUser({
        id,
        username,
        city,
        phone,
      });
      return res.json(result);
    } catch (error) {
      return res.json({ ...error, message: error.message })
    }
  },
  enrollCourse: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { courseId } = req.body;
      console.log({ id, courseId });
      const userService = new UserService();
      const result = await userService.enrollCourse({ id, courseId })
      return res.json(result);
    } catch (error) {
      return res.json({ ...error, message: error.message })
    }
  },
  deleteUserById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const userService = new UserService();

      const result = await userService.deleteUserById({ id });
      return res.json(result);
    } catch (error) {
      return res.json({ ...error, message: error.message })
    }
  },
};
