function calcular() {
  const campos = ["nota1", "nota2", "nota3"].map((id) =>
    document.getElementById(id)
  );
  const valores = campos.map((campo) => campo.value.trim());

  if (valores.some((valor) => valor === "")) {
    alert("Ingresa las tres notas para calcular el promedio.");
    return;
  }

  const notas = valores.map(Number);
  if (notas.some((nota) => !Number.isFinite(nota) || nota < 0 || nota > 5)) {
    alert("Cada nota debe estar entre 0 y 5.");
    return;
  }

  const promedio = notas.reduce((suma, nota) => suma + nota, 0) / notas.length;
  document.getElementById("promedio").value = promedio.toFixed(2);
}