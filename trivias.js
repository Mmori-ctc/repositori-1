var preguntas=[
    "¿recuerdas quién fue el primero en romper las cadenas que Morgiana llevaba puestas en los piés?",
    "¿Quién es, en realidad, Alibabá?",
    "¿Quiénes son los 8 Generales de Sinbad?",
    "¿Qué propuesta le hizo Alibabá a Kougyoku para saldar la deuda de Balbadd con el Imperio Kou?",
    "¿Dónde y cómo pierde Hakuryuu el brazo?",
    "a",


]
var opciones = [
    [ "Aladdin.",
    "Goltas.",
    "Alibabá.",
    "Morgiana las rompe cuando decide escapar."],

 [ "Tercer príncipe del reino de Balbadd.",
  "Espía del Imperio Kou.",
  "Un comerciante del reino de Sindria.",
  "Un estafador profesional."],

 ["Masrur, Jafar, Hinahoho, Pisti, Yamraiha, Spartos, Sharrkan y Drakon.",
  "Drakon, Pisti, Hakuryuu, Judal, Jafar, Arba, Kouen y Titus.",
  "Mogamett, Jafar, Masrur, Sharrkan, Drakon, Alibabá, Aladdin y Morgiana.",
  "Masrur, Jafar, Hinahoho, Kouen, Kouha, Titus, Alexius y Yunan."],

 ["Le pidió que pretendiera que esa deuda nunca existió.",
  "Le ofreció casarse él mismo con ella, como futuro Rey de Balbadd.",
  "Le dijo que Balbadd se volvería un reino vasallo del Imperio Kou.",
  "Alibabá le pidió a Sinbad que saldara esa deuda por Balbadd."],

 ["En la mazmorra de Zagan, Trata de salvar a Alibabá del ataque de Isaac.",
  "En la guarida de los piratas, Uno de los niños le corta el brazo en venganza por matar a Madaura.",
  "En la mazmorra de Zagan, A causa de un descuido mientras peleaba contra Dunya.",
  "En Sindria. Peleando contra uno de los enviados de Al Tharmen."],
]



var puntajePorOpcion = [

    [5,4,2,0],
    [5,4,3,0],
    [5,4,3,0],
    [5,4,3,0],
    [1,4,0,5],
    [1,2,2,5],
    [5,4,4,0],
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

div.innerHTML += `<p class='resultado_obtenido'> Has obtenido ${puntaje} puntos, significa tu conocimiento sobre este anime es ${estiloVida}.</p>`;

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