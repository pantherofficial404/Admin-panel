const express = require('express');
const router = express.Router();

router.get("/",(req,res,next)=>{
    res.render('services')
})

router.get("/diseases",(req,res,next)=>{
    res.render("diseases")
})

module.exports = router;