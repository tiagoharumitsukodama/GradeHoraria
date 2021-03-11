const express = require('express');
const router = express.Router();
const cadastrar = require('./cadastrar');
const organizar = require('./organizar');
const montarTabela = require('./tabelarMatriz')

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
    let elementoTabela = montarTabela.montarTabela(listaMatriz[0].matriz);

    console.log(elementoTabela);
    //Devolver as opções
    //res.send(elementoTabela);
    res.end();
})

module.exports = router;