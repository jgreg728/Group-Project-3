const express = require("express");

const router = express.Router();

const db = require("../models/locations");

// METHODS TO EDIT DB
module.exports = {
  // find recent search items
  findAll: function(req, res) {
    db
      .Location
      .find(req.query)
      .order({locationName})
      .then (dbLocationData => res.json(dbLocationData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  },
  findById: function(req, res) {
    db
      .Location
      .findById(req.params.id)
      .then(dbLocationData => res.json(dbLocationData))
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  },
}