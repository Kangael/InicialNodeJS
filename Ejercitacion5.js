/* Micro desafío 1: */

/* Instrucciones
1. Crea una carpeta de trabajo y dentro de ella crea un archivo JavaScript (.js).
2. Crea una función que permita calcular el monto a pagar por el alquiler de un
vehículo, que reciba como parámetros: “tipo de vehículo”, “Días de alquiler” y “silla
para bebe”. */

/* 3. Define y realiza los cálculos para obtener el total a pagar, teniendo en cuenta las
siguientes consideraciones:
● De acuerdo al tipo de vehículo, se le cobra al cliente un monto por día:
○ Compacto: $14000
○ Mediano: $17000
○ Camioneta: $28000
● Si adicionalmente el cliente requiere la silla para niños, se le cobra un adicional por día
de $1200
4. Una vez creado el programa, ejecutalo. ¿Recuerdas cómo? */

/* let tipoDeVehiculo = 'compacto';

let diasDeAlquiler = 3;

let sillaParaBebe = true;

function aPagar(tipoDeVehiculo, diasDeAlquiler, sillaParaBebe){
    
    let costoSillaBebe = 1200;

    let costoCompacto = 14000;

    let costoMediano = 17000;

    let costoCamioneta = 28000;

    let valorFinal = 0;

    let costo = sillaParaBebe == true ? valorFinal + costoSillaBebe * diasDeAlquiler : valorFinal

    switch(tipoDeVehiculo){
        case 'compacto':
            valorFinal = costoCompacto * diasDeAlquiler;
            break;
        case 'mediano':
            valorFinal = costoMediano * diasDeAlquiler;
            break
        case 'camioneta':
            valorFinal = costoCamioneta * diasDeAlquiler;
            break
        default:
            return 'Debe ingresar opción correcta'
    } */

/* 5. Para probar las diferentes respuestas invoca a la función, asigna diferentes valores o
argumentos. Usando el console.log(), muestra los resultados al usuario:

“Estimado cliente: en base al tipo de vehículo compacto alquilado, considerando los 3 días
utilizados, el monto total a pagar es de $42000 ” . */

   /*  switch(sillaParaBebe){
        case false:
            return 'Estimado cliente: en base al tipo de vehículo ' + tipoDeVehiculo + ' alquilado, considerando los '+ diasDeAlquiler + 
            ' días utilizados, el monto total a pagar es de $' + valorFinal;
            break;
        case true:
            return 'Estimado cliente: en base al tipo de vehículo ' + tipoDeVehiculo + ' alquilado, considerando los '+ diasDeAlquiler +' días utilizados' 
            + 'y con el agregado del alquiler de Silla para Bebe, el monto total a pagar es de $' + costo
            break
    }

}

console.log(aPagar(tipoDeVehiculo, diasDeAlquiler, sillaParaBebe)) */

/* Micro desafío 2:

Instrucciones
1. En la carpeta ya creada, crea un nuevo archivo JavaScript (.js).
2. El teach leader de la empresa nos pide construir un sistema para un local de venta de
comida rápida. Los clientes eligen el tipo de hamburguesa base con un precio base y,
por cada selección que el cliente agregue, se le suma el valor de su selección al
precio.

Por ejemplo, si partiendo de una hamburguesa base carne a la parrilla con un precio “a”, el
cliente les incorpora los adicionales: de queso “b” y tomate “c”, el total a pagar sería
a+b+c. Así sucesivamente con el resto de los ingredientes.

Es importante tener presente que cada uno de estos adicionales estarán representados por
valores booleanos, es decir, true o false, dependiendo de si aceptan o no cada uno de los
adicionales. Así recibiremos un total de ocho valores booleanos, uno por cada adicional.

Tu responsabilidad será la de crear dos funciones:
Primera función - Callback:
● Tendrá la responsabilidad de calcular el total a pagar por el cliente, en base a un total
de nueve parámetros que recibirá la función:
Un string para el tipo de hamburguesa, teniendo en cuenta las siguientes:
○ Carne a la parrilla: $1800
○ Pollo: $1500
○ Vegetariana: $1200
● Y recibirá los ocho valores booleanos de los adicionales, teniendo en cuenta los
siguientes:
○ Jamón = $30
○ Queso = $25
○ Salsa de tomate = $5
○ Mayonesa = $5
○ Mostaza = $5
○ Tomate = $15

3

○ Lechuga = $10
○ Cebolla = $10

Segunda función:
● Esta función tendrá la responsabilidad de devolver un mensaje al usuario donde le
indique su nombre, su apellido y el total a pagar en base al tipo de
hamburguesa seleccionado más los adicionales indicados. Tenga en cuenta que
esta función deberá recibir como parámetros: “nombre del usuario”, “apellido del
usuario”, “tipo de hamburguesa” y los ocho valores booleanos en función a los
adicionales que el cliente haya seleccionado.

Una vez creado el programa, ejecutalo. Para probar las diferentes respuestas, invoca a la
segunda función, asigna diferentes valores o argumentos. No olvides usar el console.log()
para mostrar los resultados al usuario, de acuerdo al siguiente mensaje: */