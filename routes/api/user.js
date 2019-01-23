// import express Router and the user controller
const router = require("express").Router();
const userController = require("../../controllers/locationControllers");

// Matches with "/api/user"
router
  .route("/")
  .get(userController.findAll)
  .post(userController.create);

  // Matches with "/api/user/:id"
router
.route("/:id")
.get(userController.findById)
.put(userController.update)
.delete(userController.remove);

module.exports = router;