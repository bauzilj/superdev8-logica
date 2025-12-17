
function exemploWhile() {
    let indice = 0;

    //Enquanto o indice for menor que 3, repete
    while (indice < 3) {
        let nome = prompt("Digite o nome");

        //Incremento a variavel indice em 1, ou seja, adicionar 1
        indice = indice + 1;
    }

    alert("Obrigado!!");
}

function exemploCalcularMedia() {
    let somaNotas = 0;
    let indice = 0;

    while (indice < 3) {
        let nota = parseFloat(prompt("Digte a nota"));

        somaNotas = somaNotas + nota;

        indice = indice + 1;
    }
    const media = somaNotas / 3;
    alert("Média: " + media)
}

function exemploVerificarAprovado() {
    let somaNotas = 0;
    let indice = 0;

    while (indice < 3) {
        let nota = parseFloat(prompt("Dgite a nota "));
        somaNotas = somaNotas + nota;
        indice = indice + 1;
    }
    const media = somaNotas / 3;
    let status = "";

    if (media >= 7){
        status = "Aprovado";
    } else {
        status = "Reprovado";
    }
    alert("Média: " + media + "\n Status: " + status)
}

function exemploMaiorValor(){
    deburger
    let indice = 0;
    let maiorAltura = 0;

    while (indice < 5){
        let altura = parseFloat(prompt("Insira a  altura")); //2.0

        if(altura > maiorAltura){
            maiorAltura = altura;
        }
        indice = indice + 1;
    } 
    alert("Maior altura é: " + maiorAltura);
}

function exemploMenorValor(){
    let indice = 0;
    let menorNumero = 9999999;

    //while(indice < 4){
    while(indice <= 3){
        let numero = parseInt(prompt("Digite o numero"))

        if(numero < menorNumero){
            menorNumero = numero;
        }

        indice = indice + 1;
    }
    alert("Menor número: " + menorNumero);
}
 function exemploDescobrirQuemMaiorValor(){
    let indice = 0;
    let maiorPreco = 0;
    let produtoMaiorPreco = "";

    while (indice < 3){
        const produto = prompt("Insira o nome d o produto");
        const preco = prompt("Digite o preco");

        if(preco > maiorPreco){
            maiorPreco = preco;
            // Armazenar o nome do produto pois ele até o momento
            // tem o maior preço
            produtoMaiorPreco = produto;
        }
        indice = indice + 1;
    } 
    alert("O produto " + produtoMaiorPreco + " tem o maior preço");
 }
  function exemploQuantidadePorCategoria(){
    let indice = 0;
    let quantidadeAdulto = 0; quantidadeIdoso = 0; quantidadeCrianca = 0;

    while (indice < 5){
        let idade = parseInt(prompt("Digita a idade"));

        if(idade < 18){
            quantidadeCrianca = quantidadeCrianca + 1;
        } else if (idade <= 64){
            quantidadeAdulto = quantidadeAdulto + 1;
        } else {
            quantidadeIdoso = quantidadeIdoso + 1;
        }
        indice = indice + 1;
    }
    alert(" Quantidade crianças: " + quantidadeCrianca +
        "\nQuantidade adultos: " + quantidadeAdulto +
        "\nQuantidade idosos: " + quantidadeIdoso
    )
  }

  function exemploRepetirQuantidadeDoUsuario(){
    let indice = 0; quantidadep = 0; quantidadeM = 0; quantidadeG = 0;

    let quantidadeDesejada = parseFloat(prompt("Digte a quantidade de calças que deseja cadastrar"));

    while(indice < quantidadeDesejada){
        let tamanhoCalca = prompt("Digite o tamanho de calça [P/M/G]");

        //Validar a informaçao esta correta
        while (tamanhoCalca != "P" && tamanhoCalca != "M" && tamanhoCalca !="G"){
            tamanhoCalca = prompt("Tamanho calça inexistente. \n Digite o tamanho da calça [P/M/G");
        }

        if (tamanhoCalca === "P"){
            quantidadep = quantidadep + 1;
        } else if (tamanhoCalca === "M"){
            quantidadeM = quantidadeM + 1;
        } else if(tamanhoCalca === "G"){
            quantidadeG = quantidadeG + 1;
        }
        indice = indice + 1;
    }
    alert(
        "Resumo das calças cadastradas: \n\n" +
        "P: " + quantidadep + "\n" +
        "M: " + quantidadeM + "\n" +
        "G: " + quantidadeG + "\n" 
    );
  }

  function exemploAteDigitarSair(){
    //Solicitar nome até digitar sair
    let nome = "";
    alert("Digite o nome dos jogadores do time futeball")

    while (nome != "sair"){
        nome = prompt("Digite o nome ou 'sair' para encerrar" );
    }
  }
    
function exemploDigitarSairComQuantidade(){
    //Solicitar nome atæe o usuario digitar sair,
    //quero saber a quantidade do jogadores
    let nome = "";
    let quantidadeJogadores = 0;

    alert("Digite o nome do jogadores do time do futebol");

    while (nome != "sair"){
        nome = prompt("Digite o nome ou 'sair' para encerrar");
        if (nome != "sair"){
            quantidadeJogadores = quantidadeJogadores + 1;
        }
    }
    alert("Quantidade de jogadores: " + quantidadeJogadores);
}

