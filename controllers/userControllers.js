const express = require("express");

const router = express.Router();

const db = require("../models/users");

// METHODS TO EDIT DB
module.exports = {
  // find recent search items
  create: function (req, res) {
    db
    .User
      .create(req.body)
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  }
}