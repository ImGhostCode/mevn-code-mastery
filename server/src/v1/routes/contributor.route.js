const express = require("express");
const contributorController = require("../controllers/contributor.controller");
const router = express.Router();
const { verifyToken } = require('../middlewares/auth.middleware')
const { upload } = require('../middlewares/upload.middleware')

router
  .post("/", verifyToken, upload.single('image'), contributorController.createContributor)
  .get("/slug/:slug", contributorController.getContributorBySlug)
  .get("/id/:id", contributorController.getContributorById)
  .get("/", contributorController.getAllContributors)
  .put("/:id", contributorController.updateContributorById)
  .delete("/:id", contributorController.deleteContributorById);

module.exports = router;
