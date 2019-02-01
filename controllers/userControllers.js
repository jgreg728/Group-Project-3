const express = require("express");

const router = express.Router();

const db = require("../models/users");

// METHODS TO EDIT DB

module.exports = {
  // find all matching usernames to username being used to sign in
  findAll: function(req, res) {
   db
     .User
     .find(req.query)
     .then(dbUserData => res.json(dbUserData))
     .catch(err => {
       console.log(err);
       res.json(err);
     });
 },

 //  create User
 create: function (req, res) {
   db
     .User
     .create(req.body)
     .then(dbUserData => res.json(dbUserData))
     .catch(err => {
       console.log(err);
       res.status(422).json(err)
     });
 },

//  delete user account
 remove: function (req, res) {
  db
    .User
    .findById(req.params.id)
    .then(dbUserData => dbUserData.remove())
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(422).json(err)
    });
}
}



// // add new user to DB
// router.post("/api/users", function(req, res) {
//   db
//     .insertOne([
//       "username",
//     ], [
//       req.body.users, 
//     ], 
//     result => {
//       // Send back the ID of the new quote
//       res.json({ id: result.insertId });
//     });
// });

// // Retrieve user login when signing into app
// router.get("/", function(req, res) {
//   db
//     .selectAll(function(data) {
//       const userLogin = {
//         db: data
//       };
//       console.log(userLogin);
//       res.render("index", userLogin);
//     });
// });

// module.exports = router;