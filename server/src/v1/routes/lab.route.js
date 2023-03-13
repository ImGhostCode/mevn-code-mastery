const express = require("express");
const router = express.Router();
const labController = require("../controllers/lab.controller");

router
  .post("/", labController.createLab)
  .get("/slug/:slug", labController.getLabBySlug)
  .get("/id/:id", labController.getLabById)
  .get("/", labController.getAllLabs)
  .put("/:id", labController.updateLabById)
  .delete("/:id", labController.deleteLabById);

module.exports = router;
