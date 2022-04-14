// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

const { map } = require("@11ty/eleventy/src/TemplateGlob");

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Renzo";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 23;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  const stri = str;
  return stri;
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  const num1= x;
  const num2= y;
  const adcion = num1+num2;
  return adcion;
}

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  const res = x-y;
  return res;
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  const mul= x*y;
  return mul;
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  const divi= x/y;
  return divi;
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if(x===y){
    return true
  }else{
    return false
  }
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  const long1 = str1.length;
  const long2 = str2.length;
  if(long1 == long2){
    return true
  }else{
    return false
  }
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num < 90){
    return true 
  }else{
    return false
  }
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num > 50){
    return true
  }else{
    return false
  }
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  const resto = x % y;
  return resto;
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  const resultado = num % 2 
  if(resultado == 0 ){
    return true
  }else{
    return false
  }
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  const resultado = num % 2 
  if(resultado == 1 ){
    return true
  }else{
    return false
  }
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  var rest = Math.pow(num,2);
  return rest;
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  var rest = Math.pow(num,3);
  return rest;
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  var rest = Math.pow(num,exponent);
  return rest 
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  var rest = Math.round(num);
  return rest;
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  var rest = Math.ceil(num);
  return rest
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  var rest = Math.random(0,1);
  return rest;
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if(numero > 0){
    return "Es positivo"
  } else if (numero < 0){
    return "Es negativo"
  }else{
    return false
  }
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  return str + "!"
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  return nombre + " " + apellido
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  return "Hola " + nombre +"!"
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
 var area = alto*ancho;
 return area
}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  var peri= lado * 4;
  return peri
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  var area = (base * altura) / 2 ;
  return area 
}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  var cal = euro * 1.20;
  return cal
}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
    return "Es vocal"
  } else if(letra.length > 1 ){
    return "Dato incorrecto"
  }else {
    return "Dato incorrecto"
  }
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
