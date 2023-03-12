const CourseService = require("../services/course.service");
const ApiError = require("../utils/apiError");

module.exports = {
  createCourse: async (req, res, next) => {
    try {
      const {
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
      } = req.body;
      const courseService = new CourseService();
      const result = await courseService.create({
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
      return res.json(result);
    } catch (error) {
      return next(new ApiError(400, "failed", error.message, null));
    }
  },

  getAllCourses: async (req, res, next) => {
    try {
      const courseService = new CourseService();
      const result = await courseService.findAllCourse({});
      return res.json(result);
    } catch (error) {
      return next(new ApiError(400, "failed", error.message, null));
    }
  },
  getCourseById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const courseService = new CourseService();
      const result = await courseService.findCourseById({ id });
      return res.json(result);
    } catch (error) {
      console.log(error);
      return next(new ApiError(400, "failed", error.message, null));
    }
  },
  getCourseBySlug: async (req, res, next) => {
    try {
      const { slug } = req.params;
      const courseService = new CourseService();
      const result = await courseService.findCourseBySlug({ slug });
      return res.json(result);
    } catch (error) {
      console.log(error);
      return next(new ApiError(400, "failed", error.message, null));
    }
  },
  updateCourseById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const {
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
      } = req.body;

      const courseService = new CourseService();
      const result = await courseService.updateCourse({
        id,
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
      return res.json(result);
    } catch (error) {
      return next(new ApiError(400, "failed", error.message, null));
    }
  },
  deleteCourseById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const courseService = new CourseService();

      const result = await courseService.deleteCourseById({ id });
      return res.json(result);
    } catch (error) {
      return next(new ApiError(400, "failed", error.message, null));
    }
  },
};
