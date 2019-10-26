var secuenciaDeColores = [];
var coloresRevisados = 0;
var juegoActivo = false;
var nuevoColor = 0;
var ultimoColorRevisado = 0;
var startActivo = true;
var puntaje = 0;
var puntajeMasAlto = 0;

function comenzarJuego(){
    if(startActivo){
        startActivo = false;
        secuenciaDeColores = [];
        ultimoColorRevisado = 0;
        puntaje = 0;
        //cuentaInicial();
        actualizarPuntaje(puntaje);
        mostrarStart(false);
        setTimeout(() => {
            generarColor();
            mostrarColores();
            juegoActivo = true;
        }, 0);
    }
}

function tocarColor(colorID){
    if(juegoActivo){
        var color = colorID.id[8];
        verificarColor(color);
    }
}

function verificarColor(clr){
    if(clr == secuenciaDeColores[ultimoColorRevisado]){
        ultimoColorRevisado++;
        if(ultimoColorRevisado >= secuenciaDeColores.length){
            ultimoColorRevisado = 0;
            puntaje++;
            actualizarPuntaje(puntaje);
            generarColor();
            mostrarColores();
        }
    }else{
        alert("PERDISTE");
        if(puntaje > puntajeMasAlto){
            puntajeMasAlto = puntaje;
        }
        mostrarStart(true);
        startActivo = true;
        juegoActivo = false;
    }
}

function cuentaInicial(){
    var numero1 = document.getElementById("numero1");
    var numero2 = document.getElementById("numero2");
    var numero3 = document.getElementById("numero3");

    setTimeout(function(){ numero1.style.display = "block" }, 300);
    setTimeout(function(){ numero1.style.display = "none"; numero2.style.display = "block" }, 1300);
    setTimeout(function(){ numero2.style.display = "none"; numero3.style.display = "block" }, 2300);
    setTimeout(function(){ numero3.style.display = "none";  }, 3300);
}

function mostrarColores(){
    var delay = 0;
    for(let i=1;i<=secuenciaDeColores.length;i++){
        delay = (i-1) * 1300;
        setTimeout(function(){ mostrarColor(secuenciaDeColores[i-1]); }, delay);
    }
}

function mostrarColor(colorParaMostrar){
    setTimeout(() => {
        document.getElementById("color"+colorParaMostrar).style.visibility = "visible";
    }, 100);
    setTimeout(() => {
        document.getElementById("color"+colorParaMostrar).style.visibility = "hidden";
    }, 1300);
}

function generarColor(){
    nuevoColor = Math.floor(Math.random() * 4 + 1);
    secuenciaDeColores.push(nuevoColor);
}

function mostrarStart(mostrar){
    var start = document.getElementById("start");
    if(mostrar){
        start.style.visibility = "visible";
    }else{
        start.style.visibility = "hidden";
    }
}

function actualizarPuntaje(puntos){
    document.getElementById("puntaje").innerHTML = ("Puntaje: " + puntos);
}