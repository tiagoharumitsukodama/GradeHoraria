import componentes from './componentes.js';

export default function turmas () {
    let btProximo = document.querySelector('#botaoProximo');
    let btTurmas = document.querySelector('#botaoTurmas');
    let btComponentes = document.querySelector('#botaoComponentes');
    let h2 = document.querySelector('h2');
    let h4 = document.querySelector('h4');

    btTurmas.disabled = false;
    btComponentes.disabled = true;
    h2.innerText = 'Turmas';
    h4.innerText = 'Insira as turmas cuja a grade deseja montar.';

    btProximo.onclick = () => {
        
        if ( addTurmas() ) {
            alert('Preencha o campo');
            return;
        }
        else {
            componentes();
        }
    }
}

function addTurmas(){

    let inputListaTurmas = document.querySelector('#io input').value.split(',');
    let inputLegendaTabela = [];

    if (inputListaTurmas == "")
        return true;

    inputLegendaTabela.push('Componentes');

    for ( let keyTurma of inputListaTurmas ) {

        if (keyTurma !== "") {

            inputLegendaTabela.push(keyTurma);
        }
    }
    window.sessionStorage.legendaTabela = inputLegendaTabela;
}

