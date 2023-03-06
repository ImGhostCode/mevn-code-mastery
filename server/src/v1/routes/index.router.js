const express = require("express");
const router = express.Router();
const usersRoute = require("./user.route");
const courseRoute = require("./course.route");
const labRoute = require("./lab.route");

router.use("/users", usersRoute);
router.use("/courses", courseRoute);
router.use("/labs", labRoute);

module.exports = router;
