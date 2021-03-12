function addTurma() {

    function ativarTabela(){
        let tabela = document.querySelector("table#inserir_dados");
        let bt = document.querySelector("#IdaddComponente");
        let div = document.querySelector("div.inserir_dados_iniciais");

        tabela.style.display = "block";
        bt.style.display = "block";
        div.style.display = "none";
    }

    ativarTabela();

    let listaTurma = document.querySelector(".inserir_dados_iniciais input").value.split(',');
    let listatr = document.querySelectorAll("table#inserir_dados tr");
    let titulo = listatr[0]
    let campo = listatr[1];

    for ( keyTurma of listaTurma ) {

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
                <input type="number" name="numeroAulas${keyTurma}" value="0" style="width: 50px; text-align: center;" >
                </td>`;
            campo.appendChild(td);
        }
    }
}

function addComponente() {
    let tabela = document.querySelector("#inserir_dados");
    let linha = document.querySelectorAll("#inserir_dados tr")[1];

    tabela.innerHTML += linha.innerHTML;
}

