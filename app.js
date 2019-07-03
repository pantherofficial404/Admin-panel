// Importing Libraries
const express = require('express');
const hbs = require("express-handlebars");
const adminRouter = require("./Routers/adminRouter")
const path = require('path')
const bodyParser = require("body-parser");
const app = express();

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
app.use("/admin", adminRouter);

// Initialize The Port Number
const PORT = 3000;

// Running The Server
app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Server is running on PORT :- " + PORT)
    }
})