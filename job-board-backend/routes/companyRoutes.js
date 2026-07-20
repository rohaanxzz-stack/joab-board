const express = require("express");
const router = express.Router();

const {
  getCompanies,
  getCompanyById,
  createCompany,
  updateCompany,
  deleteCompany,
} = require("../controllers/companyController");

// GET All Companies
router.get("/", getCompanies);

// GET Company By ID
router.get("/:id", getCompanyById);

// POST Create Company
router.post("/", createCompany);

// PUT Update Company
router.put("/:id", updateCompany);

// DELETE Company
router.delete("/:id", deleteCompany);

module.exports = router;