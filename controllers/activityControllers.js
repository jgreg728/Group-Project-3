const express = require("express");

const router = express.Router();

const db = require("../models/activities");

// METHODS TO EDIT DB
 // search activity by ID
 module.exports = {
  // find all activities ("/api/activity" => GET)
  findAll: function(req, res) {
   db
     .Activity
     .find(req.query)
     .then(dbActivityData => res.json(dbActivityData))
     .catch(err => {
       console.log(err);
       res.json(err);
     });
 },

//  search specific activity by ID
findById: function (req, res) {
  db
    .Activity
    .findById(req.params.id)
    .then(dbActivityData => res.json(dbActivityData))
    .catch(err => {
      console.log(err);
      res.status(422).json(err)
    });
},

 //  create favorite Activity
 create: function (req, res) {
   db
     .Activity
     .create(req.body)
     .then(dbActivityData => res.json(dbActivityData))
     .catch(err => {
       console.log(err);
       res.status(422).json(err)
     });
 },
}




//  router.get("/", function(req, res) {
//   db
//     .selectAll(function(data) {
//       const activityObj = {
//         activesearch: subcategories.CategoryId
//       };
//       console.log(activityObj);
//       res.render("index", activityObj);
//     });
// }),

// // add an activity to "favorites"
// router.post("/api/activity", function(req, res) {
//   db
//     .insertOne([
//       "activity",
//     ], [
//       req.body.activesearch, 
//     ], 
//     result => {
//       // Send back the ID of the searched activity
//       res.json({ id: result.insertId });
//     });
// });

// module.exports = router;