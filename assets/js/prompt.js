  function solicitarString() {
    let nome = prompt("Digite o seu nome");
    let sobrenome = prompt(" Digite o seu sobre nome");

    let nomeSobrenome = nome + " " + sobrenome;

    alert(" Nome completo: " + nomeSobrenome);
}

function solicitarInt() {
    let numeroCartao = parseInt(prompt("DIgite o numero do cartao"));
    let codigoSeguranca = parseInt(prompt("Digite o numero de seguranca"));

    alert("Numero: " + numeroCartao + "\nCVV: " + codigoSeguranca)
}

function solicitarFloat() {
    let saldoBancario = parseFloat(prompt("Digite o saldo bancario"));
    const saque = parseFloat(prompt("Digite o valor do saque"));

    saldoBancario = saldoBancario - saque;

    alert("Saque realizado com successo: " + saque + "\nSaldo Atual: " + saldoBancario);
}

function solicitarBoolean() {
    let vencido = confirm("Produto vencido?");

    alert("Produto vencido: " + vencido);
}

function paciente() {
    let nome = prompt("Digite o nome do paciente");
    const idade = parseInt(prompt("Digite a idade"));
    const peso = parseFloat(prompt("Digite o peso"));
    const possuiPLanoSaude = confirm("Posui plano saude?");
    const cpf = prompt("Digite o CPF");

    let planoSaude = "";
    //se possuiPlanoSaude for igual a verdadeiro
    if (possuiPLanoSaude == true) {
        planoSaude = prompt("Digite o nome de plano saude");
    }

    const tipoSanguineo = prompt("Digite o tipo Sanguineo");
    const altura = parseFloat(prompt("Digite a altura"));

    const urgencia = prompt("Escolha o nivel de urgencia [migue, Atestado, Dorzinha, Dengue, Dor Extrema]");

    let tempoEspera = 0;
    if (urgencia == "Migue") {
        tempoEspera = 180;
    } else if (urgencia == "Atestado") {
        tempoEspera = 150;
    } else if (urgencia == "Dorzinha") {
        tempoEspera = 120;
    } else if (urgencia == "Dengue") {
        tempoEspera = 60;
    } else if (urgencia == "Dor Extrema") {
        tempoEspera = 30;
    } else {
        alert(" Nivel do urgencia inexistente");
        return;
    }
    alert(
        "Dados do paciente \n\n" +
        "Nome: " + nome + "\n" +
        "Nome: " + idade + " anos\n" +
        "Nome: " + peso + " kg\n" +
        "Nome: " + cpf + " \n" +
        "Possui plano saude: " + (possuiPLanoSaude ? "sim" : "Nao") + "\n" +
        (possuiPLanoSaude ? " Plano de Saude: " + planoSaude + "\n" : "") +
        "Tipo sanguineo: " + tipoSanguineo + "\n" + 
        "Altura: " + altura + " m\n" +
        "Nivel de urgencia: " + urgencia + "\n" +
        "Tempo de espera: " + tempoEspera + " minutos" 
    );
}