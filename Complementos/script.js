let opciones, num1 = 0, num2 = 0, num3 = 0, preguntar, agregarNuevaSuma, agregarNuevaResta, agregarNuevaDivision, agregarNuevaMultiplicacion, agregarNuevaPotencia, resultadoSuma = 0, resultadoResta, resultadoMultiplicacion, resultadoDivision, residuo, contenedorDeCocienteInicial = 0, resultadoHipotenusa, h = 0, resultadoDevisionFloat = 0, resultadoPotencia, darNuevoValor = 0, error;

function suma(num1, num2) {

    resultadoSuma = parseFloat(num1) + parseFloat(num2);

    preguntar = prompt("¿Desea Agregar Otra Cantidad Para Sumarla con el Resultado Anterior = " + resultadoSuma + " ?. (Escriba 'si' Para Agregar Otra Cantidad o Escriba Cualquier Otra Cosa Para Denegar Esta Acción)");

    if (preguntar == "si" || preguntar == "Si" || preguntar == "SI" || preguntar == "sI" || preguntar == "Sí" || preguntar == "sí" || preguntar == "SÍ") {

        while(agregarNuevaSuma != "") {

            agregarNuevaSuma = prompt("Agregue Una Nueva Cantidad Para Seguir Sumando, Llevas = " + resultadoSuma + " / Para Evitar Sumar Otra Cantidad Simplemente No Escriba Nada y Presione Enter");

            agregarNuevaSuma = agregarNuevaSuma.trim();

            if (isNaN(agregarNuevaSuma)) {

            alert("!Error¡, No se Ha Podido Seguir Sumando");

            alert("Resultado Final de la Suma = " + resultadoSuma);

            error = root();

            return error;

        }

            if (agregarNuevaSuma == "") {

                agregarNuevaSuma = 0;
            
            }

            resultadoSuma += parseFloat(agregarNuevaSuma);
        
        }
    
    } else {

        resultadoSuma = parseFloat(num1) + parseFloat(num2);
    
    };

    alert("Resultado Final de la Sumatoria = " + resultadoSuma);

    resultadoSuma = 0;

    agregarNuevaSuma = undefined;

    return root();

};

function resta(num1, num2) {

    resultadoResta = parseFloat(num1) - parseFloat(num2);

    preguntar = prompt("¿Desea Agregar Otra Cantidad Para Restarla con el Resultado Anterior = " + resultadoResta + " ?. (Escriba 'si' Para Agregar Otra Cantidad o Escriba Cualquier Otra Cosa Para Denegar Esta Acción)");

    if (preguntar == "si" || preguntar == "Si" || preguntar == "SI" || preguntar == "sI" || preguntar == "Sí" || preguntar == "sí" || preguntar == "SÍ") {

        while (agregarNuevaResta != "") {

            agregarNuevaResta = prompt("Agregue Una Nueva Cantidad Para Seguir Restando, Llevas = " + resultadoResta + " / Para Evitar Restar Otra Cantidad Simplemente No Escriba Nada y Presione Enter");

            agregarNuevaResta = agregarNuevaResta.trim();

            if (isNaN(agregarNuevaResta)) {

            alert("!Error¡, No se Ha Podido Seguir Restando");

            alert("Resultado Final de la Resta = " + resultadoResta);

            error = root();

            return error;

        }

            if (agregarNuevaResta == "") {

                agregarNuevaResta = 0;
            
            }

            resultadoResta -= parseFloat(agregarNuevaResta);
        
        }
    
    } else {

        resultadoResta = parseFloat(num1) - parseFloat(num2);

    }

    alert("Resultado Final de la Resta = " + resultadoResta);

    resultadoResta = 0;

    agregarNuevaResta = undefined;

    return root();

};

