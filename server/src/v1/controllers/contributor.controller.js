const ContributorService = require("../services/contributor.service");
const ApiError = require("../utils/apiError");

module.exports = {
  createContributor: async (req, res, next) => {
    try {
      const { name, imageUrl, url, bio, courses } = req.body;
      const contributorService = new ContributorService();
      const result = await contributorService.create({
        name,
        imageUrl,
        url,
        bio,
        courses,
      });
      return res.json(result);
    } catch (error) {
      return next(new ApiError(400, "failed", error.message, null));
    }
  },

  getAllContributors: async (req, res, next) => {
    try {
      const contributorService = new ContributorService();
      const result = await contributorService.findAllContributor({});
      return res.json(result);
    } catch (error) {
      return next(new ApiError(400, "failed", error.message, null));
    }
  },
  getContributorById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const contributorService = new ContributorService();
      const result = await contributorService.findContributorById({ id });
      return res.json(result);
    } catch (error) {
      console.log(error);

      return next(new ApiError(400, "failed", error.message, null));
    }
  },
  getContributorBySlug: async (req, res, next) => {
    try {
      const { slug } = req.params;
      const contributorService = new ContributorService();
      const result = await contributorService.findContributorBySlug({ slug });
      return res.json(result);
    } catch (error) {
      console.log(error);
      return next(new ApiError(400, "failed", error.message, null));
    }
  },
  updateContributorById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { name, imageUrl, url, bio, labs, courses } = req.body;

      const contributorService = new ContributorService();
      const result = await contributorService.updateContributor({
        id,
        name,
        imageUrl,
        url,
        bio,
        labs,
        courses,
      });
      return res.json(result);
    } catch (error) {
      return next(new ApiError(400, "failed", error.message, null));
    }
  },
  deleteContributorById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const contributorService = new ContributorService();

      const result = await contributorService.deleteContributorById({ id });
      return res.json(result);
    } catch (error) {
      return next(new ApiError(400, "failed", error.message, null));
    }
  },
};
