// f(x) = x² - 2x +1 
// Achar o maior valor de P {x,y}
// Intervalor -10 a 10


// criar a primeira geração
let geracaoAntes = [];
let geracaoDepois = [];
let moduloMax = 1;
let melhorporcentagem = 0;



function GerarNumeroAleatorio(array){
    
    let x = 1 * Math.random() * (-1) ** (parseInt( 2*Math.random() ));
    let y = 1 - x**2;
    array.push( {X:x, Y:y} );
}

//popular geracaoAnterior
for(let i = 0; i<10; i++) {
    GerarNumeroAleatorio(geracaoAntes);
}

while (melhorporcentagem < 99.99) {
    // selecionar os melhores
    geracaoAntes.sort( function(a, b) { return b.Y - a.Y } );
    let aux = [...geracaoAntes];
    geracaoDepois = aux.splice(0,5);

    // cruzar
    for( let ponto = 0; ponto < geracaoAntes.length-1; ponto++ ) {

        let x,y;

        if(geracaoDepois[ponto] == undefined) {
            x = 1 * Math.random() * (-1) ** (parseInt( 2*Math.random() ));
            y = 1 - x**2;
        }
        else {
            let x1 = geracaoAntes[ponto].X;
            let x2 = geracaoAntes[ponto+1].X;
            x = (x1 + x2)/2;
            y = 1 - x**2;
        }
    
        // criar a segunda geração
        geracaoAntes[ponto].X = x;
        geracaoAntes[ponto].Y = y;
    }


    // mutação
    if( Math.random() > 0.7 ) {
        let x = 1 * Math.random() * (-1) ** (parseInt( 2*Math.random() ));
        let y = 1 - x**2;
        geracaoDepois[ (Math.random()*geracaoDepois.length).toFixed(0) ] = {X:x, Y:y};

        console.log("Mutou");
    }



    // ver os melhores
    function verMelhores(array) {

        let porcentagem;

        array.forEach( (element,i) => {
            porcentagem = (element.Y)*100;
            console.log( i + " tem precissao de: " +  porcentagem);

            if ( porcentagem > melhorporcentagem )
                melhorporcentagem = porcentagem;
        });

        return melhorporcentagem;
    }

    verMelhores(geracaoAntes);
}