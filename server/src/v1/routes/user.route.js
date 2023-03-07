const express = require("express");
const userController = require("../controllers/user.controller");
const router = express.Router();

router
  .get("/:id", userController.getUserById)
  .get("/", userController.getAllUsers)
  .put("/:id", userController.updateUserById)
  .delete("/:id", userController.deleteUserById);

module.exports = router;
