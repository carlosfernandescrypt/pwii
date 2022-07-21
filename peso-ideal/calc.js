const resultado = document.querySelector('#resultado')
const sexo = document.querySelector('#sexo')
const altura = document.querySelector('#altura')

const calcPI = () => {

  if (sexo.value !== '' && altura.value !== '') {
    if (sexo.value == 'M') {
      const pim = (72.7 * altura.value - 58).toFixed(2)
      resultado.innerHTML = `Peso Ideal: ${pim}`
    }
    else if (sexo.value == 'F') {
      const pif = (62.1 * altura.value - 44.7).toFixed(2)
      resultado.innerHTML = `Peso Ideal: ${pif}`
    }
  } 
  else {
    resultado.innerHTML = 'Preencha os campos'
  }
}
