function calculoIMC(peso, altura){
    let imc = peso/(altura ** 2);

    console.log("seu IMC é," + IMC);

    if(imc < 18.5){
        console.log("classificação: abaixo do peso");
    }
else if (imc >= 18.5 && imc <= 24.9){
    console.log("classifição : peso normal");
}
else if (imc >= 25 && imc <= 29.9){
    console.log("classificação: sobrepeso");
}
else{
    console.log("classificação: obesidade");
  }
}

calculoIMC(84, 1.84)

