const _Contributor = require("../models/_Contributor.model");
const ApiRes = require("../utils/apiRes");

class contributorService {
  constructor() {}

  async create({ name, imageUrl, url, bio, courses }) {
    const contributor = await _Contributor.findOne({
      name: {
        $regex: new RegExp(name),
        $options: "i",
      },
    });
    console.log(contributor);
    if (contributor) {
      return new ApiRes(400, "failed", "Contributor already exists!");
    }
    const newUser = new _Contributor({ name, imageUrl, url, bio, courses });

    return new ApiRes(
      200,
      "success",
      "Contributor creared successfull",
      await newUser.save()
    );
  }

  async findAllContributor({}) {
    const contributors = await _Contributor.find({});
    return new ApiRes(200, "success", null, contributors);
  }

  async findContributorById({ id }) {
    const contributor = await _Contributor.findById(id);
    if (!contributor)
      return new ApiRes(400, "failed", "ContributorID not found", null);
    return new ApiRes(200, "success", null, contributor);
  }
  async findContributorBySlug({ slug }) {
    const contributor = await _Contributor.findOne({
      slug: {
        $regex: new RegExp(slug),
        $options: "i",
      },
    });
    if (!contributor) return new ApiRes(400, "failed", "Slug not found", null);
    return new ApiRes(200, "success", null, contributor);
  }
  async updateContributor({ id, ...updatedFields }) {
    const contributor = await _Contributor.findById(id);
    if (!contributor)
      return new ApiRes(400, "failed", "ContributorID not found", null);
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
