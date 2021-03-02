const express = require('express');
const router = express.Router();

const relacaoMaterias = [];

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

    relacaoMaterias.push(materia);
    res.end();

    console.log(relacaoMaterias);
})

module.exports = router;