
var express = require('express')
var app = express()

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {

    var lista = [{a:2, b:3}, {a:3, b: 8}]

    res.render('pages/index', {lista} )
});

app.get('/about', (req, res) => {
    res.render('pages/about')
})

app.listen(3000);