export default function exportar() {

    let btMontarGrade = document.querySelector('#botaoMontarGrade');
    let btExportar = document.querySelector('#botaoExportar');
    let btProximo = document.querySelector('#botaoProximo');
    let btDireito = document.querySelector('#botaoDireito');
    let btEsquerdo = document.querySelector('#botaoEsquerdo');
    let h2 = document.querySelector('h2');
    let h4 = document.querySelector('h4');

    btMontarGrade.disabled = true;
    btExportar.disabled = false;
    btProximo.style.display = 'none';
    btDireito.style.display = "none";
    btEsquerdo.style.display = 'none';

    h2.innerHTML = 'Exportar';
    h4.innerHTML = 'Parambéns! Essa é a sua grade! Se quiser, pode clicar em "Exportar" para gerar um arquivo.';

    gerarArquivo()
}

function gerarArquivo() {

    let MatrizFinal;
    let tabela = document.querySelector('table');
    let rows = tabela.rows;

    for (let indiceRow=1; indiceRow<rows.length; indiceRow++) {
        rows[indiceRow].cells[0].innerHTML = indiceRow;
    }

    let io = document.querySelector('div#io');
    io.replaceChild(tabela , io.firstElementChild);

}