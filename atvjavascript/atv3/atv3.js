function contar() {
    let cont = 100
    while (cont <= 120) {
        if (cont % 2 == 0) {
            saida.innerHTML += `<strong> ${cont} </strong>;`    
        } else {
            saida.innerHTML += ` ${cont};`
        }
        cont ++
    }
}