const express = require("express");
const router = express.Router();
const courseController = require("../controllers/course.controller");
const { verifyToken } = require('../middlewares/auth.middleware')

router
  .post("/", courseController.createCourse)
  .get("/slug/:slug", courseController.getCourseBySlug)
  .get("/id/:id", courseController.getCourseById)
  .get("/", courseController.getAllCourses)
  .put("/:id", verifyToken, courseController.updateCourseById)
  .delete("/:id", verifyToken, courseController.deleteCourseById);

module.exports = router;
