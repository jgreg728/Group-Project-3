// import api routes and express router
const router = require("express").Router();
const tourRoutes = require("/api");

// prefi/api route endpoint with "/tour"
router.use("/api", tourRoutes);

// export routes
module.exports = router;