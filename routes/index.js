const express = require('express');
const router = express.Router();

const materias = [];

router.use(express.urlencoded({ 
    extended: true 
}));

router.get('/', (req, res) => {
	res.render('index');		
});
  
router.post('/submit-form', (req, res) => {
    const materia = {
        nome: req.body.materia,
        aulasSemanais: req.body.aulasSemanais,
        disponibilidadeSegunda: req.body.disponibilidadeSegunda
    };

    materias.push(materia);
    console.log(materias);
})

module.exports = router;