function exemploMenu(){
    let menu = undefined;

    let numero1 = parseInt(prompt("Digite o primeiro numero"));
    let numero2 = parseInt(prompt("Digite o segundo numeo"));

    while (menu != 10){
        menu = parseInt(prompt(
            'Menu: 1 - Sair 2 - Somar 2 - Multiplicar 3 - Dividir 5- Aleterar numero 1 6 - alterar numero 2 10 - Sair'
        ));

        if (menu === 1){
            const soma = numero1 + numero2;
            alert ("Soma: " + soma);

        } else if(menu === 2){
            const subtracao = numero1 - numero2;
            alert("Subtracao: " + subtracao)
        } else if( menu === 3){
            const multiplicacao = numero1 * numero2;
            alert("Multiplicacao: " + multiplicacao);
        } else if ( menu === 4){
            if (numero2 ===0){
                alert("Nao e possivel dividir por zero")
            } else {
                const divisao = numero1 / numero2;
                alert("Divisao: " + divisao);
            }
        } else if (menu === 5){
            numero1 = parseInt(prompt("Digite o primeiro numero ", numero1))
        } else if (menu === 6) {
            numero2 = parseInt(prompt("Digite o segundo numero ", numero2))
        }
    }
}

function exemploColaboradores() {
    // ✔️ Cadastrar quantos colaboradores eu desejar
    // ✔️ Pedir:
    //  ✔️  - valor hora
    //  ✔️  - quantidade horas
    //  ✔️ - setor [Produção, Qualidade, Financeiro]
    // ✔️ Calcular o salário bruto
    // ✔️ Calcular o salário líquido
    // ✔️ Maior salário líquido
    // ✔️ Menor salário bruto
    // ✔️ Média dos salários brutos
    // ✔️ Nome pessoa que trabalha mais horas
    // Quantidade de pessoas por Setor

    let quantidadeDesejada = parseInt(prompt("Digite a quantidade de colaboradores"));
    let maiorSalarioLiquido = 0;
    let menorSalarioBruto = 99999999;
    let somaSalarioBrutos = 0;
    let maiorQuantidadeHoras = 0;
    let nomeMaiorQuantidadeHoras = "";
    let quantidadeProducao = 0, quantidadeQualidade = 0, quantidadeFinanceiro = 0;
    let quantidadeOutroSetor = 0;

    let indice = 0;

    while (indice < quantidadeDesejada) {
        let nome = prompt("Digite o nome do colaborador");
        let valorHora = parseFloat(prompt("Digite o valor da hora"));
        let horasTrabalhadas = parseInt(prompt("Digite a quantidade de horas trabalhadas"));
        let setor = prompt(`
Digite o nome do setor:
Financeiro
Produção
Qualidade`);
        let salarioBruto = valorHora * horasTrabalhadas;
        let inss = salarioBruto * 0.08; // Calcular 8% de inss
        let ir = salarioBruto * 0.275; // Calcular 27.5% de imposto de renda
        let valeRefeicao = 1400;

        let salarioLiquido = salarioBruto - inss - ir + valeRefeicao;
        alert(
            "Folha de Pagamento\n\n" +
            "Colaborador: " + nome + "\n" +
            "Setor: " + setor + "\n\n" +
            "Valor da hora: R$ " + valorHora.toFixed(2) + "\n" +
            "Horas trabalhadas: " + horasTrabalhadas + "\n\n" +
            "Salário bruto: R$ " + salarioBruto.toFixed(2) + "\n" +
            "Desconto INSS (8%): R$ " + inss.toFixed(2) + "\n" +
            "Desconto IR (27,5%): R$ " + ir.toFixed(2) + "\n" +
            "Vale refeição: R$ " + valeRefeicao.toFixed(2) + "\n\n" +
            "Salário líquido: R$ " + salarioLiquido.toFixed(2)
        );

        if (salarioLiquido > maiorSalarioLiquido) {
            maiorSalarioLiquido = salarioLiquido;
        }

        if (salarioBruto < menorSalarioBruto) {
            menorSalarioBruto = salarioBruto;
        }

        if (horasTrabalhadas > maiorQuantidadeHoras) {
            maiorQuantidadeHoras = horasTrabalhadas;
            nomeMaiorQuantidadeHoras = nome;
        }

        if (setor === "Qualidade") {
            quantidadeQualidade = quantidadeQualidade + 1;
        } else if (setor === "Financeiro") {
            quantidadeFinanceiro = quantidadeFinanceiro + 1;
        } else if (setor === "Produção") {
            quantidadeProducao = quantidadeProducao + 1;
        } else {
            quantidadeOutroSetor = quantidadeOutroSetor + 1;
        }

        somaSalarioBrutos = somaSalarioBrutos + salarioBruto;

        indice = indice + 1;// Incrementar
    }

    let mediaSalarioBrutos = somaSalarioBrutos / quantidadeDesejada;
    alert(
        "RESUMO GERAL DOS COLABORADORES\n\n" +

        "Maior salário líquido: R$ " + maiorSalarioLiquido.toFixed(2) + "\n" +
        "Menor salário bruto: R$ " + menorSalarioBruto.toFixed(2) + "\n" +
        "Média dos salários brutos: R$ " + mediaSalarioBrutos.toFixed(2) + "\n\n" +

        "Maior quantidade de horas trabalhadas: " + maiorQuantidadeHoras + "\n" +
        "Colaborador com mais horas: " + nomeMaiorQuantidadeHoras + "\n\n" +

        "Quantidade por setor:\n" +
        "Financeiro: " + quantidadeFinanceiro + "\n" +
        "Produção: " + quantidadeProducao + "\n" +
        "Qualidade: " + quantidadeQualidade + "\n" +
        "Outros setores: " + quantidadeOutroSetor
    );
}

