var preguntas=[
    


]    

var opciones = [
    
var puntajePorOpcion = [
    [5,4,2,0],
    [5,4,3,0],
    [5,4,3,0],
    [5,4,3,0],
    [1,4,0,5],
    [1,2,2,5],
]
   
var puntaje = 0;
var i = 0;

function mostrarResultado() {

var div = document.getElementsByClassName("card")[0];
div.innerHTML = "";

document.getElementById("barra-progreso").value = i * 100/(preguntas.length -1);


//agregamos los elementos correspondientes a los resultados 

div.innerHTML += "<h3 class='resultado_titulo'>Resultados</h3>"; 

// Determinamos estilo de vida (max = 35)

if (puntaje > 25){
estiloVida = "<span id='estilo-excelente'>EXCELENTE</span>";
}else if (puntaje > 20) {
    estiloVida = "<span id='estilo-bueno'>BUENO</span>"; 
}else if (puntaje > 10) {
    estiloVida = "<span id='estilo-regular'>REGULAR</span>";
}else{
    estiloVida = "<span id='estilo-malo'>MALO</span>";
}

div.innerHTML += `<p class='resultado_obtenido'> Has obtenido ${puntaje} puntos, lo cual significa que tu estilo de musica es ${estiloVida}.</p>`;

}

function actualizarpuntaje(opcion) {
var indice =opcion -1;
puntaje += puntajePorOpcion[i][indice];

  if (i < preguntas.length -1){
       siguientePregunta();
   }else{
        mostrarResultado();
   }
} 

function siguientePregunta() {
          
    document.getElementById("pregunta").innerHTML = preguntas[i];
    document.getElementById("op1").innerHTML = opciones[i][0];
    document.getElementById("op2").innerHTML = opciones[i][1];
    document.getElementById("op3").innerHTML = opciones[i][2];
    document.getElementById("op4").innerHTML = opciones[i][3];
    
      
    document.getElementById("barra-progreso").value = i * 100/preguntas.length;
    i++; 
}

siguientePregunta(); //Muestra la primera pregunta 
document.getElementById("op1").addEventListener("click", function () {
    actualizarpuntaje(1);
});
document.getElementById("op2").addEventListener("click", function () {
    actualizarpuntaje(2);
});
document.getElementById("op3").addEventListener("click", function () {
    actualizarpuntaje(3);
});
document.getElementById("op4").addEventListener("click", function () {
    actualizarpuntaje(4);
});



