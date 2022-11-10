// Ejercició Clase práctica 3

/* Micro-desafío 1: */

/* Instrucciones
1. En Visual Studio Code crear una carpeta de trabajo y dentro de ella crear un archivo
JavaScript (.js). */

/* 2. Para llevar un control automatizado en la venta de boletos para ingresar a un
partido de fútbol, el Tech Leader de tu equipo te asigna la responsabilidad de crear y
asignar valor a un conjunto de variables. Recordá tener presente el tipo de dato que
contienen.
A continuación te dejamos algunos ejemplos de variables que puedes crear: Nombre -
Apellido - Edad - Número de Teléfono - Socio (Valor booleano) - Fecha del partido -
Hora del partido - Número de silla - Precio del boleto (con valores decimales). */

let Nombre = 'Julio Pedro'
let Apellido = 'Arracuspete';
let Edad = '42';
let numeroDeTelefono = '1136040087';
let Socio = true;
let fechaDelPartido = '10/12/2022';
let horaDelPartido = '10:50';
let numeroDeSilla = 2;
let precioDelBoleto = 100.50;

/* 3. Usando el console.log(), muestra al usuario el valor asignado a cada variable. */

console.log('Nombre: ' + Nombre);
console.log('Apellido: ' + Apellido);
console.log('Edad: ' + Edad);
console.log('Número de teléfono: ' + numeroDeTelefono);
console.log('Socio: ' + Socio);
console.log('Fecha del Partido: ' + fechaDelPartido);
console.log('Hora del partido: ' + horaDelPartido);
console.log('Nro de silla: ' + numeroDeSilla);
console.log('Precio de la entrada: ' + precioDelBoleto);

/* 4. Finalmente, utilizando el console.log() y el typeof(), muestra al usuario el tipo de
dato de cada una de las variables utilizadas. */

console.log('Tipo de dato Nombre: ' + typeof(Nombre));
console.log('Tipo de dato Apellido: ' + typeof(Apellido));
console.log('Tipo de dato Edad: ' + typeof(Edad));
console.log('Tipo de dato número de teléfono: ' + typeof(numeroDeTelefono));
console.log('Tipo de dato Socio: ' + typeof(Socio));
console.log('Tipo de dato fecha del partido: ' + typeof(fechaDelPartido));
console.log('Tipo de dato hora del partido: ' + typeof(horaDelPartido));
console.log('Tipo de dato nro de silla: ' + typeof(numeroDeSilla));
console.log('Tipo de dato precio del boleto: ' + typeof(precioDelBoleto));

/* Es muy importante no olvidar que para lograr ejecutar todo nuestro código, debes ejecutar en
la consola de Visual Studio Code, la instrucción: */