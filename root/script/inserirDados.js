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


export function extrairDados(TodasTurmas) {

    let tabela = document.querySelectorAll ('table tr');
    let tabelaAInserir = [];
    let legendaParaInserir;

    for (let indiceRow=0; indiceRow<tabela.length; indiceRow++) {

        let row = tabela[indiceRow].cells;
        let linhaParaInserir = [];

        for (let indiceCell=0; indiceCell<row.length; indiceCell++) {

            if (indiceRow === 0) {
                linhaParaInserir.push(row[indiceCell].innerText)
            }
            else {
                let valor = row[indiceCell].children[0].value;
                linhaParaInserir.push(valor);  
            }
        }
        tabelaAInserir.push(linhaParaInserir);
    }
    legendaParaInserir = tabelaAInserir.shift();


    function alimentar(nomeTurmas, tabelaNumeroAulasMateria){

        nomeTurmas.shift(); // Descartar "Componentes Curriculares" da lista
    
        for (let indiceComponente in tabelaNumeroAulasMateria) {
    
            let listaNumeroAulasMateria = tabelaNumeroAulasMateria[indiceComponente]
            let nomeComponente = listaNumeroAulasMateria.shift();
    
            for (let indiceTurma in nomeTurmas) {
    
                let nomeTurma = nomeTurmas[indiceTurma];
                let quantidadeAulas = listaNumeroAulasMateria[indiceTurma];
    
                if (!Array.isArray(TodasTurmas[nomeTurma]))
                    TodasTurmas[nomeTurma] = [];
    
                for (let counter=0; counter<quantidadeAulas; counter++) {
                    TodasTurmas[nomeTurma].push(nomeComponente);
                }
            }
        }
    }


    alimentar(legendaParaInserir, tabelaAInserir);

    
}

