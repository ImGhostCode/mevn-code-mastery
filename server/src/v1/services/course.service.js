const _Course = require("../models/_Course.model");
const _Contributor = require("../models/_Contributor.model");
const ApiError = require("../utils/apiError");
const ApiRes = require("../utils/apiRes");

class courseService {
  constructor() { }

  async create({
    title,
    description,
    authorID,
    imgUrl,
    videoUrl,
    willLearn,
    price,
    chapters,
    tags,
    students,
  }) {
    const course = await _Course.findOne({
      title: {
        $regex: new RegExp(title),
        $options: "i",
      },
    });
    console.log(course);
    if (course) {
      throw new ApiError(400, "failed", "Course already exists!");
    }
    const newCourse = new _Course({
      title,
      description,
      authorID,
      imgUrl,
      videoUrl,
      willLearn,
      price,
      chapters,
      tags,
      students,
    });

    await _Contributor.findByIdAndUpdate(authorID, {
      $push: {
        courses: newCourse._id
      }
    })

    return new ApiRes(
      200,
      "success",
      "Course creared successfull",
      await newCourse.save()
    );
  }

  async findAllCourse({ }) {
    const courses = await _Course.find({}).sort({ updatedAt: -1 });
    return new ApiRes(200, "success", null, courses);
  }

  async findCourseById({ id }) {
    const course = await _Course.findById(id);
    if (!course) throw new ApiError(400, "failed", "CourseID not found");
    return new ApiRes(200, "success", null, course);
  }
  async findCourseBySlug({ slug }) {
    const course = await _Course.findOne({
      slug: {
        $regex: new RegExp(slug),
        $options: "i",
      },
    }).populate('authorID');
    if (!course) throw new ApiError(400, "failed", "Slug not found");
    return new ApiRes(200, "success", null, course);
  }
  async updateCourse({ id, ...updatedFields }) {
    // const course = await _Course.findById(id);
    // if (!course) return new ApiRes(400, "failed", "CourseID not found", null);
    // Object.assign(course, updatedFields);
    const course = await _Course.findByIdAndUpdate(
      id,
      {
        $set: updatedFields,
      },
      { returnDocument: "after" }
    );

    if (!course) throw new ApiError(404, "failed", "CourseID not found");

    return new ApiRes(200, "success", null, await course.save());
  }
  // const user = await _Course.findOneAndUpdate({ _id: id }, updatedFields, {
  //   new: true,
  // });
  // return new ApiRes(200, "success", null, user);
  //   }

  async deleteCourseById({ id }) {
    const result = await _Course.findOneAndDelete({ _id: id });
    return new ApiRes(200, "success", null, result);
  }
}

module.exports = courseService;
