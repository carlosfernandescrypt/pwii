function info() {
    let semana = new Array ('Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado')
    let agora = new Date
    let saida = document.getElementById('saida')
    let sem = agora.getDay()  
    saida.innerHTML += `<p>Dia da semana: ${semana[sem]}</p>`
}