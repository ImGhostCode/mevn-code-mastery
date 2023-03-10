const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourseSchema = new Schema(
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
    willLearn: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    chapters: [
      {
        title: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
      },
    ],
    students: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    //   created: {
    //     type: Date,
    //     default: Date.now,
    //   },
    tags: [{ type: String, required: true }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", CourseSchema);
