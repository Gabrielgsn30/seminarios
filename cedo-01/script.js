function mudar(){

document.getElementById('demo').innerHTML = 
'Hello JavaScript!'
}


var contador = 0;
function calcular() {
contador ++;
document.getElementById("resultado").textContent = 
contador;
}
function dobrar() {
contador = contador * 2;
document.getElementById("resultado").textContent = 
contador;
}
function zerar() {
contador = 0 ;
document.getElementById("resultado").textContent = 
contador;
}