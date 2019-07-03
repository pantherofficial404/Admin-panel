const express = require('express');
const router = express.Router();
const User = require('../model/User');
router.get("/",(req,res,next)=>{
    User.find("kishanpatel@gmail.com")
    .then((result)=>{
        res.render("home",{data:result})
    })
    .catch((err)=>{
        console.log(err)
    })

});

module.exports = router;