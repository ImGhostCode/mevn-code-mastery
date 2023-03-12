const express = require("express");
const router = express.Router();
const courseController = require("../controllers/course.controller");

router
  .post("/", courseController.createCourse)
  .get("/slug/:slug", courseController.getCourseBySlug)
  .get("/id/:id", courseController.getCourseById)
  .get("/", courseController.getAllCourses)
  .put("/:id", courseController.updateCourseById)
  .delete("/:id", courseController.deleteCourseById);

module.exports = router;
