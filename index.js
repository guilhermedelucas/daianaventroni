var bodyParser = require('body-parser');
var express = require('express');
var hbs = require('express-handlebars');
var cookieParser = require('cookie-parser');
var pg = require('pg');
var db = require('./config/db');
var app = express();

app.use(bodyParser.urlencoded({
    extended: false }));

app.use(cookieParser());

app.engine('handlebars', hbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

app.use(express.static('public'));









app.listen(process.env.PORT || 8080, function (){
    console.log("Listening!");
});
