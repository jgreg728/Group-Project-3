const express = require("express");

const router = express.Router();

const db = require("../models/locations");

// METHODS TO EDIT DB
 
  // find recent search items
router.get("/", function(req, res) {
  location
    .selectAll(function(data) {
      const locationObj = {
        activesearch: data
      };
      console.log(locationObj);
      res.render("index", locationObj);
    });
}),

router.get("/api/location", function(req, res) {
  db.selectAll(function(data) {
    res.json(data);
  });
});

router.post("/api/location", function(req, res) {
  db.insertOne([
    "location",
  ], [
    req.body.location, 
  ], 
  result => {
    // Send back the ID of the searched location
    res.json({ id: result.insertId });
  });
});

// vvvvvvvv CHECK THE BELOW vvvvvvv

// DO WE NEED A ROUTER.PUT METHOD??

// ^^^^^^ CHECK THE ABOVE ^^^^^^^

module.exports = router;