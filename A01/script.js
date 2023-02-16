var thiago = {
    nome: "Thiago",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
};

var duda = {
    nome: "Duda",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
};

var Davi = {
    nome: "Naiury",
    vitoria: 10,
    empate: 0,
    derrota: 0,
    pontos: 0
};

var dora = {
    nome: "Egidio",
    vitoria: 10,
    empate: 0,
    derrota: 0,
    pontos: 30  
};

var elementoTabela = document.getElementById("tabelaJogadores");

exibirNaTela();

function exibirNaTela() {
    elementoTabela.innerHTML = `
  <tr>
      <td>${dora.nome}</td>
      <td>${dora.vitoria}</td>
      <td>${dora.empate}</td>
      <td>${dora.derrota}</td>
      <td>${dora.pontos}</td>
      <td><button class="btn btn-success" onClick="adicionarVitoria(dora)">Vitória</button></td>
      <td><button class="btn btn-secondary" onClick="adicionarEmpate(dora)">Empate</button></td>
      <td><button class="btn btn-danger" onClick="adicionarDerrota(dora)">Derrota</button></td>
  </tr>
`;
}

function adicionarVitoria(jogador) {
    jogador.vitoria++;
    jogador.pontos = jogador.pontos + 3;
    exibirNaTela();
}

function adicionarEmpate(jogador) {
    jogador.empate++;
    jogador.pontos++;
    exibirNaTela();
}

function adicionarDerrota(jogador) {
    jogador.derrota++;
    exibirNaTela();
}