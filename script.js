let horas = 00
let minutos = 00
let segundos = 00

function começar() {
    setInterval(watch,1000)
}

function parar() {
    console.log('Parou!')
} 

function resetar() {
    console.log('Resetou!')
}

// Relógio
function watch(){
    segundos++
    if(segundos == 60) {
        minutos++
        segundos=0
    }
    document.getElementById('watch').innerHTML= minutos +':'+ segundos
}