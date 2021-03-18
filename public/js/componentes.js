import montarGrade from './montargrade.js';

export default function componentes() {
    
    let btTurmas = document.querySelector('#botaoTurmas');
    let btComponentes = document.querySelector('#botaoComponentes');
    let btProximo = document.querySelector('#botaoProximo');
    let btDireito = document.querySelector('#botaoDireito');
    let h2 = document.querySelector('h2');
    let h4 = document.querySelector('h4');
    let Listalegenda = window.sessionStorage.legendaTabela.split(',');

    btTurmas.disabled = true;
    btComponentes.disabled = false;
    btDireito.style.display = 'block';
    btDireito.innerHTML = '+Componentes';
    h2.innerHTML = 'Componentes';
    h4.innerHTML = 'Legal! Agora, diga o nome da matéria e a quantidade de aulas para cada turma.';

    let io = document.querySelector('div#io');
    io.replaceChild( montarTabelaInput(Listalegenda) , io.firstElementChild)

    btDireito.addEventListener('click', addCampo);

    btProximo.onclick = () => {
        
        let componentes = document.querySelectorAll("[name='Componentes']");
        let preencheuTodos = true;

        for ( let indicecomponente in componentes )
            if (componentes[indicecomponente].value == "")
                preencheuTodos = false;

        if(!preencheuTodos)
            alert('Insira os nomes das matérias');
        else 
            montarGrade();
    };

}

function montarTabelaInput(Listalegenda) {

    let tabela = document.createElement('table');
    let linha = document.createElement('tr');

    tabela.style.padding = '1px';
    tabela.style.border = '1px solid transparent';
    tabela.style.backgroundColor = "black";
    tabela.style.maxWidth = '90%';

    Listalegenda.forEach(element => {

        let cell = document.createElement('th');
        cell.style.backgroundColor = 'white';
        cell.style.padding = '3px';
        cell.style.margin = '2px';
        cell.innerHTML = element;
        linha.appendChild(cell);
    });  
    tabela.appendChild(linha);


    linha = document.createElement('tr');

    Listalegenda.forEach( element => {

        let cell = document.createElement('td');
        let input = document.createElement('input');

        if( element == 'Componentes' ){
            input.type = 'text';
            input.style.width = '120px';
            input.placeholder = 'ex: Física';
        }
        else {
            input.type = 'number';
            input.style.width = '60px';
            input.min = 0;
        }

        input.name = element;
        input.style.textAlign = 'center';
        cell.style.backgroundColor = 'white';
        cell.style.padding = '3px';
        cell.style.margin = '2px';
        cell.appendChild(input);
        linha.appendChild(cell);
    });

    tabela.appendChild(linha);

    return tabela;
}

function addCampo() {

    let tabela = document.querySelector("table");
    let linha = document.querySelectorAll("tr")[1];

    tabela.innerHTML += linha.innerHTML;
}