function multiplicacion(num1, num2) {

    resultadoMultiplicacion = parseFloat(num1) * parseFloat(num2);

    preguntar = prompt("¿Desea Agregar Otra Cantidad Para Multiplicarla con el Resultado Anterior = " + resultadoMultiplicacion + " ?. (Escriba 'si' Para Agregar Otra Cantidad o Escriba Cualquier Otra Cosa Para Denegar Esta Acción)");

        if (preguntar == "si" || preguntar == "Si" || preguntar == "SI" || preguntar == "sI" || preguntar == "Sí" || preguntar == "sí" || preguntar == "SÍ") {

        while (agregarNuevaMultiplicacion != "") {

            agregarNuevaMultiplicacion = prompt("Agregue Una Nueva Cantidad Para Seguir Multiplicando, Llevas = " + resultadoMultiplicacion + " / Para Evitar Multiplicar Otra Cantidad Simplemente No Escriba Nada y Presione Enter");

            agregarNuevaMultiplicacion = agregarNuevaMultiplicacion.trim();

            if (isNaN(agregarNuevaMultiplicacion)) {

            alert("!Error¡, No se Ha Podido Seguir Multiplicando");

            alert("Resultado Final de la Multiplicacion = " + resultadoMultiplicacion);

            error = root();

            return error;

        }

            if (agregarNuevaMultiplicacion == "") {

                break;
            
        }

            darNuevoValor += agregarNuevaMultiplicacion;

            resultadoMultiplicacion *= parseFloat(agregarNuevaMultiplicacion);

        }

    } else {

        resultadoMultiplicacion = parseFloat(num1) * parseFloat(num2);

    }

    alert("Resultado de la Multiplicacion = " + resultadoMultiplicacion);

    resultadoMultiplicacion = 0;

    darNuevoValor = 0;

    agregarNuevaMultiplicacion = undefined;

    return root();

};

function division(num1, num2) {

    resultadoDivision = parseFloat(num1) / parseFloat(num2);

    residuo = parseFloat(num1) % parseFloat(num2)

    preguntar = prompt("¿Desea Agregar Otra Cantidad Para Dividirla con el Resultado Anterior (Se Recomiendan Cantidades Grandes), Cociente Actual = " + resultadoDivision + " ?. (Escriba 'si' Para Agregar Otra Cantidad o Escriba Cualquier Otra Cosa Para Denegar Esta Acción)");

    if (preguntar == "si" || preguntar == "Si" || preguntar == "SI" || preguntar == "sI" || preguntar == "Sí" || preguntar == "sí" || preguntar == "SÍ") {

    while (agregarNuevaDivision != "") {

            agregarNuevaDivision = prompt("Agregue Una Nueva Cantidad Para Seguir Dividiendo (Seguiras Dividiendo El Cociente Pero Sin Sus Decimales), Llevas (Cociente) = " + Math.trunc(resultadoDivision) + " / Para Evitar Dividir Otra Cantidad Simplemente No Escriba Nada y Presione Enter");

            agregarNuevaDivision = agregarNuevaDivision.trim();

            parseFloat(agregarNuevaDivision);

            if (isNaN(agregarNuevaDivision)) {

            alert("!Error¡, No se Ha Podido Seguir Dividiendo");

            alert("Resultado de la Primera Division (Cociente) = " + resultadoDivision + "/ Residuo ó Resto de la Primera Division = " + residuo);

            error = root();

            return error;

        }

            if (agregarNuevaDivision == "") {

                break;

            };

            if (agregarNuevaDivision === 0) {

            alert("No se puede Divivir entre 0");

            break;

            error = root();

            return error;

        };
        
            parseFloat(contenedorDeCocienteInicial);

            contenedorDeCocienteInicial += resultadoDivision;

            resultadoDivision /= agregarNuevaDivision;

            residuo = contenedorDeCocienteInicial - (agregarNuevaDivision * Math.trunc(resultadoDivision));

            parseFloat(resultadoDivision);

      }

    } else {

        resultadoDivision = parseFloat(num1) / parseFloat(num2);

        residuo = parseFloat(num1) % parseFloat(num2)

    }

    alert("Resultado Final de la Division (Cociente) = " + resultadoDivision + " / Residuo ó Resto = " + residuo);

    resultadoDivision = 0;

    contenedorDeCocienteInicial = 0;

    agregarNuevaDivision = undefined;

    return root();

};

