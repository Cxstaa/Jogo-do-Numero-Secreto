let listaDeNumerosSorteados = []
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas =1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
exibirMensagemInicial()
function exibirMensagemInicial(){
  exibirTextoNaTela('h1', 'jogo do numero secreto');
  exibirTextoNaTela('p', 'Escolha um numero ente 1 e 10');
  
}

function verificarChute() {
 let chute = document.querySelector('input').value;
if (chute == numeroSecreto){
  exibirTextoNaTela ('h1', 'Acertou');
  let palavraTentativa = tentativas  > 1 ? 'tentativas':
  'tentativa' 
  let mensagemTentativas =  `Você descobriu o numero secreto com 
  ${tentativas} tentativas! `; 
exibirTextoNaTela ('p', mensagemTentativas);
document.getElementById('reiniciar').removeAttribute('disabled'); 
} else {
  if ( chute > numeroSecreto ){
    exibirTextoNaTela ('p', 'O numero secreto é menor');
   } else {
    exibirTextoNaTela ('p', 'O numero secreto é maior');
} 
tentativas++; 
limparCampo();
}

}

function gerarNumeroAleatorio() {
let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
let quatidadeDeElementosNaLista = listaDeNumerosSorteados.length;

if (quatidadeDeElementosNaLista == numeroLimite){
  listaDeNumerosSorteados = [];
}
if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
return gerarNumeroAleatorio();
} else {
  listaDeNumerosSorteados.push(numeroEscolhido);
  console.log (listaDeNumerosSorteados)
  return numeroEscolhido;
}
}
function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo(){
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById ('reiniciar').setAttribute('disabled',true);
}