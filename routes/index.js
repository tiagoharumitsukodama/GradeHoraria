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
        disponibilidade: {
            iniSeg: req.body.iniSeg,
            fimSeg: req.body.iniSeg,
            iniTer: req.body.iniTer,
            fimTer: req.body.fimTer
            //falta o resto
        }
    };

    materias.push(materia);
    console.log(materias);

    res.end();
})

module.exports = router;