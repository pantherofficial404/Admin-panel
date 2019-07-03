const express = require('express');
const router = express.Router();
const User = require("../model/User");

router.get("/login",(req,res,next)=>{
    res.render("login")
})

router.get("/signup",(req,res,next)=>{
    res.render("signup")
})

router.post("/signup",(req,res,next)=>{
    const user = new User({
        email:req.body.email,
        password:req.body.password,
    })
    user.save((err)=>{
        if(err){
            console.log("Unable to add data")
        }else{
            res.redirect("/user/login")
        }
    })
})

module.exports = router;