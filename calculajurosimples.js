function calculajurosimples(capital, taxa, tempo){
    let juros = capital * (taxa /100) * tempo
    let montante = capital + juros;
    
    return montante;
}

let conta1 = calculajurosimples(500, 4, 6);
console.log("o montante é: " + conta1);