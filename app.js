
/*  Metodos para seleciconar elementos del DOM (Nodos del tipo1) */
/*document.getElementById()  //nodo del tipo elemento que coincida con el id indicado
document.getElementsByTagName() // coleccion de elementos HTML
document.getElementsByClassName() // coleccion de elementos HTML
document.querySelector() // primer elemento que cumpla la condicion 
document.querySelectorAll() // todos los elementos que cumplan la condicion */

var title = document.getElementById("title");
console.log(title)
console.log(title.firstChild);

var linkList = document.getElementsByTagName("a"); 
console.log(linkList);
console.log(linkList[0]);
console.log(linkList[0].firstChild);

var itemList = document.getElementsByClassName("item");
console.log(itemList);
console.log(itemList[3]);
console.log(itemList[3].firstElementChild);

var title = document.querySelector("#title");
console.log(title);
console.log(title.firstChild);
var navbar = document.querySelector("#navbar");
console.log(navbar);

var item = document.querySelector(".item");
console.log(item);
  
var listitem = document.querySelectorAll(".item");
console.log(listitem);

//tipo de datos primitivo
//Undefined

var nota;
typeof nota;

//boolean
var esAdulto = true;
typeof(esAdulto);

//Number
var precio = 100;
typeof(precio);

//string
var estrofa = "hola mundo"
+"/nhola mundo 2"

estrofa;
typeof estrofa; 