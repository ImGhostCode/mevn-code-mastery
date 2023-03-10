const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LabSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
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
        title: {
          type: String,
          required: true,
        },
      },
    ],
    tags: [{ type: String, required: true }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Lab", CourseSchema);
