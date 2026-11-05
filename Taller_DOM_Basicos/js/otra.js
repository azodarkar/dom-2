function calcularPresupuesto() {
  const ids = [
    "numero-inv",
    "cost-comida",
    "cost-bebida",
    "cost-decor",
    "cost-musica",
    "propina-porc"
  ];
  const campos = ids.map((id) => document.getElementById(id));
  const valores = campos.map((campo) => campo.value.trim());

  if (valores.some((valor) => valor === "")) {
    alert("Completa todos los campos para calcular el presupuesto.");
    return;
  }

  const [invitados, costoComida, costoBebida, decoracion, musica, porcentajePropina] =
    valores.map(Number);
  if (!valores.every((valor, indice) => Number.isFinite(Number(valor)) &&
      (indice === 0 ? Number(valor) > 0 : Number(valor) >= 0))) {
    alert("Ingresa valores válidos. El número de invitados debe ser mayor a cero.");
    return;
  }

  const comidaTotal = invitados * costoComida;
  const bebidaTotal = invitados * costoBebida;
  const subtotal = comidaTotal + bebidaTotal + decoracion + musica;
  const propina = subtotal * (porcentajePropina / 100);
  const totalGeneral = subtotal + propina;
  const costoPorInvitado = totalGeneral / invitados;
  const formatoDinero = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    currencyDisplay: "code",
    maximumFractionDigits: 0
  });

  const resultados = [
    comidaTotal,
    bebidaTotal,
    decoracion,
    musica,
    subtotal,
    propina,
    totalGeneral,
    costoPorInvitado
  ];

  document.querySelectorAll("tbody tr").forEach((fila, indice) => {
    fila.children[1].textContent = formatoDinero.format(resultados[indice]);
  });
}

document.querySelector("form").addEventListener("reset", () => {
  document.querySelectorAll("tbody tr").forEach((fila) => {
    fila.children[1].textContent = "";
  });
});