function potencia(num1, num2) {

    resultadoPotencia = parseFloat(num1) ** parseFloat(num2);

    preguntar = prompt("¿Desea Agregar Otra Cantidad Para Potenciar con el Resultado Anterior = " + resultadoPotencia + " ?. (Escriba 'si' para agregar otra cantidad o Escriba cualquier otra cosa para denegar esta accion)");

    if (preguntar == "si" || preguntar == "Si" || preguntar == "SI" || preguntar == "sI" || preguntar == "Sí" || preguntar == "sí" || preguntar == "SÍ") {

    while (agregarNuevaPotencia != "") {

        agregarNuevaPotencia = prompt("Agregue Una Nueva Cantidad Para Seguir Potenciando, Llevas = " + resultadoPotencia + " / Para Evitar Potenciar Otra Cantidad Simplemente No Escriba Nada y Presione Enter");

        agregarNuevaPotencia = agregarNuevaPotencia.trim();

        parseFloat(agregarNuevaPotencia);

        if (isNaN(agregarNuevaPotencia)) {

            alert("!Error¡, No se Ha Podido Seguir Potenciando");

            alert("Resultado Final de la Potencia = " + resultadoPotencia);

            error = root();

            return error;

        }

        darNuevoValor += agregarNuevaPotencia;

        if (agregarNuevaPotencia == "") {

            break;

         }

        if (agregarNuevaPotencia === 0) {

            alert("Todo Numero elevado a la 0 es igual a 1");

        } 

            resultadoPotencia **= parseFloat(darNuevoValor);

            darNuevoValor = 0;

    }

}

    alert("Resultado Final de la Potencia = " + resultadoPotencia);

    resultadoPotencia = 0;

    darNuevoValor = 0;

    agregarNuevaPotencia = 0;

    agregarNuevaPotencia = undefined;

    return root();

};

function hipotenusa(c1, c2) {

    resultadoHipotenusa = c1**2 + c2**2;

    h = Math.sqrt(resultadoHipotenusa);

    alert(`Teorema de Pitagoras: H^2 = ${c1}^2 + ${c2}^2 / Es Igual a: Hipotenusa = ${h}`);

    h = 0;

    return root();
}

