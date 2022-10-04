let horas = 00
let minutos = 00
let segundos = 00

let intervalo 


function doisDig (digito) {
    if(digito <10) {
        return('0' + digito)
    } else {
        return(digito)
    }
}

function começar() {
    watch()
   intervalo = setInterval(watch,1000)
}

function parar() {
   clearInterval (intervalo)
} 

function resetar() {
    clearInterval (intervalo)
    segundos = 0 
    minutos = 0
    document.getElementById('watch').innerHTML= '00:00:00'
}

// Relógio
function watch(){
    segundos++
    if(segundos == 60) {
        minutos++
        segundos=0
        if(minutos==60) {
            minutos=0
            horas++
        }
    }
    document.getElementById('watch').innerHTML= doisDig(horas) +':'+ doisDig(minutos) +':'+ doisDig(segundos)
}