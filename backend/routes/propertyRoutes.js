const express = require("express");
const {
 
  getSingleProperty,
  createProperty,
  deleteProperty,
  getAllProperties,
} = require("../controllers/propertyController");
const { authorizePermission, authenticateUser } = require("../middleware/authentication");

const router = express.Router();

router.get("/", getAllProperties);
router.get("/:id", getSingleProperty);
router.post("/", createProperty);
router.delete("/:id",authenticateUser, authorizePermission('admin'),deleteProperty )

module.exports = router;
