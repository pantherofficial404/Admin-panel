const express = require("express");
const router = express.Router();
const User = require("../model/User");
router.get("/", (req, res, next) => {
    res.render("home")
})

router.post("/", (req, res, next) => {
    const user = new User({
        email: req.body.email,
        password: req.body.password
    })
    user.save((err) => {
        if (err) {
            console.log("Unable to Add Data")
        } else {
            res.redirect("/admin")
        }
    })
})

module.exports = router;