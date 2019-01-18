// import express Router and the book controller
const router = require("express").Router();
const  destinationController = require("../../controllers/yourTour_controllers");

// Matches with "/api/location"
router
  .route("/")
  .get(destinationController.findAll)
  .post(destinationController.create);

  // Matches with "/api/book/:id"
router
.route("/:id")
.get(destinationController.findById)
.put(destinationController.update)
.delete(destinationController.remove);

module.exports = router;