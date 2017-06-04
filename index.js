var express = require('express');
var app = express();

app.use(cookieParser());

app.use(express.static('public'));

app.listen(process.env.PORT || 8080, function() {
    console.log("Listening!");
});
