// Referencias a los elementos HTML
const entradaNumero1 = document.getElementById("num1") as HTMLInputElement;
const entradaNumero2 = document.getElementById("num2") as HTMLInputElement;
const entradaResultado = document.getElementById("result") as HTMLInputElement;

// Referencias a los botones
const botonSumar = document.getElementById("add")!;
const botonRestar = document.getElementById("subtract")!;
const botonMultiplicar = document.getElementById("multiply")!;
const botonDividir = document.getElementById("divide")!;

// Eventos para los botones
botonSumar.addEventListener("click", () => calcular("sumar"));
botonRestar.addEventListener("click", () => calcular("restar"));
botonMultiplicar.addEventListener("click", () => calcular("multiplicar"));
botonDividir.addEventListener("click", () => calcular("dividir"));

// Función para realizar el cálculo
function calcular(operacion: string): void {
  const numero1 = parseFloat(entradaNumero1.value);
  const numero2 = parseFloat(entradaNumero2.value);

  if (isNaN(numero1) || isNaN(numero2)) {
    entradaResultado.value = "Por favor, ingresa números válidos.";
    return;
  }

  let resultado: number;

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
