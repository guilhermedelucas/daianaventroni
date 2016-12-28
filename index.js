var bodyParser = require('body-parser');
var express = require('express');
var cookieParser = require('cookie-parser');
var pg = require('pg');
var db = require('./config/db');
var app = express();

app.use(bodyParser.urlencoded({
    extended: false }));

app.use(cookieParser());

app.use(express.static('public'));




app.listen(process.env.PORT || 8080, function (){
    console.log("Listening!");
});
