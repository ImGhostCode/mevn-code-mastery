const ContributorService = require("../services/contributor.service");
const ApiError = require("../utils/apiError");
const cloudinary = require('cloudinary').v2;
const config = require('../config/index')
cloudinary.config({
  cloud_name: config.cloudinary.cloud_name,
  api_key: config.cloudinary.api_key,
  api_secret: config.cloudinary.api_secret
});

module.exports = {
  createContributor: async (req, res, next) => {
    try {

      let { newContributor } = req.body;
      const { _id: userId } = req.user
      newContributor = JSON.parse(newContributor)
      const contributorService = new ContributorService();
      if (!newContributor.name || !newContributor.url || !newContributor.bio || !req.file) {
        throw new ApiError(400, 'failed', 'Please fill all the fields')
      }
      // console.log({ newContributor, file: req.file });
      // const response = await cloudinary.uploader.upload(`../public/images/${req.file.filename}`, {
      //   public_id: newContributor.name, resource_type: "auto",
      //   folder: "my_folder",
      //   overwrite: true,
      // })
      // let urlPic = response.secure_url
      // console.log({ urlPic });/
      const result = await contributorService.create({
        ...newContributor, imageUrl: req.file.filename, userId
      });
      return res.json(result);

    } catch (error) {
      return res.json({ ...error, message: error.message })
    }
  },

  getAllContributors: async (req, res, next) => {
    try {
      const contributorService = new ContributorService();
      const result = await contributorService.findAllContributor({});
      return res.json(result);
    } catch (error) {
      return res.json({ ...error, message: error.message })
    }
  },
  getContributorById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const contributorService = new ContributorService();
      const result = await contributorService.findContributorById({ id });
      return res.json(result);
    } catch (error) {
      return res.json({ ...error, message: error.message })
    }
  },
  getContributorBySlug: async (req, res, next) => {
    try {
      const { slug } = req.params;
      const contributorService = new ContributorService();
      const result = await contributorService.findContributorBySlug({ slug });
      return res.json(result);
    } catch (error) {
      return res.json({ ...error, message: error.message })
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
      return res.json({ ...error, message: error.message })
    }
  },
  deleteContributorById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const contributorService = new ContributorService();

      const result = await contributorService.deleteContributorById({ id });
      return res.json(result);
    } catch (error) {
      return res.json({ ...error, message: error.message })
    }
  },
};
