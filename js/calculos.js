// Definir variables
// var n = 0;

// Funcion para leer numeros Reales
function leerNumero() {
    num = parseInt(
        prompt("Porfi, escribe un número")
    );
    return num;
}

function mostrarMultiplo(n, m) {
    document.getElementById('td11').innerHTML = n;
    document.getElementById('td12').innerHTML = m;
    document.getElementById('td13').innerHTML = multiplosDeHasta(n, m);
}


function mostrarFactorial( nf ) {
    document.getElementById('td21').innerHTML = nf;
    document.getElementById('td22').innerHTML = factorial( nf );
}


function mostrarResultados( op, n1, n2 = 0 ) {

    switch (op) {
        case 'multiplo':
            document.getElementById('td11').innerHTML = n1;
            document.getElementById('td12').innerHTML = n2;
            document.getElementById('td13').innerHTML = multiplosDeHasta(n1, n2);
        break;

        case 'factorial' :
            document.getElementById('td21').innerHTML = n1;
            document.getElementById('td22').innerHTML = factorial( n1 );
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
    for (i = 1; multiplo < m; i++) {
        multiplo = n * i;
        mensaje = mensaje + multiplo + " ";
    }

    return mensaje;
}

function factorial( nf ) {
    var factorial = 1;
    for ( i=1; i <= nf; i++ ) {
        factorial = factorial * i;
    }
    return factorial;
}
