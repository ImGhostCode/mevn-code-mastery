const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");
const CourseSchema = new Schema(
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
    students: {
      type: Number,
      required: true,
      default: 0,
    },
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

mongoose.plugin(slug);

module.exports = mongoose.model("Course", CourseSchema);
