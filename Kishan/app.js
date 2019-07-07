const express = require('express');
const hbs = require('express-handlebars');
const app = express();
const path = require('path');
const homeRouter = require('./routers/homeRouter');
const dashBoardRouter = require('./routers/dashBoardRouter');


//setup engine
app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: __dirname + '/views/layouts/main',
    partialsDir: __dirname + '/views/partials'
}));

app.set('view engine', 'hbs');

//static file setup
app.use('/static', express.static(path.join(__dirname, 'public')));

//render index page

app.use('/', homeRouter);
app.use('/home', dashBoardRouter);

//port
const PORT = 3000;
app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('you serve is on' + PORT)
    }
})
