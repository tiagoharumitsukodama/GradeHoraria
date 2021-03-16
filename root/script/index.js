import {addTurma, addComponente, extrairDados} from './inserirDados.js';
import listaMatrizEpontuacao from './organizar.js';

let TodasTurmas = {};


let buttonTurma = document.querySelector('#IdaddTurma');
buttonTurma.addEventListener('click', addTurma);


let btEnviar = document.querySelector("#Idenviar");
btEnviar.addEventListener('click', () => {
    extrairDados(TodasTurmas)

    let listaMatriz = listaMatrizEpontuacao(TodasTurmas);

    
});

