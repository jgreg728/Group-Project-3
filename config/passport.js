const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");

// Telling passport we want to use a Local Strategy - email and password
passport.use(new LocalStrategy(
  // User will sign in with email
  {
    usernameField: "email"
  },
  (email, password, done) => {
    // When user tries to sing in this code runs
    db.User.findOne({
      where: {
        email: email
      }
    })
    .then((dbuser) => {
      // If the email is not found
      if (!dbuser) {
        return done(null, false, {
          message: "Incorrect email."
        });
      }
      // If email found, but password incorrect
      else if (!dbuser.validPassword(passord)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // return the user
      return done(null, dbUser);
    });
  }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialze and deserialize the user
passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;