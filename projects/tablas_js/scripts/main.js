//Tabla del 11

const tabla_once_html = document.getElementById("tabla_once");
var i = 1;

while(i<10){
    
    var num = 11;
    var multiplicacion = i * num;
    agregarLinea(i,multiplicacion,num,tabla_once_html)
    
    i++
}

//Tabla del 10

const tabla_diez_html = document.getElementById("tabla_diez");
var i = 1;
while(i<10){
    var num = 10;
    var multiplicacion = i * num;
    agregarLinea(i,multiplicacion,num,tabla_diez_html)
    
    i++
}

//Tabla del 9

const tabla_nueve_html = document.getElementById("tabla_nueve");
for (var i=1; i<10;i++){
    var num = 9;
    var multiplicacion = i * num;
    agregarLinea(i,multiplicacion,num,tabla_nueve_html)
}


/* ----- Función agregar línea ----- */

function agregarLinea(i,multiplicacion,num, tabla) { 
      // crear un nuevo elemento p 
      const newP = document.createElement("p"); 
    
      // crear un text node con el contenido de la multiplicación 
      const line = document.createTextNode(`${num} x ${i}: ${multiplicacion}`); 
      
      // agregar la linea al p
      newP.appendChild(line); 
    
      // agregar el p al div de la tabla
      tabla.appendChild(newP); 

}
