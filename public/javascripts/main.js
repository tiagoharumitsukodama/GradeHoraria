

function addTurma() {
    let formulario = document.getElementById('info_componente');
    let div = document.createElement('DIV');

    div.innerHTML = 

    `<div class="DivParaComponente">
    <input type='text' name="nomeTurma" required placeholder="Por exemplo 3A">
    <input type="number" name="quantidadeAulasTurma" placeholder="Nº aulas turma" required>
    </div>`

    formulario.appendChild(div);
}
