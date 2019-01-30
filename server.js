// Read and set environment variables
require("dotenv").config();

// Requiring npm packages
const express = require("express");
const session = require("express-session");

// Requiring passport as we've configured it
const passport = require("./config/passport");

// Setting up port and requiring modes for syncing
const PORT = process.env.PORT || 3001;
const db = require("./models");

// Creating express app and configuring middleware for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes

// Syncing our database and staring server
db.sequelize
  .sync({force: false})
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  });