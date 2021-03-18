import exportar from './exportar.js';
import listaMatrizEpontuacao from './helper/organizar.js';
import ordenarListaPontosMatriz from './helper/ordenar.js';

export default function montarGrade() {
    
    let btComponentes = document.querySelector('#botaoComponentes');
    let btMontarGrade = document.querySelector('#botaoMontarGrade');
    let btProximo = document.querySelector('#botaoProximo');
    let btDireito = document.querySelector('#botaoDireito');
    let btEsquerdo = document.querySelector('#botaoEsquerdo');
    let h2 = document.querySelector('h2');
    let h4 = document.querySelector('h4');


    btComponentes.disabled = true;
    btMontarGrade.disabled = false;
    btEsquerdo.style.display = 'block';
    h2.innerHTML = 'Montar grade';
    h4.innerHTML = 'Monte a sua grade clicando em “Outro” ou invertendo as linhas.';
    btDireito.innerHTML = 'Outro';
    btEsquerdo.innerHTML = 'Inverter';

    let TodasTurmas = extrairDados();
    let ListaMatrizPontuacao = listaMatrizEpontuacao(TodasTurmas);
    ordenarListaPontosMatriz(ListaMatrizPontuacao);
        
    montarTabela(ListaMatrizPontuacao[0].matriz);
    let counter = 1;
    btDireito.addEventListener('click', () => {
        if ( counter >= ListaMatrizPontuacao.length )
            counter = 0;
        montarTabela( ListaMatrizPontuacao[counter++].matriz );
    })
    btEsquerdo.addEventListener('click', () => {
        trocarOrdemLinha();
    })


    btProximo.onclick = exportar;
}

function extrairDados() {

    let objetoPreencher = {};
    let listaTurmas = window.sessionStorage.legendaTabela.split(',');
    listaTurmas.shift(); // Excluir a legenda "Componentes"
    let listaComponentes = document.querySelectorAll("[name='Componentes']")

    listaTurmas.forEach(nomeTurma => {

        if (!Array.isArray(objetoPreencher[nomeTurma]))
            objetoPreencher[nomeTurma] = [];
        
        let valoresNodeTurma = document.querySelectorAll(`[name='${nomeTurma}']`);
        
        for (let indiceComponente in listaComponentes) {
            let nomeComponente = listaComponentes[indiceComponente].value;
            let quantidadeAulaComponente = valoresNodeTurma[indiceComponente].value;

            for (; quantidadeAulaComponente > 0; quantidadeAulaComponente--) {
                objetoPreencher[nomeTurma].push(nomeComponente);
            }
        }
    });

    window.sessionStorage.TodasTurmas = JSON.stringify(objetoPreencher);

    return objetoPreencher;
}


function montarTabela (Matriz) {

    let tabela = document.createElement('table');
    let legenda = window.sessionStorage.legendaTabela.split(',');
    let linha = document.createElement('tr');
    let cell;

    tabela.style.padding = '1px';
    tabela.style.border = '1px solid transparent';
    tabela.style.backgroundColor = "black";
    tabela.style.maxWidth = '90%';

    legenda[0] = '   ';
    legenda.forEach( elemento => {
        cell = document.createElement('th');
        cell.style.backgroundColor = 'white';
        cell.style.padding = '5px';
        cell.style.margin = '2px';
        cell.style.textAlign = 'center';

        cell.innerHTML = elemento;
        linha.appendChild(cell);
    });

    tabela.appendChild(linha);

    for (let i=0; i<Matriz[0].length; i++) {

        linha = document.createElement('tr');
        linha.setAttribute('class', 'linhaCampo');

        for (let j=0; j<Matriz.length; j++) {

            if (j == 0) {
                cell = document.createElement('td');
                cell.style.backgroundColor = 'white';
                cell.style.padding = '5px';
                cell.style.margin = '2px';
                cell.style.textAlign = 'center';

                let input = document.createElement('input');
                input.setAttribute('type', 'checkbox');
                input.setAttribute('class', 'inputInverter');
                input.value = i;
                input.onclick = () => {

                    if (input.checked) {

                        let counter = 0;
                        let listaNodes = document.querySelectorAll(".inputInverter");
                        for (let node in listaNodes)
                            if (listaNodes[node].checked) counter++;
                        
                        if (counter > 2) input.checked=false;
                    }
                }

                cell.appendChild(input);
                linha.appendChild(cell);
            }

            cell = document.createElement('td');
            cell.style.backgroundColor = 'white';
            cell.style.padding = '5px';
            cell.style.margin = '2px';
            cell.style.textAlign = 'center';

            cell.innerHTML = Matriz[j][i];
            linha.appendChild(cell);
        }

        tabela.appendChild(linha);
    }
    
    let io = document.querySelector('div#io');
    io.replaceChild(tabela , io.firstElementChild);
}

function trocarOrdemLinha () {

    let listaNodes = document.querySelectorAll(".inputInverter");
    let checkedList = []; 
    let listaLinha = document.querySelectorAll('.linhaCampo');

    for (let indexnode in listaNodes)
        if (listaNodes[indexnode].checked)
            checkedList.push(indexnode);

    let [primeiro, segundo] = checkedList;

    let swap = listaLinha[segundo].innerHTML;
    listaLinha[segundo].innerHTML = listaLinha[primeiro].innerHTML;
    listaLinha[primeiro].innerHTML = swap;
}