function calcular() {
  const producto = document.getElementById("producto").value.trim();
  const cantidad = Number(document.getElementById("cantidad").value);
  const precio = Number(document.getElementById("precio").value);

  if (!producto || !Number.isFinite(cantidad) || cantidad <= 0 ||
      !Number.isFinite(precio) || precio < 0) {
    alert("Ingresa el nombre del producto, una cantidad mayor a cero y un precio válido.");
    return;
  }

  const subtotal = cantidad * precio;
  const iva = subtotal * 0.19;
  const descuento = cantidad > 10 ? subtotal * 0.05 : 0;
  const total = subtotal + iva - descuento;
  const formatoDinero = (valor) => "$ " + valor.toLocaleString("es-CO");

  document.getElementById("subtotal").value = formatoDinero(subtotal);
  document.getElementById("iva").value = formatoDinero(iva);
  document.getElementById("descuento").value = formatoDinero(descuento);
  document.getElementById("total").value = formatoDinero(total);
}