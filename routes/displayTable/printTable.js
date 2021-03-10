const semana = []
const tabela = document.getElementById("tabela")

class materia{
    constructor( nome="" ) {
        this.nome = nome;
    }
}

function montarSemana() {

    let dia, aula, aulasDia = 8;

    for ( dia = 0; dia< 7; dia++ ) {

        let arrayDia = [];

        for ( aula = 0; aula < aulasDia; aula++) {
            arrayDia.push( new materia("Materia " + aula) )
        }
        aulasDia--;
        semana.push( arrayDia );
    }
    console.log(semana)
    console.log("montou a semana");
} 

function montarTabela(){

    const numeroCol = semana.length;
    let numeroRow;
    let row;
    let cell;
    let maiorNumeroRows = 0;
    
    semana.forEach( dia => {

        if ( dia.length > maiorNumeroRows ) 
            maiorNumeroRows = dia.length;
    });

    for ( numeroRow = 0; numeroRow < maiorNumeroRows; numeroRow++ ) {

        row = tabela.insertRow(numeroRow);

        for ( let dia = 0; dia < numeroCol; dia++ ) {

            cell = row.insertCell( dia );
    
            if( semana[dia][numeroRow] )
                cell.innerHTML = semana[dia][numeroRow].nome;
            else
                cell.innerHTML = " --- ";
                
        }
    }

    console.log("exibiu a tabela")
    console.log(tabela);
}


montarSemana();
montarTabela();

