export default function ordenarListaPontosMatriz (ListaMatrizPontuacao) {

    ListaMatrizPontuacao.sort( (a, b) => {
        return b.ponto - a.ponto;
    });
} 