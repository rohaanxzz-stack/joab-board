const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Company = require("../models/Company");
const Job = require("../models/Job");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB Connected for Seeding");

    // Delete Old Data
    await Company.deleteMany();
    await Job.deleteMany();

    // Companies
    const companies = await Company.insertMany([
      {
        name: "Google",
        logo: "https://logo.clearbit.com/google.com",
        website: "https://google.com",
        description: "Global technology company.",
        industry: "Technology",
        foundedYear: 1998,
      },
      {
        name: "Microsoft",
        logo: "https://logo.clearbit.com/microsoft.com",
        website: "https://microsoft.com",
        description: "Software and cloud company.",
        industry: "Technology",
        foundedYear: 1975,
      },
      {
        name: "Amazon",
        logo: "https://logo.clearbit.com/amazon.com",
        website: "https://amazon.com",
        description: "E-commerce and cloud computing.",
        industry: "E-Commerce",
        foundedYear: 1994,
      },
      {
        name: "Netflix",
        logo: "https://logo.clearbit.com/netflix.com",
        website: "https://netflix.com",
        description: "Streaming entertainment service.",
        industry: "Entertainment",
        foundedYear: 1997,
      },
      {
        name: "Tesla",
        logo: "https://logo.clearbit.com/tesla.com",
        website: "https://tesla.com",
        description: "Electric vehicles company.",
        industry: "Automobile",
        foundedYear: 2003,
      },
    ]);

    const jobs = [];

    const titles = [
      "React Developer",
      "Node.js Developer",
      "Python Developer",
      "Frontend Developer",
      "Backend Developer",
      "Full Stack Developer",
      "AI Engineer",
      "ML Engineer",
      "DevOps Engineer",
      "QA Engineer",
      "Software Engineer",
      "Cloud Engineer",
      "Flutter Developer",
      "Java Developer",
      "Cyber Security Analyst",
    ];

    for (let i = 0; i < 15; i++) {
      jobs.push({
        title: titles[i],
        description: `Looking for an experienced ${titles[i]}.`,
        requirements: [
          "Bachelor Degree",
          "Good Communication",
          "2+ Years Experience",
        ],
        salaryMin: 50000,
        salaryMax: 120000,
        type: i % 3 === 0 ? "full-time" : i % 3 === 1 ? "part-time" : "remote",
        location: i % 2 === 0 ? "Remote" : "New York",
        company: companies[i % 5]._id,
        deadline: new Date("2027-12-31"),
        isActive: true,
      });
    }

    await Job.insertMany(jobs);

    console.log("Database Seeded Successfully!");

    process.exit();
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });