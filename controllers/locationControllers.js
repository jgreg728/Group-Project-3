const express = require("express");

const router = express.Router();

const db = require("../models/locations");

// METHODS TO EDIT DB
 
  // find recent location
router.get("/", function(req, res) {
  db
    .selectAll(function(data) {
      const locationObj = {
        activesearch: data
      };
      console.log(locationObj);
      res.render("index", locationObj);
    });
}),

router.get("/api/location", function(req, res) {
  db
    .selectAll(function(data) {
      res.json(data);
    });
});

router.post("/api/location", function(req, res) {
  db
    .insertOne([
      "location",
    ], [
      req.body.location, 
    ], 
    result => {
      // Send back the ID of the searched location
      res.json({ id: result.insertId });
    });
});

module.exports = router;