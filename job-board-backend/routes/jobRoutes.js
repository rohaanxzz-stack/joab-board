const express = require("express");
const router = express.Router();

const {
  getJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobController");

// GET All Jobs (Search Included)
router.get("/", getJobs);

// GET Job By ID
router.get("/:id", getJobById);

// POST Job
router.post("/", createJob);

// PUT Job
router.put("/:id", updateJob);

// DELETE Job
router.delete("/:id", deleteJob);

module.exports = router;