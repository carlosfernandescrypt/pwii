let vetorNotas = []
let cont = 0

let inputNota = document.getElementById("entradaNota")
inputNota.focus()

inputNota.addEventListener("keypress", function(evento){
    if(evento.keyCode === 13){
        evento.preventDefault()
        document.getElementById("btnAdicionar").click()
        document.getElementById('entradaNota').value='';
    }
})


function adicionar(){
    let apagaNota = document.getElementById('media')
    apagaNota.innerText = `A média é: `  
    let valorNota = document.getElementById('entradaNota')
    let convertString = String(valorNota.value) 
    let temVirgula = convertString.indexOf(",") 
    
    if(temVirgula == 1){
        convertString = convertString.replace(",", ".")
    }
        
    if(valorNota.value == ""){
        alert('Por favor, insira uma nota.')
        valorNota.focus()
    } else {
        let nota = Number(convertString)

        if(nota >= 0){

            vetorNotas.push(nota)
            let selectNotas = document.getElementById('notasInseridas')
            let elemOption = document.createElement('option')

            selectNotas.appendChild(elemOption)
            elemOption.innerHTML = `A nota ${++cont} foi ${nota}`
            valorNota.value = ""
            valorNota.focus()
            
        }

    }

}

function calcMedia(){
    let soma = 0
    for(let cont = 0; cont < vetorNotas.length; cont++){
        soma += Number(vetorNotas[cont])
    }
    let media = soma / (vetorNotas.length)
    let imprimeNota = document.getElementById('media')
    imprimeNota.innerText = ""
    if(typeof vetorNotas[0] !== 'number'){
        imprimeNota.innerHTML = `A média é: `
    } else {
        imprimeNota.innerHTML = `A média é: ${media.toFixed(2)}`
    }
}

let abre = 0
