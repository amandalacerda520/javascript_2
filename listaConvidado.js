const readline = require('readline-sync');

let listaFinal="";
let contador = 0;
let continuar = "s";
console.log("cadrasto de convidado");

while (continuar ==="s"){
    contador++;
    let nome = readline.question(`digite o nome do convidado ${contador}:`);
    let idade = readline.question(`digite a idade do convidado ${nome}`);

    listaFinal +=`${contador}.nome: ${nome} idade: ${idade}`;

    continuar = readline.question("deseja cadrastar mais  alguém (s/n)");
}
 console.log(" convidado  cadrastrados: ");
 if(listaFinal===""){
    console.log("ninguém foi convidado");
}else{
    console.log(listaFinal);
}