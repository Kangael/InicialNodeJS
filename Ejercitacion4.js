/* Micro desafío 1: */
/* Instrucciones
1. Crea una carpeta de trabajo y dentro de ella un archivo JavaScript (.js).
2. Desarrolla un programa que le indique al usuario - en base a su perfil o
responsabilidades - qué puede hacer o no en el sistema. Para eso debes crear una
variable llamada: “perfil” y asignarle alguno de estos valores:
a. administrador
b. asistente
c. invitado. */

/* let perfil = 'Administrador'// creo variable perfil */

/* Es importante tener en cuenta que se debe mostrar un único mensaje, utilizando el
console.log():
A. Si se le asigna un espacio en blanco a la variable perfil, debe mostrar el
mensaje: “Debe especificar el perfil del usuario”.
B. Si es un perfil “administrador - ADMINISTRADOR - Administrador”, la
consola debe mostrar este mensaje: “Usted tiene todos los privilegios de
uso del sistema”.
C. Si es un perfil “asistente - ASISTENTE - Asistente”, la consola debe mostrar
este mensaje: “Usted sólo tiene permisos de registrar, modificar y
consultar datos”.
D. Si es un perfil “invitado - INVITADO - Invitado”, la consola debe mostrar este
mensaje: “Usted sólo tiene permisos de consultar datos”.
E. Si se especifica un valor diferente a la variable perfil entonces se debe mostrar
este mensaje: “Debe especificar un perfil válido”. */

/* switch (perfil.toLowerCase) {
    case 'administrador':
        console.log('Usted tiene todos los privilegios de uso del sistema');
        break;
    case 'asistente':
        console.log('Usted sólo tiene permisos de registrar, modificar y consultar datos');
        break;
    case 'invitado':
        console.log('Usted sólo tiene permisos de consultar datos');
    default:
        console.log('Debe especificar un perfil válido');
        break;
} */

/* Micro desafío 2: */

/* Instrucciones
1. En la carpeta ya creada crea un nuevo archivo JavaScript (.js).
2. Desarrolla el programa Ajuste tarifario de energía eléctrica. Utilizando el operador
condicional ternario, queremos determinar cuánto va a pagar un hogar según su
consumo. Veamos los pasos a seguir...
a. Crear una variable “pagoMes” y asignarle un pago actual de energía
eléctrica por mes.
b. Crear otra variable “consumoKWH” y asignarle un consumo mensual de
Kilovatios hora de consumo mensual por el hogar.
c. Si en el hogar se consumen más de 300 kwh por mes, entonces al pago actual
se le incrementará un 20%.
d. En el caso contrario se le mantendrá el subsidio, es decir que no tendrá ningún
aumento.. */

/* let pagoMes = 12000;

let consumoKWH = 250;

let porcentajeIncremento = 1.20;

let pagoIncremento = pagoMes * porcentajeIncremento

let pagoFinal = consumoKWH>300 ? pagoIncremento : pagoMes  */

/* 3. Una vez obtenido el monto del pago por consumo mostrar al usuario este mensaje:

“Debido a que su hogar tuvo un consumo de 450kwh, en base al ajuste tarifario
(hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%),
cumplimos con informarle que se ha ajustado el total a pagar, que será de $14400” */

/* console.log('Debido a que su hogar tuvo un consumo de ' + consumoKWH +', en base al ajuste tarifario hogares con consumo mayor a 300kwh '+ 
     + 'por mes tendrán un aumento del ' + porcentajeIncremento + '%'
    + 'cumplimos con informarle que se ha ajustado el total a pagar, que será de ' + pagoFinal) */

   /*  Micro desafío 3: */

/*     Instrucciones
1. En la carpeta ya creada crea un nuevo archivo JavaScript (.js).
2. Desarrollar el programa traductor condicional. La idea es que si el usuario ingresa
una palabra como “perro”, “gato”, “puerta”, “ventana”, o “mesa”, se le devuelva la
misma palabra traducida al idioma inglés. Te recomendamos usar la estructura
switch. Puedes ayudarte con Google Traductor.
En caso de que la palabra sea distinta a la esperada, deberás mostrar al usuario un mensaje
que le informe que “La palabra ingresada es incorrecta”. */

/*     let palabraEs = 'perro';

switch (palabraEs) {
    case 'perro':
        console.log('dog');        
        break;
    case 'gato':
        console.log('cat');        
        break;
    case 'puerta':
        console.log('door');        
        break;
    default:
        console.log('La palabra ingresada es incorrecta');
} */

/* Micro desafío 4: */
/* Instrucciones
1. En la carpeta ya creada, crea un nuevo archivo JavaScript (.js).
2. Desarrollar el programa mi primera calculadora. Queremos que, usando estructura
switch, muestres al usuario cuál es el resultado de una operación aritmética. Esto se
hará en base a dos valores suministrados y al tipo de operación indicada:
“sumar”, “restar”, “multiplicar”, “dividir”.
Por ejemplo: si el usuario indica que quiere sumar los valores 2 y 2, entonces la
respuesta al usuario debe ser: “El resultado de sumar 2 + 2 es 4”.
3. En caso de que la operación aritmética sea distinta a la esperada, deberás mostrarle
un mensaje al usuario que le informe que “Las operaciones aceptadas son: sumar
- restar- multiplicar- dividir”.
A continuación te dejamos un diagrama de flujo, para que te des una idea de la lógica que
podemos encontrar en una calculadora. Recordá igualmente que en tu caso debes usar la
estructura switch */

/* let numero1 = 6;

let numero2 = 2;

let operador = '.'

let suma = numero1 + numero2;

let resta = numero1 - numero2;

let multiplicar = numero1 * numero2;

let dividir = numero1 / numero2;

switch (operador) {
    case '+':
        console.log(suma);        
        break;
    case '-':
        console.log(resta);        
        break;
    case '*':
        console.log(multiplicar);             
        break;    
    case '/':
    console.log(dividir);        
    break;        
    default:
        console.log('Las operaciones aceptadas son: sumar - restar- multiplicar- dividir');
} */

/* Desafío extra (opcional): */

/* Instrucciones
Si llegaste hasta acá, estás avanzando muy bien. ¡Felicitaciones!

Si querés seguir practicando, te proponemos este otro ejercicio. Ten en cuenta que este
ejercicio puede escalar en dificultad.

Paciencia, trata de resolverlo con las herramientas que tengas a tu disposición. Te
recomendamos que busques información extra en Google o documentaciones que
conozcas.

1. En la carpeta ya creada, crear un nuevo archivo JavaScript (.js).
2. Desarrolla el programa aterrizar avión. Nos indicará si el avión está listo para iniciar
el aterrizaje o no. Considerará para ello la altura y la velocidad del vuelo, teniendo en
cuenta que:

● La velocidad debe estar comprendida entre 268 a 278 km/hr.
● La altura debe estar comprendida entre 150 m a 300 m. */

let velocidad = 280;

let altura = 170;

let velocidadIdeal = 268 < 278;

let alturaIdeal = 150 < 300;

if(velocidad == velocidadIdeal && altura == alturaIdeal){
    console.log('Apto para volar')}
    else {
        console.log ('No apto para volar')
    }
