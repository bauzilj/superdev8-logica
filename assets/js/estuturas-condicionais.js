//Operador Realacionais

// ==    Igual valor
// ===   Igual valor e tipo
// >     Maior
// >=    Maior ou igual
// <     Menor
//<=     Menor ou igual
// !=.   Diferente
function exemploBasico() {
    let idade = 42;

    // se a idade for menor que 18
    if (idade < 18) {
        alert("Menor de idade");
    } else if (idade < 65) { // senao se a idade for menor que 65
        alert("Adulto");
    } else {
        alert("odo")
    }
}

// Operador Logiócos
// && E
// || ou (pipeline)

// Tabela verdade do operador lógicos E
// V e V => V
// V e F => F
// F e v => F
// F e F => F

function exemploE() {
    let nivel = -8;
    // nivel 01 .. 10 é bronze
    // nivel 11 ..10 é prata
    // nivel 11 .. 30 é ouro
    // ...
    if (nivel >= 0 && nivel <= 10) {
        alert("Elo bronze");
    }
}

// Tabela de verdade do operador lógico ou
// V ou V => V
// F ou V => V
// V ou F => V
//F ou F => F

function exemploOu() {
    //menor idade ou Estudente
    let idade = 30;
    let estudente = true;

    if (idade < 18 || estudente == true) {
        alert("Pode comprar meio ingresso")
    } else {
        alert("Nao pode comprar ingresso")
    }
}

function exemploIncremento() {
    deburger
    let quantidadeIdoso = 0, quantidadeAdulto = 0;
    //pessoa1
    let nome1 = prompt("Digite o nome da primeira pessoa: ");
    let idade1 = parseInt(prompt("Digite a idade de nome " + nome1 + ":"));

    if (idade1 < 65) {
        //adulto
        //incrementar
        quantidadeAdulto = quantidadeAdulto + 1;
    } else {
        //idoso
        quantidadeIdoso = quantidadeIdoso + 1;
    }


    //Pessoa2
    let nome2 = prompt("Digite o nome da segunda pessoa: ");
    let idade2 = parseInt(prompt("Digite a idade de nome " + nome2 + ":"));

    if (idade2 < 65) {
        //adulto
        //incrementar
        quantidadeAdulto = quantidadeAdulto + 1;
    } else {
        //idoso
        quantidadeIdoso = quantidadeIdoso + 1;
    }
    //pessoa3
    let nome3 = prompt("Digite o nome da terceira pessoa: ");
    let idade3 = parseInt(prompt("Digite a idade de nome " + nome3 + ":"));

    if (idade3 < 65) {
        //adulto
        //incrementar
        quantidadeAdulto = quantidadeAdulto + 1;
    } else {
        //idoso
        quantidadeIdoso = quantidadeIdoso + 1;
    }
    alert(
        "Pesso 1\nNome: " + nome1 + "| Idade: " + idade1 + " anos\n\n" +
        "Pesso 2\nNome: " + nome2 + "| Idade: " + idade2 + " anos\n\n" +
        "Pesso 3\nNome: " + nome3 + "| Idade: " + idade3 + " anos\n\n" +
        "Resumo: \n" +
        "Quantidade  de Adulto: " + quantidadeAdulto + "\n" +
        "Quantidade de idos: "
    )

    //deburger
    let contagemRegressiva = 10;

    alert(contagemRegressiva);

    //decrementar
    contagemRegressiva = contagemRegressiva - 1; //9
    alert(contagemRegressiva);

    contagemRegressiva = contagemRegressiva - 1; //8
    alert(contagemRegressiva);

    contagemRegressiva = contagemRegressiva - 1; //7
    alert(contagemRegressiva);

    contagemRegressiva = contagemRegressiva - 1; //6
    alert(contagemRegressiva);

    contagemRegressiva = contagemRegressiva - 1; //5
    alert(contagemRegressiva);

    contagemRegressiva = contagemRegressiva - 1; //4
    alert(contagemRegressiva);

    contagemRegressiva = contagemRegressiva - 1; //3
    alert(contagemRegressiva);

    contagemRegressiva = contagemRegressiva - 1; //2
    alert(contagemRegressiva);

    contagemRegressiva = contagemRegressiva - 1; //1
    alert(contagemRegressiva);

    contagemRegressiva = contagemRegressiva - 1; //0
    alert("Feliz ano novo m");
}

function somarNumeros() {
    let soma = 0;

    const numero1 = parseInt(prompt("Digite o numero 1: "));
    soma = soma + numero1;

    const numero2 = parseInt(prompt("Digite o numero 1: "));
    soma = soma + numero2;

    const numero3 = parseInt(prompt("Digite o numero 1: "));
    soma = soma + numero3;

    const numero4 = parseInt(prompt("Digite o numero 1: "));
    soma = soma + numero4;

    const media = soma / 4;

    alert("Soma: " + soma + "\nMédia: " + media);
}
