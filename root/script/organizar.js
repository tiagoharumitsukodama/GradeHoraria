function listaMatrizEpontuacao(TodasTurmas) {

    let listaMatrizEpontuacao = [];

    let arrayKeysPrioridadeTurmas = Object.keys(TodasTurmas);
    let copiaTodasTurmas;
    let listaDeComponentesJaForamRodada = [];

    arrayKeysPrioridadeTurmas.sort( (key1, key2) => {
        return TodasTurmas[key1].length - TodasTurmas[key2].length;
    });


    for (let versao=0; versao < 10; versao++) { //VALOR ARBITRARIO
        let Matriz = [];
        let PontoMatriz = montarMatrizEPontuacao(Matriz);

        listaMatrizEpontuacao.push({
            ponto: PontoMatriz,
            matriz: Matriz
        })
    }
    return listaMatrizEpontuacao;


    function montarMatrizEPontuacao(Matriz){

        copiaTodasTurmas = JSON.parse(JSON.stringify(TodasTurmas));
        let PontoMatriz = 0;

        while ((JSON.stringify(copiaTodasTurmas) !== '{}')) {
            
            listaDeComponentesJaForamRodada = [];
            let keyTurma;

            for (let indicekeyTurma in arrayKeysPrioridadeTurmas) {

                let keyTurma = arrayKeysPrioridadeTurmas[indicekeyTurma];

                if (!Array.isArray(Matriz[indicekeyTurma]))
                    Matriz[indicekeyTurma] = [];

                try {
                    let indiceCopiaTodasTurmasKeyTurma;
                    let componente;
                    let maxTentativas = 10; // ARBITRARIO

                    do {
                        if ( !maxTentativas --) {
                            throw "Atingiu o limite de tentativas";
                        } 

                        if (Array.isArray(copiaTodasTurmas[keyTurma])) {
                            indiceCopiaTodasTurmasKeyTurma = parseInt(copiaTodasTurmas[keyTurma].length*Math.random())
                            componente = copiaTodasTurmas[keyTurma][indiceCopiaTodasTurmasKeyTurma];
                        }
                        else {
                            throw "Não tem mais opções para esta turma";
                        }

                    } while (typeof componente === 'undefined' ||
                            listaDeComponentesJaForamRodada.indexOf(componente.nomeComponente)!==-1)


                    Matriz[indicekeyTurma].push(componente.nomeComponente)
                    listaDeComponentesJaForamRodada.push(componente.nomeComponente);
                    copiaTodasTurmas[keyTurma].splice(indiceCopiaTodasTurmasKeyTurma, 1);
                    PontoMatriz ++;

                    if (!copiaTodasTurmas[keyTurma].length)
                        delete copiaTodasTurmas[keyTurma];


                } catch (error) {
                    Matriz[indicekeyTurma].push(`---`);
                    PontoMatriz --;
                }
            }
        }

        return PontoMatriz;
    }
}

module.exports = {listaMatrizEpontuacao};