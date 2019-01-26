const express = require("express");

const router = express.Router();

const db = require("../models/locations");

// METHODS TO EDIT DB
module.exports = {
   // find all locations ("/api/location" => GET)
   findAll: function(req, res) {
    db
      .Location
      .find(req.query)
      .then(dbLocationData => res.json(dbLocationData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  },

  // find specific Location by ID
  findById: function (req, res) {
    db
      .Location
      .findById(req.params.id)
      .then(dbLocationData => res.json(dbLocationData))
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  },


  //  create favorite location
  create: function (req, res) {
    db
      .Location
      .create(req.body)
      .then(dbLocationData => res.json(dbLocationData))
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  },
}

 
//   // find recent location
// router.get("/", function(req, res) {
//   db
//     .selectAll(function(data) {
//       const locationObj = {
//         activesearch: locations.locationName
//       };
//       console.log(locationObj);
//       res.render("index", locationObj);
//     });
// }),

// router.get("/api/location", function(req, res) {
//   db
//     .selectAll(function(data) {
//       res.json(data);
//     });
// });

// // add search for location to "favorites"
// router.post("/api/location", function(req, res) {
//   db
//     .insertOne([
//       "location",
//     ], [
//       req.body.location, 
//     ], 
//     result => {
//       // Send back the ID of the searched location
//       res.json({ id: result.insertId });
//     });
// });

// module.exports = router;