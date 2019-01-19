// import express Router and the book controller
const router = require("express").Router();
const  activityController = require("../../controllers/locationControllers");

// Matches with "/api/location"
router
  .route("/")
  .get(activityController.findAll)
  .post(activityController.create);

  // Matches with "/api/book/:id"
router
.route("/:id")
.get(activityController.findById)
.put(activityController.update)
.delete(activityController.remove);

module.exports = router;