function carregarEstados() {
    let selectEstados = document.getElementById('idestado')
    selectEstados.innerHTML = ""

    const optionPadrao = document.createElement('option')
    optionPadrao.value = ""
    optionPadrao.text = "Selecione o estado"
    selectEstados.appendChild(optionPadrao)

    for (let estado in estados) {
        const option = document.createElement('option')
        option.value = estado
        option.text = (estados[estado].nome)
        selectEstados.appendChild(option)
    }
}
function carregarEspecies(estadoSelecionado) {
    const selectEspecies = document.getElementById('idespecie')
    selectEspecies.innerHTML = ""

    const optionPadrao = document.createElement('option')
    optionPadrao.value = ""
    optionPadrao.text = "Selecione a espécie"
    selectEspecies.appendChild(optionPadrao)

    if (estadoSelecionado === "") {
        return
    }

    const especiesdoEstado = estados[estadoSelecionado].especies

    for (let chave in especiesdoEstado) {
        const option = document.createElement('option')
        option.value = chave
        option.textContent = especiesdoEstado[chave].nome
        selectEspecies.appendChild(option)
    }
}

document.getElementById('idestado').addEventListener('change', function() {
    const estadoSelecionado = this.value
    carregarEspecies(estadoSelecionado)
})

function adicionar() {
    const estadoSelecionado = document.getElementById('idestado').value
    const especieSelecionada = document.getElementById('idespecie').value

    if (estadoSelecionado === "" || especieSelecionada === "") {
        window.alert("[ERRO] Confira as informações e tente novamente.")
        return
} else {
    const peixe = estados[estadoSelecionado].especies[especieSelecionada]
    resultado.innerHTML = `
        <h3>${peixe.nome}</h3>
        <img src="${peixe.imagem}" alt="${peixe.nome}" style="max-width:400px; display:block; margin-bottom:10px;">
        <p><strong>Ambiente:</strong> ${peixe.ambiente}</p>
        <p><strong>Isca:</strong> ${peixe.isca}</p>
        <p><strong>Vara:</strong> ${peixe.vara}</p>
        <p><strong>Linha:</strong> ${peixe.linha}</p>
        <p><strong>Caster:</strong> ${peixe.caster}</p>
    `
}}

window.onload = function() {
    carregarEstados()
}