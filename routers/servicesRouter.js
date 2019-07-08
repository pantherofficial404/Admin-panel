const express = require('express');
const router = express.Router();

router.get("/",(req,res,next)=>{
    res.render("pages/services")
})

module.exports = router;