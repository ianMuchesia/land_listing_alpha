const express = require("express");
const {
  getAllProducts,
  getSingleProperty,
} = require("../controllers/propertyController");

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getSingleProperty);

module.exports = router;
