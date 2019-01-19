const express = require("express");

const router = express.Router();

const db = require("../models/activities");

// METHODS TO EDIT DB
module.exports = {
  // find recent search items

  findAll: function(req, res) {
    db
      .Activity
      .find(req.query)
      .order({activity})
      .then (dbActivityData => res.json(dbActivityData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  },
  
  findById: function(req, res) {
    db
      .Activity
      .findById(req.params.id)
      .then(dbActivityData => res.json(dbActivityData))
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  },
}