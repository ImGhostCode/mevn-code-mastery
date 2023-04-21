const _User = require("../models/_User.model");
const ApiError = require("../utils/apiError");
const ApiRes = require("../utils/apiRes");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

class AuthService {
  constructor() { }

  async register({ username, email, phone, password }) {
    const user = await _User.findOne({ email });
    console.log(user);
    if (user) {
      throw new ApiError(400, "failed", "Email already exists!");
    }
    const newUser = new _User({ username, email, phone, password });

    return new ApiRes(200, "success", "register service", await newUser.save());
  }
  async login({ email, password }) {
    const user = await _User.findOne({ email });
    if (!user) {
      throw new ApiError(404, "failed", "Email not found");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      throw new ApiError(400, "failed", "Invalid Password");
    return new ApiRes(200, "success", "Login successfull", { ...user._doc, token: generateToken(user._id), });
  }

  async deleteUser({ userId }) {
    const userDeleted = await _User.findByIdAndDelete(userId, { new: true })
    if (!userDeleted) throw new ApiError(404, 'failed', "UserId Not Found", null)
    return new ApiResponse(200, 'success', 'Delete a user successful', userDeleted)
  }

}

module.exports = AuthService;
