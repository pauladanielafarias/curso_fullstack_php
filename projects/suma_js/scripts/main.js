/*
Crear una página que posea un script en javascript que declare:
        una variable llamada primera con un valor numérico = 40
        una variable llamada segunda con un valor numérico = 16
        una variable llamada sumatotal con un valor numérico de la suma de las dos variables anteriores.
        y una salida por pantalla en HTML que muestre un mensaje y el valor de sumatotal: 56 
*/


var primera = 40;
var segunda = 16;

var sumatotal = primera+segunda;

document.body.innerHTML= "<h1>El resultado de la suma de las dos variables es: <br>" + sumatotal + "</h1>"
