function formataMoeda() {
    return "R$ " + valorMoeda.toFixed(2).replace(".", ",")
}

function pegaNumero(){
    return parseFloat(prompt(textoPrompt).replace(",", "."))
}