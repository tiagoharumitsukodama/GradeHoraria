const express = require('express');
const router = express.Router();
const cadastrar = require('./cadastrar');
const organizar = require('./organizar');

const TodasTurmas = {};

router.use(express.urlencoded({ 
    extended: true 
}));

router.get('/', (req, res) => {
	res.render('index');		
});
  
router.post('/submit-form', (req, res) => {

    cadastrar.alimetar(req.body, TodasTurmas);

    let listaMatriz = organizar.listaMatrizEpontuacao(TodasTurmas);

    //Devolver as opções
    res.send(listaMatriz)

    res.end();
})

module.exports = router;