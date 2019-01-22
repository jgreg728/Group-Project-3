// import express Router and the location controller
const router = require("express").Router();
const locationController = require("../../controllers/locationControllers");

// Matches with "/api/location"
router
  .route("/")
  .get(locationController.findAll)
  .post(locationController.create);

  // Matches with "/api/location/:id"
router
.route("/:id")
.get(locationController.findById)
.put(locationController.update)
.delete(locationController.remove);

module.exports = router;