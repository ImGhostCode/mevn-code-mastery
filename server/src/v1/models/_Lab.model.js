const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");

const LabSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      slug: "title",
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    authorID: {
      type: Schema.Types.ObjectId,
      ref: "Contributor",
    },
    imgUrl: {
      type: String,
      required: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
    steps: [
      {
        type: String,
        required: true,
      },
    ],
    tags: [{ type: String, required: true }],
  },
  {
    timestamps: true,
  }
);

mongoose.plugin(slug);

module.exports = mongoose.model("Lab", LabSchema);
