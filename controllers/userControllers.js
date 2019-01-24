const express = require("express");

const router = express.Router();

const db = require("../models/users");

// METHODS TO EDIT DB

// add new user to DB
router.post("/api/users", function(req, res) {
  db
    .insertOne([
      "username",
    ], [
      req.body.username, 
    ], 
    result => {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
});

// Retrieve user login when signing into app
router.get("/", function(req, res) {
  db
    .selectAll(function(data) {
      const userLogin = {
        db: data
      };
      console.log(userLogin);
      res.render("index", userLogin);
    });
});

module.exports = router;