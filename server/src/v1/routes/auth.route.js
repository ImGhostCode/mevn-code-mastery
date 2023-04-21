const express = require("express");
const { authController } = require("../controllers/index.controller");
const { verifyToken } = require("../middlewares/auth.middleware");
const router = express.Router();

router
  .post("/register", authController.registerController)
  .post("/login", authController.loginController)
  .post('/logout', authController.logoutUser)
  .delete('/:userId', verifyToken, authController.deleteUser)

module.exports = router;
