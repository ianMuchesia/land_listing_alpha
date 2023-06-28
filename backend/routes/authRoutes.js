const express = require("express");
const { register, login, showUser, logout } = require("../controllers/authController");


const router = express.Router();



router.post('/register', register)
router.post('/login', login)
router.get('/showUser', showUser)
router.get('/logout', logout)

module.exports = router;