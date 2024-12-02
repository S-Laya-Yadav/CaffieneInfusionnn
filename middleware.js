module.exports.isLoggedIn = (req, res, next) => {
  // console.log (req.user);
    // console.log("isAuthenticated:", req.isAuthenticated());  // Debug log
    if (!req.isAuthenticated()) {
      req.flash("error", "You must be logged in.");
      console.log("Redirecting to /listings");

      return res.redirect("/listings");
    }
    next();

  };
  
