const express = require('express');
const router = express.Router();


let materias = [];

router.get('/', (req, res) => {
	res.render('index');		
});
  

module.exports = router;