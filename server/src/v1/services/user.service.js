const _Course = require("../models/_Course.model");
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
    const user = await _User.findById(id).populate('contributorId').populate('subscriptions');
    // await _User.findByIdAndUpdate('6445cb416df9126a220dc3e7', { contributorId: '640c84254c85ce0493226cf5' });

    if (!user) throw new ApiError(400, "failed", "UserId not found");
    return new ApiRes(200, "success", null, user);
  }
  async updateUser({ id, ...updatedFields }) {
    const user = await _User.findById(id);
    if (!user) throw new ApiError(400, "failed", "UserId not found");
    Object.assign(user, updatedFields);
    return new ApiRes(200, "success", null, await user.save());


  }
  async enrollCourse({ id, courseId }) {

    // const isExist = await _User.findOne({ _id: id }, {
    //   subscriptions: {
    //     $in: [courseId]
    //   }
    // }).exec()

    // if (isExist) throw new ApiError(400, "failed", "You have already enrolled this course");

    const isEnrolled = await _User.findByIdAndUpdate(id, {
      $push: { subscriptions: courseId }
    }, {
      returnDocument: 'after'
    });

    // isEnrolled = _Course.populate(isEnrolled, {
    //   path
    // })

    await _Course.findByIdAndUpdate(courseId, {

      $inc: {
        students: 1
      }

    })
    if (!isEnrolled) throw new ApiError(400, "failed", "UserId not found");
    // Object.assign(user, updatedFields);
    return new ApiRes(200, "success", 'Enrolled', isEnrolled);
  }

  async deleteUserById({ id }) {
    const result = await _User.findOneAndDelete({ _id: id });
    return new ApiRes(200, "success", null, result);
  }
}

module.exports = userService;
