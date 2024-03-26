const express = require('express');

const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');

//Static Directory
app.use(express.static('public'));

//Environment variables
require('dotenv').config();

//JSON Parsing for HTTP POST (Max 3mb)
const bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '3mb' }));
app.use(bodyParser.urlencoded({
    extended: true,
}));

//Cookies
app.use(cookieParser());

//BASE_URL
app.use((req, ris, next) => {
    ris.locals.BASE_URL = process.env.BASE_URL;
    next();
});

//Ruoutes
app.get('/', (req, res) => {
    res.redirect('/welcome.html');
});

//Run Server
const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`BeerMeUp server listening at http://localhost:${port}`);
});