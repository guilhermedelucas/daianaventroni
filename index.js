var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var express = require('express');
var password = require('./password.json');
var spicedPg = require('spiced-pg');

var app = express();
var db = spicedPg(process.env.DATABASE_URL || 'postgres:' + password.dbUser + ':' + password.dbPassword + '@localhost:5432/daianaventoni');
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cookieParser());

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.use(express.static('public'));

app.use(function(req, res, next) {
    console.log(req.url);
    console.log(req.params.tag);
    console.log(req.method);
    console.log(req.path);
    next();
});

app.get("/admin", function(req, res) {
    res.pipe("./public/admin.html");
});

app.post('/delete', function(req, res){
    db.query('DELETE FROM cursos WHERE id=$1', [req.body.postId]).then(function(){
        res.json({
            success: true
        });
    }).catch(function(err){
        console.log(err);
        res.json({
            success: false
        });
    });
});

app.post('/addcurso', function(req, res) {
    var curso = req.body.curso;
    db.query('INSERT INTO cursos (title, imgurl, price, date, pagamento, description)  VALUES ($1, $2, $3, $4, $5, $6)', [curso.title, curso.imgurl, curso.price, curso.date, curso.pagamento, curso.description]).then(function() {
        res.json({
            success: true
        });
    }).catch(function(err) {
        console.log(err);
        res.json({
            sucess: false,
            error: err
        });
    });
});


app.get('/getcursos', function(req, res) {
    db.query('SELECT * FROM cursos').then(function(data) {
        res.json({
            cursos: data
        });
    }).catch(function(err) {
        console.log(err);
        res.json({
            success: false,
            error: err
        });
    });
});

app.post('/update', function(req, res){
    var curso = req.body.curso;
    console.log(curso);
    db.query('UPDATE cursos SET (title, imgurl, price, date, pagamento, description) = ($1, $2, $3, $4, $5, $6) WHERE id = $7', [curso.title, curso.imgurl, curso.price, curso.date, curso.pagamento, curso.description, curso.id]).then(function(){
        console.log("updated");
        res.json({
            success: true
        })
    }).catch(function(err){
        console.log(err);
        res.json({
            error: err,
            success: false
        })
    })
})


app.listen(process.env.PORT || 8080, function() {
    console.log("Listening!");
});
