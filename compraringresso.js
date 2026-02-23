let saldoConta = 500;
let precoIngresso = 900;

console.log("Tendando comprar o ingresso...")

if (saldoConta >= precoIngresso){
    let troco = saldoConta - precoIngresso;
    console.log("compra realizada, bom show!");
    console.log("seu troco e R$:" + troco)
    }else{
        console.log("saldo Insuficiente. Faltam R$:" + (precoIngresso - saldoConta))
    }