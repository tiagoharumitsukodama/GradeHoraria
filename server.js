
var express = require('express')
var app = express()

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {

    res.render('pages/index');
    console.log('Conectado');
});


app.listen(process.env.PORT || 3000);