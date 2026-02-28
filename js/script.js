/* global estados */

document.addEventListener('DOMContentLoaded', function () {

  carregarEstados();

  document
    .getElementById('idestado')
    .addEventListener('change', carregarEspecies);

  document
    .getElementById('btnAdicionar')
    .addEventListener('click', adicionar);

});

function carregarEstados() {
  const selectEstado = document.getElementById('idestado');

  // Limpa antes de popular (evita duplicação)
  selectEstado.innerHTML = '<option value="">Selecione um estado</option>';

  for (const estado in estados) {
    const option = document.createElement('option');
    option.value = estado;
    option.textContent = estados[estado].nome;
    selectEstado.appendChild(option);
  }
}

function carregarEspecies() {
  const estadoSelecionado = document.getElementById('idestado').value;
  const selectEspecie = document.getElementById('idespecie');

  // Limpa espécies anteriores
  selectEspecie.innerHTML = '<option value="">Selecione uma espécie</option>';

  if (estadoSelecionado === '') {
    return;
  }

  const especies = estados[estadoSelecionado].especies;

  for (const chave in especies) {
    const option = document.createElement('option');
    option.value = chave;
    option.textContent = especies[chave].nome;
    selectEspecie.appendChild(option);
  }
}

function adicionar() {
  const estadoSelecionado = document.getElementById('idestado').value;
  const especieSelecionada = document.getElementById('idespecie').value;
  const resultado = document.getElementById('resultado');

  if (estadoSelecionado === '' || especieSelecionada === '') {
    window.alert('[ERRO] Confira as informações e tente novamente.');
    return;
  }

  const peixe = estados[estadoSelecionado].especies[especieSelecionada];

  resultado.innerHTML = `
    <h3 class="mb-3">${peixe.nome}</h3>
    <img src="${peixe.imagem}" alt="${peixe.nome}" class="img-fluid mb-3">
    <p><strong>Ambiente:</strong> ${peixe.ambiente}</p>
    <p><strong>Isca:</strong> ${peixe.isca}</p>
    <p><strong>Vara:</strong> ${peixe.vara}</p>
    <p><strong>Linha:</strong> ${peixe.linha}</p>
    <p><strong>Caster:</strong> ${peixe.caster}</p>
  `;
}