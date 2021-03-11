

function montarTabela(Matriz){

    let maiorNumeroRows;
    let tabela = "<table>"
    let linha = ""
    
    maiorNumeroRows = Matriz.reduce( (max, current) => Math.max(max.length, current.length), -Infinity )

    for (let j = 0; j < maiorNumeroRows; j++) {
        //let row = elementoTabela.insertRow(j);
        linha = "<tr>";
        for (let i=0; i<Matriz.length; i++) {

            //let cell = row.insertCell( i );
            if(Matriz[i][j]) {
                //cell.innerHTML = Matriz[i][j]
                linha += `<td>${Matriz[i][j]}</td>`;
            }
            else {
                //cell.innerHTML = " XXX ";  
                linha += `<td>XXX</td>`;
            }
        }
        linha += '</tr>'; 
        tabela += linha;    
    }

    tabela += "</table>"

    return tabela;
}

module.exports = {montarTabela}





