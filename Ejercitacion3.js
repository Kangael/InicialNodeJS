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

/* let Nombre = 'Julio Pedro'
let Apellido = 'Arracuspete';
let Edad = '42';
let numeroDeTelefono = '1136040087';
let Socio = true;
let fechaDelPartido = '10/12/2022';
let horaDelPartido = '10:50';
let numeroDeSilla = 2;
let precioDelBoleto = 100.50; */

/* 3. Usando el console.log(), muestra al usuario el valor asignado a cada variable. */

/* console.log('Nombre: ' + Nombre); // creo variable nombre
console.log('Apellido: ' + Apellido); // creo variable apellido
console.log('Edad: ' + Edad); // creo variable edad
console.log('Número de teléfono: ' + numeroDeTelefono); // creo variable nro de telefono
console.log('Socio: ' + Socio);// creo variable socio
console.log('Fecha del Partido: ' + fechaDelPartido);// creo variable fehca del partido
console.log('Hora del partido: ' + horaDelPartido);// creo variable hora del partido
console.log('Nro de silla: ' + numeroDeSilla);// creo variable nro de silla
console.log('Precio de la entrada: ' + precioDelBoleto);// creo variable precio de la entrada */

/* 4. Finalmente, utilizando el console.log() y el typeof(), muestra al usuario el tipo de
dato de cada una de las variables utilizadas. */

/* console.log('Tipo de dato Nombre: ' + typeof(Nombre));
console.log('Tipo de dato Apellido: ' + typeof(Apellido));
console.log('Tipo de dato Edad: ' + typeof(Edad));
console.log('Tipo de dato número de teléfono: ' + typeof(numeroDeTelefono));
console.log('Tipo de dato Socio: ' + typeof(Socio));
console.log('Tipo de dato fecha del partido: ' + typeof(fechaDelPartido));
console.log('Tipo de dato hora del partido: ' + typeof(horaDelPartido));
console.log('Tipo de dato nro de silla: ' + typeof(numeroDeSilla));
console.log('Tipo de dato precio del boleto: ' + typeof(precioDelBoleto)); */

/* Es muy importante no olvidar que para lograr ejecutar todo nuestro código, debes ejecutar en
la consola de Visual Studio Code, la instrucción: */

/* Micro desafío 2: */

/* Instrucciones
1. En la carpeta ya creada crear un nuevo archivo JavaScript (.js).
2. En el archivo se desarrolla un código para calcular el nuevo sueldo a un trabajador,
para ello debes declarar las siguientes variables y almacenar en ellas los siguientes
datos del trabajador:
a. nombre
b. apellido
c. sueldoActual
d. porcentajeAumento */

/* let nombre = 'Juan Ramón'; // creo variable nombre
let apellido = 'Gioconda'; // creo variable apellido
let sueldoActual = 100000; // creo variable sueldo actual
let porcentajeAumento = 20; // creo variable procentaje de aumento */


/* 3. Almacenar en una variable el “calculoAumento”. Esta contendrá el resultado de la
operación del aumento del trabajador (sueldoActual * porcentajeAumento)/ 100). */

/* let calculoAumento = (sueldoActual * porcentajeAumento)/ 100; // se crea la variable de cálculo */

/* 4. En otra variable “nuevoSueldo”, almacena el resultado del cálculo del nuevo
sueldo. */

/* let nuevoSueldo = sueldoActual + calculoAumento; // se crea la variable que contiene el nuevo sueldo */

/* 5. Usando el console.log() y concatenando string, muestra en la consola de Visual
Studio Code los contenidos de cada una de las variables: */

/* console.log('Estimado ' + nombre + ' ' + apellido +': ')
console.log('Su sueldo actual es: $'+ sueldoActual);
console.log('El porcentaje de aumento es: ' + porcentajeAumento + '%');
console.log('Su nuevo sueldo es: $' + nuevoSueldo); */

/* Desafío extra (opcional): */

/* Instrucciones
1. En la carpeta ya creada crear un nuevo archivo JavaScript (.js).
2. En el archivo creado debes desarrollar un código para lograr efectuar operaciones
aritméticas. Para ello, declarar dos variables, otorgando el nombre y los valores
numéricos que consideres. Ejemplo: let numero1 = 16; */

/* let numero1 = 50;
let numero2 = 20; */

/* 3. Usando el console.log() mostrar al usuario los resultados de las siguientes
operaciones aritméticas, en función de los valores asignados a las variables:
I. Suma
II. Resta
III. Multiplicación
IV. División
V. Módulo */

/* let suma = numero1 + numero2; // creo la variable suma
let resta = numero1 - numero2; // creo la variable resta
let multiplicacion = numero1 * numero2;// creo la variable multiplicación
let division = numero1 / numero2;// creo la variable división
let modulo = numero1 % numero2; // creo la variable módulo

console.log('La suma de nro1 y nro2 es: '+ suma);
console.log('La resta de nro1 y nro2 es: '+ resta);
console.log('La multiplicación de nro1 y nro2 es: '+ multiplicacion);
console.log('La división de nro1 y nro2 es: '+ division);
console.log('El módulo de nro1 y nro2 es: '+ modulo); */

/* VI. ¿Cual de los valores es mayor? Si el valor es mayor, mostrará un valor boolean true.
De lo contrario mostrará false */

/* let mayor = numero1>numero2

console.log('Nro 1 es mayor que nro2: ' + mayor) */

/* VII. ¿Cual de los valores es menor? Si el valor es menor mostrará un valor boolean true.
De lo contrario mostrará false */

/* let menor = numero1<numero2

console.log('Nro 1 es menor que nro2: ' + menor) */