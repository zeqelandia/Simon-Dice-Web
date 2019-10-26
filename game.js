var secuenciaDeColores = [];
var coloresRevisados = 0;
var juegoActivo = false;
var nuevoColor = 0;

function comenzarJuego(){
    secuenciaDeColores = [];

    cuentaInicial();
    setTimeout(() => {
        generarColor();
        juegoActivo = true;
    }, 3300);
}

function tocarColor(colorID){
    if(juegoActivo){
        var color = colorID.id;
        verificarColores(colorID);
        //juegoActivo = false;
    }
}

function verificarColores(clr){
    if(coloresRevisados < secuenciaDeColores.length){

        generarColor();
    }else{
        coloresRevisados = 0;
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
    mostrarColor(nuevoColor);
}