// import express Router and the activity controller
const router = require("express").Router();
const  activityController = require("../../controllers/activityControllers");

// Matches with "/api/activity"
router
  .route("/")
  .get(activityController.findAll)
  .post(activityController.create);

  // Matches with "/api/activity/:id"
router
.route("/:id")
.get(activityController.findById)
.put(activityController.update)
.delete(activityController.remove);

module.exports = router;