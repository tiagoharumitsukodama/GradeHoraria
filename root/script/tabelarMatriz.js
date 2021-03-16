

export default function tabelarMatriz(Matriz){

    let tabela = "<table>";
    let linha;

    for (let i=0; i<Matriz[0].length; i++) {
        linha = "<tr>";
        for (let j=0; j<Matriz.length; j++) {
            linha += `<td>${Matriz[j][i]}</td>`;
        }
        linha += "</tr>";
        tabela += linha;
    }

    return tabela + '</table>'
    
}






