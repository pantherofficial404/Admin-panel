const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.render("home")
})

router.post("/", (req, res, next) => {
    console.log(req.body.email)
    console.log(req.body.password)
    // code For Adding Database
    console.log("Added To The Database")
    res.redirect("/admin")
})

module.exports = router;