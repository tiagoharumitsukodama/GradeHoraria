export function addTurma() {

    function ativarTabela(){
        let tabela = document.querySelector("table#inserir_dados");
        let btAdd = document.querySelector("#IdaddComponente");
        let div = document.querySelector("div.inserir_dados_iniciais");
        let btEnviar = document.querySelector("#Idenviar");


        tabela.style.display = "block";
        btAdd.style.display = "block";
        btAdd.addEventListener('click', addComponente);
        div.style.display = "none";

        btEnviar.style.display = "block";
        btEnviar.addEventListener('click', extrairDados);
    }

    let listaTurma = document.querySelector(".inserir_dados_iniciais input").value.split(',');
    let listatr = document.querySelectorAll("table#inserir_dados tr");
    let titulo = listatr[0]
    let campo = listatr[1];

    if (listaTurma == "")
        return

    ativarTabela();

    for ( let keyTurma of listaTurma ) {

        if (keyTurma !== "") {

            let th = document.createElement('TH');
            th.innerHTML = 
                `<td>
                ${keyTurma}
                </td>`;
            titulo.appendChild(th);
    
            let td = document.createElement('TD');
            td.innerHTML = 
                `<td>
                <input type="number" name="${keyTurma}" value="0" style="width: 50px; text-align: center;" >
                </td>`;
            campo.appendChild(td);
        }
    }
}

export function addComponente() {
    let tabela = document.querySelector("#inserir_dados");
    let linha = document.querySelectorAll("#inserir_dados tr")[1];

    tabela.innerHTML += linha.innerHTML;
}

export function extrairDados() {

    let tabela = document.querySelectorAll ('table tr');
    let tabelaAInserir = [];
    let legendaParaInserir = [];


    for (let indiceRow=0; indiceRow<tabela.length; indiceRow++) {

        let row = tabela[indiceRow].cells;
        let linhaParaInserir = [];

        for (let indiceCell=0; indiceCell<row.length; indiceCell++) {

            if (indiceRow === 0) {
                legendaParaInserir.push(row[indiceCell].innerText)
            }
            else {
                let valor = row[indiceCell].children[0].value;
                linhaParaInserir.push(valor);  
            }
        }
        tabelaAInserir.push(linhaParaInserir);
    }
    legendaParaInserir.shift();

    alimentar(legendaParaInserir, tabelaAInserir);
}

export function alimentar(legendaParaInserir, tabela){
    /*
        let _nomeComponente = reqBody.nomeComponente;
        let _nomeTurma;
        let _quantidadeTurma;
        
        for (let indiceTurma in reqBody.nomeTurma) {
    
            _nomeTurma =  reqBody.nomeTurma[indiceTurma];
            _quantidadeTurma = reqBody.quantidadeAulasTurma[indiceTurma];
    
            if (!Array.isArray(TodasTurmas[_nomeTurma]))
                TodasTurmas[_nomeTurma] = [];
    
            for (let q=0; q<_quantidadeTurma; q++) {
    
                TodasTurmas[_nomeTurma].push({
                    nomeTurma: _nomeTurma,
                    nomeComponente: _nomeComponente
            });
            }
        }*/ console.log(tabela)
    }
    