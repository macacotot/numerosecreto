const nome = (prompt("Digite seu nome: "))
let numero = parseInt(prompt(`Olá,${nome}! Você deseja um número entre 0 e qual valor?`))
const numaleatorio = Math.floor(Math.random() * numero);

var tentativa = 1;
let resposta = numero+1;

while(resposta != numaleatorio){
    resposta = prompt("Qual número você acha que foi sorteado? ")
    if (resposta == numaleatorio) {
        break;
    } else if (resposta > numaleatorio) {
        alert("O número é menor!!!")
    } else if(resposta < numaleatorio) {
        alert("O número é maior!!!")
    }
    tentativa++;
}
if(tentativa == 1){
    prompt("Parabéns, "+nome+". Onúmero era "+numaleatorio+". Você acertou em "+tentativa+" tentativa.")
} else {
    prompt("Parabéns, "+nome+". Onúmero era "+numaleatorio+". Você acertou em "+tentativa+" tentativas.")
}
