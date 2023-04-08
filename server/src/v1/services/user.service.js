const _User = require("../models/_User.model");
const ApiError = require("../utils/apiError");
const ApiRes = require("../utils/apiRes");

class userService {
  constructor() { }

  async findAllUsers({ }) {
    const users = await _User.find({});
    return new ApiRes(200, "success", null, users);
  }

  async findUserById({ id }) {
    const user = await _User.findById(id);
    if (!user) throw new ApiError(400, "failed", "UserId not found");
    return new ApiRes(200, "success", null, user);
  }
  async updateUser({ id, ...updatedFields }) {
    const user = await _User.findById(id);
    if (!user) throw new ApiError(400, "failed", "UserId not found");
    Object.assign(user, updatedFields);
    return new ApiRes(200, "success", null, await user.save());

    // const user = await _User.findOneAndUpdate({ _id: id }, updatedFields, {
    //   new: true,
    // });
    // return new ApiRes(200, "success", null, user);
  }

  async deleteUserById({ id }) {
    const result = await _User.findOneAndDelete({ _id: id });
    return new ApiRes(200, "success", null, result);
  }
}

module.exports = userService;
