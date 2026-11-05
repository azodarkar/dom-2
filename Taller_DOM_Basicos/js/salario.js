function calcular() {
  const horas = Number(document.getElementById("horas").value);
  const valorHora = Number(document.getElementById("valor").value);

  if (document.getElementById("horas").value.trim() === "" ||
      document.getElementById("valor").value.trim() === "" ||
      !Number.isFinite(horas) || horas < 0 ||
      !Number.isFinite(valorHora) || valorHora < 0) {
    alert("Ingresa las horas trabajadas y un valor por hora válido.");
    return;
  }

  const salario = horas * valorHora;
  document.getElementById("resultado").value =
    "$ " + salario.toLocaleString("es-CO");
}