function formataMoeda() {
    return "R$ " + valorMoeda.toFixed(2).replace(".", ",")
}

function pegaNumero(txt){
    return parseFloat( ( prompt(txt) || "" ) .replace(",", "."))
}

function calculaPontos(nome) {
    const vitorias = pegaNumero("Digite o número de vitórias do " + nome)
    const empates = pegaNumero("Digite o número de empates do " + nome)
    const derrotas= pegaNumero("Digite o número de derrotas do " + nome)

    //variavel local
    var pontos = vitorias * 2 + empates * 0 + derrotas * -1
    document.write(nome + " tem " + pontos + " pontos" + "<br>")
    return pontos
}

function geraNumeroAleatorio(minimo, maximo) {
        return parseInt(Math.random() * (maximo - minimo) + minimo)
}

function mostra(texto){
    var tag = document.createElement("p")
    tag.id = "resultado"
    tag.innerHTML = texto
    document.body.appendChild(tag)
}