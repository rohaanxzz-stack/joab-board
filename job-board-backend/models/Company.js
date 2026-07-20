const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Company name is required"],
      minlength: 2,
      maxlength: 100,
    },

    logo: {
      type: String,
      required: true,
    },

    website: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
      minlength: 20,
      maxlength: 500,
    },

    industry: {
      type: String,
      required: true,
    },

    foundedYear: {
      type: Number,
      required: true,
      min: 1900,
      max: new Date().getFullYear(),
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Company", companySchema);