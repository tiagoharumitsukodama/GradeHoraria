const relacaoMaterias = []; //constante temporária

//encher a array temporariamente
for( let i = 0; i<10; i++ ) {
    relacaoMaterias.push(
        {
            nome: "Materia "+i,
            aulasSemanais: parseInt(Math.random()*5),
            disponibilidade: {
                iniSeg: 7,
                fimSeg: 12,
                iniTer: 7,
                fimTer: 12
            }
        });
}


// <------------ começa aqui

const arrayDeMaterias = [];

for ( materia of relacaoMaterias ) {

    qnt = materia.aulasSemanais;
    nome = materia.nome;

    for( ; qnt>0; qnt-- ) {
        arrayDeMaterias.push( nome );
    }
}
console.log(arrayDeMaterias.length)

let seg = [],
    ter = [], 
    qua = [], 
    qui = [], 
    sex = [];

let semana = [seg,ter,qua,qui,sex];
let dia;
let aula;
let j = arrayDeMaterias.length;

for (; j > 0; j-- ) {

    dia = parseInt(Math.random()*semana.length);
    aula = arrayDeMaterias.splice(0,1);

    semana[dia].push(aula);
}

semana.forEach( (aulas,dia) => {
    console.log(dia + "  ");
    console.log(aulas);
}
);
