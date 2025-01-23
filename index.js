"use strict";
// Referencias a los elementos HTML
const entradaNumero1 = document.getElementById("num1");
const entradaNumero2 = document.getElementById("num2");
const entradaResultado = document.getElementById("result");
// Referencias a los botones
const botonSumar = document.getElementById("add");
const botonRestar = document.getElementById("subtract");
const botonMultiplicar = document.getElementById("multiply");
const botonDividir = document.getElementById("divide");
// Eventos para los botones
botonSumar.addEventListener("click", () => calcular("sumar"));
botonRestar.addEventListener("click", () => calcular("restar"));
botonMultiplicar.addEventListener("click", () => calcular("multiplicar"));
botonDividir.addEventListener("click", () => calcular("dividir"));
// Función para realizar el cálculo
function calcular(operacion) {
    const numero1 = parseFloat(entradaNumero1.value);
    const numero2 = parseFloat(entradaNumero2.value);
    if (isNaN(numero1) || isNaN(numero2)) {
        entradaResultado.value = "Por favor, ingresa números válidos.";
        return;
    }
    let resultado;
    switch (operacion) {
        case "sumar":
            resultado = numero1 + numero2;
            break;
        case "restar":
            resultado = numero1 - numero2;
            break;
        case "multiplicar":
            resultado = numero1 * numero2;
            break;
        case "dividir":
            if (numero2 === 0) {
                entradaResultado.value = "No se puede dividir entre 0.";
                return;
            }
            resultado = numero1 / numero2;
            break;
        default:
            entradaResultado.value = "Operación no válida.";
            return;
    }
    entradaResultado.value = resultado.toString();
}
