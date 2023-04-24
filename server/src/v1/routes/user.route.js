const express = require("express");
const userController = require("../controllers/user.controller");
const router = express.Router();

router
  .get("/:id", userController.getUserById)
  .post("/enroll/:id", userController.enrollCourse)
  .get("/", userController.getAllUsers)
  .put("/:id", userController.updateUserById)
  .delete("/:id", userController.deleteUserById);

module.exports = router;
