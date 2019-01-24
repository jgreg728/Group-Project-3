// import api routes and express router
const router = require("express").Router();
const locationRoutes = require("./location");
const activityRoutes = require("./activity");
const userRoutes = require("./user");

// prefi/api route endpoint with "/tour"
router.use("/api", locationRoutes, activityRoutes, userRoutes);

// export routes
module.exports = router;