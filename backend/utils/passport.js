const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
    },
    (accessToken, refreshToken, profile, done) => {
      // Handle the user authentication logic here

      console.log(profile);
      const user = { id: profile.id, name: profile.displayName };

      const token = jwt.sign(user, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_LIFETIME,
      });
      done(null, { user, token });
    }
  )
);
