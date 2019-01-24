const express = require("express");

const router = express.Router();

const db = require("../models/activities");

// METHODS TO EDIT DB
 // find recent searched activity
 router.get("/", function(req, res) {
  db
    .selectAll(function(data) {
      const activityObj = {
        activesearch: data
      };
      console.log(activityObj);
      res.render("index", activityObj);
    });
}),

// find activity by id(?)
router.get("/api/activity", function(req, res) {
  db
    .selectAll(function(data) {
      res.json(data);
    });
});

// add an activity to a location
router.post("/api/activity", function(req, res) {
  db
    .insertOne([
      "activity",
    ], [
      req.body.activity, 
    ], 
    result => {
      // Send back the ID of the searched activity
      res.json({ id: result.insertId });
    });
});

// vvvvvvvv CHECK THE BELOW vvvvvvv

// DO WE NEED A ROUTER.PUT METHOD??

// ^^^^^^ CHECK THE ABOVE ^^^^^^^

module.exports = router;