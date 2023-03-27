const _User = require("../models/_User.model");
const ApiRes = require("../utils/apiRes");
const bcrypt = require("bcryptjs");

class AuthService {
  constructor() {}

  async register({ username, email, phone, password }) {
    const user = await _User.findOne({ email });
    console.log(user);
    if (user) {
      return new ApiRes(400, "failed", "Email already exists!", null);
    }
    const newUser = new _User({ username, email, phone, password });

    return new ApiRes(200, "success", "register service", await newUser.save());
  }
  async login({ email, password }) {
    const user = await _User.findOne({ email });
    if (!user) {
      return new ApiRes(404, "failed", "User not found", null);
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return new ApiRes(400, "failed", "Invalid Password", null);
    return new ApiRes(200, "success", "Login successfull", user);
  }
}

module.exports = AuthService;
