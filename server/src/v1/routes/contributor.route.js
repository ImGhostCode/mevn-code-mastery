const express = require("express");
const contributorController = require("../controllers/contributor.controller");
const router = express.Router();

router
  .post("/", contributorController.createContributor)
  .get("/slug/:slug", contributorController.getContributorBySlug)
  .get("/id/:id", contributorController.getContributorById)
  .get("/", contributorController.getAllContributors)
  .put("/:id", contributorController.updateContributorById)
  .delete("/:id", contributorController.deleteContributorById);

module.exports = router;
