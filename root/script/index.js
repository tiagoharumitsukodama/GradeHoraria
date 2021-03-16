import {addTurma, addComponente, extrairDados} from './inserirDados.js';
import listaMatrizEpontuacao from './organizar.js';
import montarTabela from './tabelarMatriz.js';

let TodasTurmas = {};
let listaMatriz;


let buttonTurma = document.querySelector('#IdaddTurma');
buttonTurma.addEventListener('click', addTurma);


let btEnviar = document.querySelector("#Idenviar");
btEnviar.addEventListener('click', () => {

    extrairDados(TodasTurmas);
    listaMatriz = listaMatrizEpontuacao(TodasTurmas);    

});


let counterListaMatriz = 0;
let botaoResultado = document.querySelector("#botaoResultado");
botaoResultado.addEventListener('click', () => {

    let tabela = montarTabela (listaMatriz[counterListaMatriz++].matriz);


    let divResultado = document.querySelector("#resultado");
    divResultado.innerHTML = tabela;
})



