const express = require("express");
const { register, login, showUser, logout, GoogleSignIn } = require("../controllers/authController");
const passport = require("passport");


const router = express.Router();



router.post('/register', register)
router.post('/login', login)
router.get('/showUser', showUser)
router.get('/logout', logout)
router.post('/google/callback', passport.authenticate('google'), GoogleSignIn)
module.exports = router;