function root() {

    opciones = prompt("Opciones: 1. Sumar. - 2. Restar. - 3. Multiplicar. - 4. Dividir. - 5. Potenciar. - 6. Hallar La Hipotenusa de Un Triangulo Rectangulo. - Introduzca: 0 y Presione Enter o Pulse Aceptar para Salir");

    if (opciones === 1 || opciones === "1") {

        alert("¡Sumar!");

        num1 = prompt("Introduzca el Primer Numero a Sumar");

        num1 = num1.trim();

        parseInt(num1);

        if (isNaN(num1) || num1 == "") {

            alert("No Introdujo un Nada ó No es Un Numero, Intentelo Nuevamente")

            error = root();

            return error;
        }

        num2 = prompt("Introduzca el Segundo Numero Para Sumarselo Al Primero");

        num2 = num2.trim();

        parseInt(num2);

        if (isNaN(num2) || num2 == "") {

            alert("No Introdujo un Nada ó No es Un Numero, Intentelo Nuevamente")

            error = root();

            return error;
        
        }

        suma(num1, num2);

    } else if (opciones === 2 || opciones === "2") {

        alert("¡Restar!");

        num1 = prompt("Introduzca el Primer Numero a Restar");

        num1 = num1.trim();

        parseInt(num1);

        if (isNaN(num1) || num1 == "") {

            alert("No Introdujo un Nada ó No es Un Numero, Intentelo Nuevamente")

            error = root();

            return error;
        
        }

        num2 = prompt("Introduzca el Segundo Para Restarselo al Primero");

        num2 = num2.trim();

        parseInt(num2);

        if (isNaN(num2) || num2 == "") {

            alert("No Introdujo un Nada ó No es Un Numero, Intentelo Nuevamente")

            error = root();

            return error;
        
        }

        resuladoResta = resta(num1, num2);

        resuladoResta;

    } else if (opciones === 3 || opciones === "3") {

        alert("¡Multiplicar!");

        num1 = prompt("Introduzca el Multiplicando");

        num1 = num1.trim();

        parseInt(num1);

        if (isNaN(num1) || num1 == "") {

            alert("No Introdujo un Nada ó No es Un Numero, Intentelo Nuevamente")

            error = root();

            return error;
        
        }

        num2 = prompt("Introduzca el Multiplicador");

        num2 = num2.trim();

        parseInt(num2);

        if (isNaN(num2) || num2 == "") {

            alert("No Introdujo un Nada ó No es Un Numero, Intentelo Nuevamente")

            error = root();

            return error;
        
        }

        resultadoMultiplicacion = multiplicacion(num1, num2);

        resultadoMultiplicacion;

    } else if (opciones === 4 || opciones === "4") {

        alert("¡Dividir!");

        num1 = prompt("Introduzca el Dividendo");

        num1 = num1.trim();

        parseInt(num1);

        if (isNaN(num1) || num1 == "") {

            alert("No Introdujo un Nada ó No es Un Numero, Intentelo Nuevamente")

            error = root();

            return error;

        }

        num2 = prompt("Introduzca el Divisor");

        num2 = num2.trim();

        parseInt(num2);

        if (isNaN(num2) || num2 == "") {

            alert("No Introdujo un Nada ó No es Un Numero, Intentelo Nuevamente")

            error = root();

            return error;

        }

        if (num2 == 0) {

            alert("No se puede Divivir entre 0");

            error = root();

            return error;

        };

        resultadoDivision = division(num1, num2);

        resultadoDivision;

    } else if (opciones === 5 || opciones === "5") {

        alert("¡Potenciar!");

        num1 = prompt("Introduzca la Base del Numero a Potenciar");

        num1 = num1.trim();

        parseInt(num1);

        if (isNaN(num1) || num1 == "") {

            alert("No Introdujo un Nada ó No es Un Numero, Intentelo Nuevamente")

            error = root();

            return error;

        }

        num2 = prompt("Introduzca el Exponente al Cual Potenciara el Numero Base");

        num2 = num2.trim();

        parseInt(num2);

        if (isNaN(num2) || num2 == "") {

            alert("No Introdujo un Nada ó No es Un Numero, Intentelo Nuevamente");

            error = root();

            return error;
        
        }

        resultadoPotencia = potencia(num1, num2);

        resultadoPotencia;

    } else if (opciones === 6 || opciones == "6") {

        alert("¡Hallar La Hipotenusa de un Triangulo Rectangulo!");

        num1 = prompt('Introduzca La Cantidad del Cateto Opuesto (Si Pondra "," (Coma) Cambiela por un Punto ".")');

        num1 = num1.trim();

        parseFloat(num1);

        if (isNaN(num1) || num1 == "") {

            alert("Cantidad Invalida ó No Introdujo Nada");

            error = root();

            error;

        }

        num2 = prompt('Introduzca La Cantidad del Cateto Adyacente (Si Pondra "," (Coma) Cambiela por un Punto ".")');

        num2 = num2.trim();

        parseFloat(num2);

        if (isNaN(num2) || num2 == "") {

            alert("Cantidad Invalida ó No Intrdujo Nada");

            error = root();

            return error;

        }

        resultadoHipotenusa = hipotenusa(num1, num2);

        resultadoHipotenusa;

    }   else if (opciones === 0 || opciones === "0") {

        alert("Gracias Por Usar Este Algoritmo.");

    } else {

        error = alert("No Introdujo Nada o No Introdujo Algún Numero de las Opciones Dadas.")

        error = root();

        return error;

    }

};

root();

console.log("Calculadora [JS] en Español. - The Liberalist 2023");