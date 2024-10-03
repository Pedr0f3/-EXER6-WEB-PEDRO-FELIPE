function exibirNome() {
    let nome = document.getElementById("entradaNome").value;
    if (nome) {
        document.getElementById("mensagem").innerHTML = "Olá " + nome + "! Seja bem-vindo à página do Pedro Felipe.";
    } else {
        document.getElementById("mensagem").innerHTML = "Por favor, digite seu nome.";
    }
}