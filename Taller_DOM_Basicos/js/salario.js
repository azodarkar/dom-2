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
  const formatoPesos = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    currencyDisplay: "code",
    maximumFractionDigits: 0
  });
  document.getElementById("resultado").value = formatoPesos.format(salario);
}