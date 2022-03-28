// 1.- Pida el nombre al usuario y múestrelo en un id="nombre"

function leerNombre() {
    nombre = prompt("Escriba su nombre");
    return nombre;
}

function escribirTexto( id, string ) {
    document.getElementById( id ).innerHTML = string;
}

function adivino() {
    var pregunta, respuesta, solucion="", elemento;
    elemento = document.getElementById('respuesta');

    pregunta = "¿El número es >= 5 ?";
    respuesta = confirm(pregunta);

    if (respuesta) {
        pregunta = "¿El número es > 5 ?";
        respuesta = confirm(pregunta);

        if (respuesta) {
            pregunta = "¿El número es > 6 ?";
            respuesta = confirm(pregunta);

            if (respuesta) {
                pregunta = "¿El número es > 7 ?";
                respuesta = confirm(pregunta);

                if ( respuesta ) {
                    pregunta = "¿El número es > 8 ?";
                    respuesta = confirm(pregunta);

                    if (respuesta) {
                        pregunta = "¿El número es > 9 ?";
                        respuesta = confirm(pregunta);

                        if (respuesta) {
                            pregunta = "¿El número es > 10 ?";
                            respuesta = confirm(pregunta);

                            if (respuesta) {
                                solucion = "Se pidió un n1 del 0 al 10";

                            }
                            else {
                                solucion = "Has pensado el número 10";
                            }
                        }
                        else {
                            solucion = "Has pensado el número 9";
                        }
                    }
                    else {
                        solucion = "Has pensado el número 7";
                    }
                }
                else {
                    solucion = "Has pensado el número 7";
                }
            }
            else {
                solucion = "Has pensado el número 6";
            }
        }
        else {
            solucion = "Has pensado el número 5";
            elemento.innerHTML = solucion;
        }
    }

    else {
        pregunta = "¿El número es < 4 ?";
        respuesta = confirm(pregunta);

        if (respuesta) {
            pregunta = "¿El número es < 3 ?";
            respuesta = confirm(pregunta);

            if (respuesta) {
                pregunta = "¿El número es < 2 ?";
                respuesta = confirm(pregunta);

                if (respuesta) {
                    pregunta = "¿El número es < 1 ?";
                    respuesta = confirm(pregunta);

                    if (respuesta) {
                        pregunta = "¿El número es < 0 ?";
                        respuesta = confirm(pregunta);

                        if (respuesta) {
                            solucion = "Se pidió un n1 del 0 al 10";
                        }
                        else {
                            solucion = "Has pensado el número 1";
                        }
                    }
                    else {
                        solucion = "Has pensado el número 1";
                    }
                }
                else {
                    solucion = "Has pensado el número 2";
                }
            }
            else {
                solucion = "Has pensado el número 3";
            }
        }
        else {
            solucion = "Has pensado el número 4";
        }
    }

    elemento.innerHTML = solucion;
}
