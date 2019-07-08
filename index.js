// Importing Libraries
const express = require('express');
const bodyParser = require('body-parser');
const hbs = require("express-handlebars");
const mongoose = require('mongoose');

// Importing Routers
const homeRouter = require('./routers/homeRouter');
const servicesRouter = require('./routers/servicesRouter');

// Database Connection
const databaseUrl = "mongodb://admin:admin123@ds127938.mlab.com:27938/doctorai_admin";
mongoose.connect(databaseUrl,{useNewUrlParser:true},(err)=>{
    if(err){
        console.log("Unable to connect database")
    }else{
        console.log("Connected to Database")
    }
});

// Server Initialize
const app = express();

// Main Code Will Go Here....
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.engine("hbs",hbs({
    extname:"hbs",
    defaultLayout:__dirname + "/views/layout/layout",
    partialsDir:__dirname + "/views/partials"
}));
app.set("view engine","hbs");

app.use('/static',express.static(__dirname + '/public'))



// Routers
app.use("/",homeRouter);
app.use('/services',servicesRouter)

// Page Not Found
app.use((req,res,next)=>{
    const error = new Error("Page Not Found");
    next(error);
})
app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.render('pages/error');
})


// Running The Server
const PORT = 4000;
app.listen(PORT,(err)=>{
    if(err){
        console.log("Something went on running server. Please restart server");
    }else{
        console.log("Server is running on port "+PORT)
    }
})