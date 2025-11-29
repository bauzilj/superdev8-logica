function exemploVariaveisTexto() {
    const produto1 = "Xbox";
    const produto2 = "Gameboy Color";

    const produtos = produto1 + " " + produto2;
    alert("produtos: " + produtos)
}

function exemploVariaveisInteiro() {
    const numero1 = 18;
    const numero2 = 147;

    const soma = numero1 + numero2;

    alert(" Soma: " + soma);
}

function exemploVariaveisFloat() {
    const quantidadeHoras = 10;
    const valorHoras = 2.31;

    const salarioBruto = quantidadeHoras * valorHoras;

    alert("Salario bruto: " + salarioBruto);
}
function exemploVariaveisBoolean() {

    // Let: permite retribuir o valor da variable depois de criada.

    // Const : Não permite reatribubuir o valor, apenas a leitura (o vinculo e constante);
    let lorenzoFechouAba = false;

    //lorenzoFechouAba = true;

    alert("Lerenzo fechou a aba: " + lorenzoFechouAba);
}

function exemploVariaveis() {
    const destino = "Maceio";
    const quantidadeDias = 20;
    const precoDiaria = 1300.1;
    let finalizadaCompra = false;

    let valorTotal = quantidadeDias * precoDiaria;

    //usuario finalizou a compra
    finalizadaCompra = true;

    alert(
        "Destino: " + destino +
        "\nQuantidade de dias: " + quantidadeDias +
        "\nPreço diaria: " + precoDiaria +
        "\nFinalizar compra: " + finalizadaCompra +
        "\nValor total: R$ " + valorTotal
    );
}

function exercicioPokemon() {
    const nome = "Hatterene ";
    const numero = " 0858";
    const descricao = "Hatterene knocks out those that intrude in its home forest by blasting them with a beam, then slashing with claws enhanced by psychic power. ";
    const altura = 2.1;
    const peso = 5.1;
    const categoria = " Silent";
    const habilidade = " Anticipation";

    let IMC = peso * altura;

    alert(
        "Nome: " + nome +
        "\nNumero do jogo: " + numero +
        "\nDescricao do jogo: " + descricao +
        "\nAltura: " + altura +
        "\nPeso: " + peso +
        "\nCategoria:  " + categoria +
        "\nHabilidades:  " + habilidade +
        "\nIMC do jogo:  " + IMC
    );
}