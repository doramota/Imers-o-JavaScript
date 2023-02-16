var numeroSecreto = 899
while(chute != numeroSecreto){

var chute = prompt("Digite um número entre 0 e 1000");

//se o chute for igual ao número secreto 
if ( chute ==numeroSecreto){
  
   alert('Uhu, Acertou!!!')
  
} 

else if (chute > numeroSecreto) {
  alert('Errou...o número secreto é menor')
}

else if(chute < numeroSecreto) {
  alert('Errou...o número secreto é maior')
}
}




  