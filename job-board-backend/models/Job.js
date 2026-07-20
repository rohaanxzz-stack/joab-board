const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 100,
    },

    description: {
      type: String,
      required: true,
      minlength: 20,
    },

    requirements: [
      {
        type: String,
      },
    ],

    salaryMin: {
      type: Number,
      required: true,
    },

    salaryMax: {
      type: Number,
      required: true,
    },

    type: {
      type: String,
      enum: ["full-time", "part-time", "remote"],
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },

    postedDate: {
      type: Date,
      default: Date.now,
    },

    deadline: {
      type: Date,
      required: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Job", jobSchema);