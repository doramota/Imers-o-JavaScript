function adicionarFilme() {
    var filmeFavorito = document.getElementById('filmes').value
    var elementoListaFilmes = document.getElementById('listafilmes')
    elementoListafilmes.innerHTML = elementoListaFilmes.innerHTML + '<img src=' + filmeFavorito + '>'
     document.getElementById('filme').value = ''
     
     
   }