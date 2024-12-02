const express = require("express");
const router = express.Router();
const User = require("../models/User.js");
const passport = require("passport");
// const { saveRedirectUrl } = require("../middleware.js");

router.get("/signup", (req, res) => {
    res.render("users/signup.ejs");  // Render the signup page
});

router.post("/signup", async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            req.flash("messages", [{ text: "This email is already registered.", type: "danger" }]);
            return res.redirect("/signup");
        }

        const newUser = new User({ email, username });
        await User.register(newUser, password);

        req.flash("messages", [{ text: "Welcome to Caffeine Infusion!", type: "success" }]);
        res.redirect("/listings");
    } catch (error) {
        console.error(error);
        req.flash("messages", [{ text: "Signup failed. Try again.", type: "danger" }]);
        res.redirect("/signup");
    }
});


router.get("/login", (req, res) => {
    res.render("users/login.ejs");  // Render the login page
});

router.post("/login", passport.authenticate("local", {
    failureRedirect: '/login',
    failureFlash: true
}), (req, res) => {
    req.flash("messages", [{ text: "Welcome back!", type: "success" }]);
    const redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
});

router.get("/logout", (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("messages", [{ text: "You are logged out!", type: "success" }]);
        res.redirect("/listings");
    });
});


module.exports = router;
