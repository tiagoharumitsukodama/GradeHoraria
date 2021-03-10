const express = require('express');
const router = express.Router();
const cadastrar = require('./cadastrar');

const TodasMaterias = [];

router.use(express.urlencoded({ 
    extended: true 
}));

router.get('/', (req, res) => {
	res.render('index');		
});
  
router.post('/submit-form', (req, res) => {

    cadastrar.alimetar(req.body, TodasMaterias)
    console.log(TodasMaterias)

    res.end();
})

module.exports = router;