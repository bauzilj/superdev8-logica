function exercicio01(){
    let nome = prompt(" Digite o seu nome");
    const idade = parseInt(prompt(" Digite sua idade"));
    let cidade = prompt("Digite sua cidade");
    const possuiPoderes = confirm("Pussui poderes? ");
    
    if (possuiPoderes ===true) {
        poderes = prompt("Digite o seu poder");
    }
    const quantidadeAtuacao = parseInt(prompt("Digite as suas atuacoes mensais "));

    alert(
        "Dados da personagem \n\n" +
        "Nome: " + nome + "\n" +
        "Idade: " + idade + " anos\n" +
        "Cidade: " + cidade + "\n" +
        "Possui super Poderes? : " + (possuiPoderes ? "sim" : "Nao") + "\n" +
        "Quantidade atuacoes mensais: " + quantidadeAtuacao + " mensais"
        
    );
}

function exercicio02(){
    let ladoBase1 = parseInt(prompt("Digita o numero quadrado 1"));
    let ladoBase2 = parseInt(prompt(" Solicitar o numumero quadrado 2"));

    areaQuadrado = ladoBase1 * ladoBase2;

    alert("O area quadrado : " + areaQuadrado + " Area Quadrado");
}