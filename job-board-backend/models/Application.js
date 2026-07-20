const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },

    applicantName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      match: /^\S+@\S+\.\S+$/,
    },

    phone: {
      type: String,
      required: true,
    },

    coverLetter: {
      type: String,
      required: true,
      minlength: 20,
    },

    resumeURL: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "reviewed", "accepted", "rejected"],
      default: "pending",
    },

    appliedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Application", applicationSchema);