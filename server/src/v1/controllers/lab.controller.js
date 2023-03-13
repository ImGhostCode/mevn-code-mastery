const LabService = require("../services/lab.service");
const ApiError = require("../utils/apiError");

module.exports = {
  createLab: async (req, res, next) => {
    try {
      const { title, description, authorID, imgUrl, videoUrl, steps, tags } =
        req.body;
      const labService = new LabService();
      const result = await labService.create({
        title,
        description,
        authorID,
        imgUrl,
        videoUrl,
        steps,
        tags,
      });
      return res.json(result);
    } catch (error) {
      return next(new ApiError(400, "failed", error.message, null));
    }
  },

  getAllLabs: async (req, res, next) => {
    try {
      const labService = new LabService();
      const result = await labService.findAllLab({});
      return res.json(result);
    } catch (error) {
      return next(new ApiError(400, "failed", error.message, null));
    }
  },
  getLabById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const labService = new LabService();
      const result = await labService.findLabById({ id });
      return res.json(result);
    } catch (error) {
      console.log(error);
      return next(new ApiError(400, "failed", error.message, null));
    }
  },
  getLabBySlug: async (req, res, next) => {
    try {
      const { slug } = req.params;
      const labService = new LabService();
      const result = await labService.findLabBySlug({ slug });
      return res.json(result);
    } catch (error) {
      console.log(error);
      return next(new ApiError(400, "failed", error.message, null));
    }
  },
  updateLabById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { title, description, authorID, imgUrl, videoUrl, steps, tags } =
        req.body;

      const labService = new LabService();
      const result = await labService.updateLab({
        id,
        title,
        description,
        authorID,
        imgUrl,
        videoUrl,
        steps,
        tags,
      });
      return res.json(result);
    } catch (error) {
      return next(new ApiError(400, "failed", error.message, null));
    }
  },
  deleteLabById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const labService = new LabService();

      const result = await labService.deleteLabById({ id });
      return res.json(result);
    } catch (error) {
      return next(new ApiError(400, "failed", error.message, null));
    }
  },
};
