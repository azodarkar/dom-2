function obtenerNumeros() {
  const numero1 = document.getElementById("num1").value;
  const numero2 = document.getElementById("num2").value;

  if (numero1.trim() === "" || numero2.trim() === "") {
    alert("Ingresa los dos números para continuar.");
    return null;
  }

  return [Number(numero1), Number(numero2)];
}

function mostrarResultado(valor) {
  document.getElementById("resultado1").value = valor;
}

function sumar() {
  const numeros = obtenerNumeros();
  if (numeros) mostrarResultado(numeros[0] + numeros[1]);
}

function restar() {
  const numeros = obtenerNumeros();
  if (numeros) mostrarResultado(numeros[0] - numeros[1]);
}

function multi() {
  const numeros = obtenerNumeros();
  if (numeros) mostrarResultado(numeros[0] * numeros[1]);
}

function divi() {
  const numeros = obtenerNumeros();
  if (!numeros) return;
  if (numeros[1] === 0) {
    alert("No se puede dividir entre cero.");
    return;
  }
  mostrarResultado(numeros[0] / numeros[1]);
}