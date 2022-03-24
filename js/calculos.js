// Definir variables
// var n = 0;

// Funcion para leer numeros Reales
function leerNumero() {
    num = parseInt(
        prompt("Porfi, escribe un número")
    );
    return num;
}

// Función para leer texto
function leerTexto() {
    texto = prompt("Porfi, escribe el nombre de tu personaje");
    return texto;
}

// Función para insertar texto en el HTML

function mostrarTexto( id, texto ){
    var elemento = document.getElementById(id);

    // Insertamos el texto pasado por parámetro
    // al elemento con id pasado por parámetro
    elemento.innerHTML = texto;
}


function mostrarInfo(id, tag, info, texto){
    var contenido = "<" + tag + ">";
    contenido += info;
    contenido += "</" + tag + "> ";
    contenido += texto;


    mostrarTexto( id, contenido );
}

// function dameInfo(tag, info, texto){
//     var contenido = "<" + tag + ">";
//     contenido += info;
//     contenido += "</" + tag + "> ";
//     contenido += texto;
//
//     return contenido;
// }


function mostrarTodo(id, personaje, aldea, clan, poder, vidas) {

    var personaje = "<strong>Personaje: </strong>" + personaje;
    var aldea = "<strong>Aldea: </strong>" + aldea;
    var clan = "<strong>Clan: </strong>" + clan;
    var poder = "<strong>Superpoder: </strong>" + poder;
    var vidas = "<strong>Vidas: </strong>" + vidas;

    var lis = "<li>" + personaje + "</li>";
    lis += "<li>" + aldea + "</li>";
    lis += "<li>" + clan + "</li>";
    lis += "<li>" + poder + "</li>";
    lis += "<li>" + vidas + "</li>";

    var elemento = document.getElementById(id);

    // Insertamos el texto pasado por parámetro
    // al elemento con id pasado por parámetro
    elemento.innerHTML = lis;
}


function mostrarLista(id, personaje, aldea, clan, poder, vidas) {

    var personaje = "<strong>Personaje: </strong>" + personaje;
    var aldea = "<strong>Aldea: </strong>" + aldea;
    var clan = "<strong>Clan: </strong>" + clan;
    var poder = "<strong>Superpoder: </strong>" + poder;
    var vidas = "<strong>Vidas: </strong>" + vidas;

    // Creamos una instancia de la ul con id = datos
    var lista = document.getElementById( id );

    // Creamos una instancia de un elemento HTML li vacío
    var item = document.createElement("li");

    // Agregamos contenido a ese elemento html li
    item.innerHTML = personaje;

    // Insertamos el elemento li y su contenido como último hijo
    // de la ul id = datos.
    lista.appendChild( item );

    // Ídem para el li con la info de la Aldea
    item = document.createElement("li");
    item.innerHTML = aldea;
    lista.appendChild( item );

    // Ídem para el li con la info de la Clan
    item = document.createElement("li");
    item.innerHTML = clan;
    lista.appendChild( item );

    // Ídem para el li con la info de la Poder
    item = document.createElement("li");
    item.innerHTML = poder;
    lista.appendChild( item );

    // Ídem para el li con la info de la Vidas
    item = document.createElement("li");
    item.innerHTML = vidas;
    lista.appendChild( item );
}


function mostrarElemento(id, personaje, aldea, clan, poder, vidas) {

    var personaje = "<strong>Personaje: </strong>" + personaje;
    var aldea = "<strong>Aldea: </strong>" + aldea;
    var clan = "<strong>Clan: </strong>" + clan;
    var poder = "<strong>Superpoder: </strong>" + poder;
    var vidas = "<strong>Vidas: </strong>" + vidas;

    // Creamos una instancia de la ul con id = datos
    var lista = document.getElementById( id );

    addChild( lista, 'li', personaje );
    addChild( lista, 'li', aldea );
    addChild( lista, 'li', clan );
    addChild( lista, 'li', poder );
    addChild( lista, 'li', vidas );
}

// function addChild ( lista , 'li', personaje ) {
function addChild ( elemento, tag, contenido ) {
    item = document.createElement( tag );
    item.innerHTML = contenido;
    lista.appendChild( elemento );
}


function mostrarMultiplo(n, m) {
    document.getElementById('td11').innerHTML = n;
    document.getElementById('td12').innerHTML = m;
    document.getElementById('td13').innerHTML = multiplosDeHasta(n, m);
}


function mostrarFactorial( n ) {
    document.getElementById('td21').innerHTML = n;
    document.getElementById('td22').innerHTML = factorial( n );
}


function mostrarResultados( op, n, m = 0 ) {

    switch (op) {
        case 'multiplo':
            var td11 =document.getElementById('td11');
            td11.innerHTML = n;
            document.getElementById('td12').innerHTML = m;
            document.getElementById('td13').innerHTML = multiplosDeHasta(n, m);
        break;

        case 'factorial' :
            document.getElementById('td21').innerHTML = n;
            document.getElementById('td22').innerHTML = factorial( n );
        break;
        default:
    }
}



function multiplosDeHasta(n, m) {
    mensaje = "Los múltiplo de " +
        n +
        " hasta " + m +
        " son: ";

    multiplo = 0;

    // for (i = 1; multiplo < m; i++) {
    //     multiplo = n * i;
    //     mensaje = mensaje + multiplo + " ";
    // }

    // Inicialización de la variable contador
    i = 1;

    // Condición
    while ( multiplo < m ) {
        multiplo = n * i;
        mensaje = mensaje + multiplo + " ";

        // Incremento
        i++;
    }



    return mensaje;
}

function factorial( n ) {
    var factorial = 1;
    for ( i=1; i <= n; i++ ) {
        factorial = factorial * i;
    }
    return factorial;
}

function sumar( s1, s2 ) {
    var suma = s1 + s2;
    return suma;
}


function multiplicar( f1, f2 ){
    var producto = f1 * f2;
    return producto;
}
