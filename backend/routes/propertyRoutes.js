const express = require("express");
const {
  getAllProducts,
  getSingleProperty,
  createProperty,
  deleteProperty,
} = require("../controllers/propertyController");
const { authorizePermission, authenticateUser } = require("../middleware/authentication");

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getSingleProperty);
router.post("/", authenticateUser ,authorizePermission('admin'), createProperty);
router.delete("/:id",authenticateUser, authorizePermission('admin'),deleteProperty )

module.exports = router;
