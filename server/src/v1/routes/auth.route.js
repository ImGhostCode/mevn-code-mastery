const express = require("express");
const { authController } = require("../controllers/index.controller");
const router = express.Router();

router
  .post("/register", authController.registerController)
  .post("/login", authController.loginController);

module.exports = router;
