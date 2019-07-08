const express = require("express");
const hbs = require("express-handlebars");
const homeRouter = require("./Router/homeRouter")
const servicesRouter = require("./Router/servicesRouter")
const path =  require('path');
const app = express();
app.engine('hbs', hbs({
    extname: "hbs",
    defaultLayout: __dirname + "/views/layout/main",
    partialsDir: __dirname + "/views/partial"
}));
app.set('view engine', 'hbs');
const PORT = 4000;

app.use('/static', express.static(path.join(__dirname, 'public')));
app.use("/",homeRouter)
app.use("/services",servicesRouter)
app.listen(PORT,(error)=>
{if(error){
    console.log("Somthing is Wrong")
}else{
    console.log("Server Running")
}
})