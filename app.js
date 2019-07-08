// Importing Libraries
const express = require('express');
const hbs = require("express-handlebars");
const path = require('path')
const bodyParser = require("body-parser");
const app = express();

// Importing Routers
const homeRouter = require("./Routers/homeRouter");
const userRouter = require("./Routers/userRouter");
const servicesRouter = require('./Routers/servicesRouter');
const dashboardRouter = require("./Routers/dashboardRouter");
const adminRouter = require("./Routers/adminRouter");


// Setup express handlebars
app.engine('hbs', hbs({
    extname: "hbs",
    defaultLayout: __dirname + "/views/layout/main",
    partialsDir: __dirname + "/views/partials"
}));

app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use('/static', express.static(path.join(__dirname, 'public')));

// Setup Routers
app.use("/",homeRouter);
app.use("/user",userRouter);
app.use("/services",servicesRouter);
app.use("/dashboard",dashboardRouter);
app.use("/admin",adminRouter);


// Initialize The Port Number
const PORT = 5000;

// Running The Server
app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Server is running on PORT :- " + PORT)
    }
})