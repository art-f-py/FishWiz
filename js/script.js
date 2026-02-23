function adicionar() {
    let especieSelecionada = document.getElementById('idespecie').value
    let resultado = document.getElementById('resultado')

    if (especieSelecionada == "") {
        window.alert("[ERRO] Confira os dados e tente novamente.")
    } else {
        let peixe = especies[especieSelecionada]

        resultado.innerHTML = `
            <h3>${peixe.nome}</h3>
            <p><strong>Ambiente:</strong> ${peixe.ambiente}</p>
            <p><strong>Isca:</strong> ${peixe.isca}</p>
            <p><strong>Vara:</strong> ${peixe.vara}</p>
            <p><strong>Linha:</strong> ${peixe.linha}</p>
            <p><strong>Caster:</strong> ${peixe.caster}</p>
        `
    }
}
