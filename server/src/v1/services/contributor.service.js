const _Contributor = require("../models/_Contributor.model");
const _User = require("../models/_User.model");
const ApiError = require("../utils/apiError");
const ApiRes = require("../utils/apiRes");


class contributorService {
  constructor() { }

  async create({ name, imageUrl, url, bio, courses, userId }) {
    const contributor = await _Contributor.findOne({
      name: {
        $regex: new RegExp(name),
        $options: "i",
      },
    });
    console.log(contributor);
    if (contributor) {
      throw new ApiError(400, "failed", "Contributor already exists!");
    }
    const newContributor = new _Contributor({
      name,
      imageUrl,
      url,
      bio,
      courses,
    });

    await _User.findOneAndUpdate({ _id: userId }, {
      $set: {
        contributorId: newContributor._id
      }
    })

    return new ApiRes(
      200,
      "success",
      "Contributor created successfull",
      await newContributor.save()
    );
  }

  async findAllContributor({ }) {
    const contributors = await _Contributor.find({});
    return new ApiRes(200, "success", null, contributors);
  }

  async findContributorById({ id }) {
    const contributor = await _Contributor.findById(id);
    if (!contributor)
      throw new ApiError(400, "failed", "ContributorID not found");
    return new ApiRes(200, "success", null, contributor);
  }
  async findContributorBySlug({ slug }) {
    const contributor = await _Contributor.findOne({
      slug: {
        $regex: new RegExp(slug),
        $options: "i",
      },
    }).populate('courses').populate('labs');
    if (!contributor) throw new ApiError(404, "failed", "Slug not found");
    return new ApiRes(200, "success", null, contributor);
  }
  async updateContributor({ id, ...updatedFields }) {
    const contributor = await _Contributor.findById(id);
    if (!contributor)
      throw new ApiError(404, "failed", "ContributorID not found");
    Object.assign(contributor, updatedFields);
    return new ApiRes(200, "success", null, await contributor.save());
  }
  // const user = await _Contributor.findOneAndUpdate({ _id: id }, updatedFields, {
  //   new: true,
  // });
  // return new ApiRes(200, "success", null, user);
  //   }

  async deleteContributorById({ id }) {
    const result = await _Contributor.findOneAndDelete({ _id: id });
    return new ApiRes(200, "success", null, result);
  }
}

module.exports = contributorService;
