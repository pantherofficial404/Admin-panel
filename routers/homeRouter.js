const express = require('express');
const router = express.Router();

// URL :- /
router.get("/",(req,res,next)=>{
    res.render("pages/home");
})

module.exports = router;