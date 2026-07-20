const express = require("express");
const router = express.Router();

const {
  getApplications,
  getApplicationById,
  createApplication,
  updateApplication,
  deleteApplication,
} = require("../controllers/applicationController");

// GET All Applications
router.get("/", getApplications);

// GET Application By ID
router.get("/:id", getApplicationById);

// POST Application
router.post("/", createApplication);

// PUT Application
router.put("/:id", updateApplication);

// DELETE Application
router.delete("/:id", deleteApplication);

module.exports = router;