function exibirLista() {
    let num = document.getElementById("entradaLista").value;


    if (!num || isNaN(num) || num <= 0) {
        const listaNomes = document.getElementById("listaNomes");
        listaNomes.innerHTML = ""

        const erro = document.createElement("li")
        erro.textContent = "Por favor, digite um número válido."
        erro.style.color = "red"
        listaNomes.appendChild(erro)
        return
    }

    const lista = []

    for (let i = 0; i < num; i++) {
        lista.push("Pedro Felipe")
    }

    const listaNomes = document.getElementById("listaNomes");
    listaNomes.innerHTML = ""; 

    let indice = 1;
    for (let nome of lista) {
        const li = document.createElement("li");
        li.textContent = nome + " " + indice;
        listaNomes.appendChild(li);
        indice++
    }
}




