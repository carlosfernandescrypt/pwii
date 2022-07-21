function contar() {
    let saida = document.getElementById('saida')

    let cont = 10
    while (cont <= 30) {
        saida.innerHTML += `<strong> ${cont} </strong>;`    
        cont ++
    }
}