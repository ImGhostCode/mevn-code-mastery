const _Lab = require("../models/_Lab.model");
const ApiError = require("../utils/apiError");
const ApiRes = require("../utils/apiRes");

class labService {
  constructor() { }

  async create({
    title,
    description,
    authorID,
    imgUrl,
    videoUrl,
    steps,
    tags,
  }) {
    const lab = await _Lab.findOne({
      title: {
        $regex: new RegExp(title),
        $options: "i",
      },
    });
    console.log(lab);
    if (lab) {
      throw new ApiError(400, "failed", "Lab already exists!");
    }
    const newLab = new _Lab({
      title,
      description,
      authorID,
      imgUrl,
      videoUrl,
      steps,
      tags,
    });

    return new ApiRes(
      200,
      "success",
      "Lab creared successfull",
      await newLab.save()
    );
  }

  async findAllLab({ }) {
    const labs = await _Lab.find({});
    return new ApiRes(200, "success", null, labs);
  }

  async findLabById({ id }) {
    const lab = await _Lab.findById(id);
    if (!lab) throw new ApiError(400, "failed", "LabID not found");
    return new ApiRes(200, "success", null, lab);
  }
  async findLabBySlug({ slug }) {
    const lab = await _Lab.findOne({
      slug: {
        $regex: new RegExp(slug),
        $options: "i",
      },
    });
    if (!lab) throw new ApiRes(400, "failed", "Slug not found");
    return new ApiRes(200, "success", null, lab);
  }
  async updateLab({ id, ...updatedFields }) {
    // const lab = await _Lab.findById(id);
    // if (!lab) return new ApiRes(400, "failed", "labID not found", null);
    // Object.assign(lab, updatedFields);
    const lab = await _Lab.findByIdAndUpdate(
      id,
      {
        $set: updatedFields,
      },
      { returnDocument: "after" }
    );

    if (!lab) throw new ApiError(400, "failed", "LabID not found");

    return new ApiRes(200, "success", null, await lab.save());
  }
  // const user = await _Lab.findOneAndUpdate({ _id: id }, updatedFields, {
  //   new: true,
  // });
  // return new ApiRes(200, "success", null, user);
  //   }

  async deleteLabById({ id }) {
    const result = await _Lab.findOneAndDelete({ _id: id });
    return new ApiRes(200, "success", null, result);
  }
}

module.exports = labService;
