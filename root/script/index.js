import {addTurma, addComponente, extrairDados} from './inserirDados.js';

let TodasTurmas = {};


let buttonTurma = document.querySelector('#IdaddTurma');
buttonTurma.addEventListener('click', addTurma);


let btEnviar = document.querySelector("#Idenviar");
btEnviar.addEventListener('click', ()=> {extrairDados(TodasTurmas)});
