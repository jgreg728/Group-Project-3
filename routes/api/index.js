// import api routes and express router
const router = require("express").Router();
const locationRoutes = require("./location");
const activityRoutes = require("./activity");
const userRoutes = require("./user");

// prefi/api route endpoint with "/tour"
router.use("/location", locationRoutes);

router.use("/activity", activityRoutes);

router.use("/user", userRoutes);


// export routes
module.exports = router;