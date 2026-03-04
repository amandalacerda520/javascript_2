const readline = require('readline-sync');

console.log("sistema de acesso ao pub do john");

const nome = readline.question("qual seu nome?");
const idade = readline.questionInt("qual sua idade?");

if (idade >= 18) {
    console.log(`olá ${nome}, sua entrada foi autorizada. `);
    const jovem = readline.keyInYN("Deseja ver as bebidas?");
    if (jovem) {
        console.log("temos pepis e coca! ");
    } else {
        console.log("Temos sucos e água com gás");
} else if (idade >= 16) {
    console.log(`olá ${nome}, vocễ precisa estar acompanhado..`);
} else {
    console.log(`sinto muito ${nome}, apenas maiores de 16....`);
}
