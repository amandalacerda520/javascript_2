const readline = require("readline-sync");
 
console.log("jogo da adivinhação, chuteum numero de 1 a 10:");

const numeroSecreto = Math.floor(Math.random()*10+1);

let palpite = readline.questint("qual é o seu palpite?")
let tentativas =1;

wile(palpite != numeroSecreto){
    if(papite < numeroSecreto){
        console.log("o numero secreto e maior que seu chute.")
    }
     palpite =readline.questionInt("tente de novo.");
     tentativas++;
    }

    console.log('parabens,você acertou o ${numeroSecreto}e,')