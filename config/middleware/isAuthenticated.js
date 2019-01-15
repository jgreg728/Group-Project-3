// This is middleware for restricting routes a user is not allowed to visit if not logged in
module.exports = (req, res, next) => {
  
  // If user is logged in, continue with request to restricted route
  if (req.user) {
    return next();
  }

  // If the user isn't logged in, redirect to the login page
  return res.redirect("/");
}