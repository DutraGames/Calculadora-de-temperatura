// Celsius para fahrenheit (grau °C × 9/5) + 32

// Celsius para Kelvin grau °C + 273,15

//(fa °F − 32) × 5/9

const Kelvin =  273.15
const Fahrenheit = 32
const Grau = -32


function CalKelvin(){
    let Grau2 = document.getElementById('inp1').value
    if (Grau2 !== ''){
        let resultado = parseFloat(Grau2) + parseFloat(Kelvin)
        let resposta = document.getElementById('res1')
        resposta.innerHTML = Grau2 + 'ºC = ' + resultado + ' K'
    }else{
        let resposta = document.getElementById('res1')
        resposta.innerHTML = 'INSIRA UM VALOR'
    }
}

function CalFahrenheit(){
    let Fahrenheit2  = document.getElementById('inp2').value
    if(Fahrenheit2 !== '') {
        let resultado = (parseFloat(Fahrenheit2) + parseFloat(Grau)) * 5/9
        let resposta = document.getElementById('res2')
        resposta.innerHTML = Fahrenheit2 + 'ºF = ' + resultado.toFixed(2) + ' ºC'
    }else{
        let resposta = document.getElementById('res2')
        resposta.innerHTML = 'INSIRA UM VALOR'
    }
}