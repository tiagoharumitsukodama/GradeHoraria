const express = require('express');
const app = express();
const port = 3000;

let materias = [];

app.get('/', (req, res) => {
	res.sendFile(__dirname + "/index.html");		
});

app.use( express.urlencoded({ extended: true }));

app.post('/submit-form', (req, res) => {
	let materia = req.body.materia;

	materias.push(materia);
	console.log(materias);
	res.end();
});

app.listen(port, () => {
	console.log("ouvindo, pode falar");
});
