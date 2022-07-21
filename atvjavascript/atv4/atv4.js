function contar() {
    let saida = document.getElementById('saida')


    let cont = 100
    while (cont <= 120) {
        if (cont % 2 == 0) {
            saida.innerHTML += `<strong> ${cont} </strong>;`    
        }
        cont ++
    }

}