function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

let items = {
  "muzarellaChica": [200, "Pizza - Muzarella Chica"],
  "muzarellaGrande": [300, "Pizza - Muzarella Grande"],
  "muzarellaJamonChica": [250, "Pizza - Muzarella y Jamon"],
  "muzarellaJamonGrande": [350, "Pizza - Muzarella y Jamon Grande"],
  "americanaChica": [375, "Pizza - Americana Chica"],
  "americanaGrande": [450, "Pizza - Americana Grande"],
  "verduraChica": [350, "Pizza - Verdura Chica"],
  "verduraGrande": [415, "Pizza - Verdura Grande"]
};

let montoTotalTxt = 0
const articulos = document.getElementById("articulos-seleccionados");


for (let item in items) {
  if (getParameterByName(item) > 0) {
    let itemsCantidad = getParameterByName(item);
    montoTotalTxt += items[item][0] * itemsCantidad;
    let articuloSum = document.createElement("p");
    articuloSum.innerHTML = items[item][1] + " - " + "X " + itemsCantidad;
    articulos.appendChild(articuloSum);
  }
}
const montoTotal = document.getElementById("monto-total");
montoTotal.innerHTML = montoTotalTxt;

document.getElementById("txt-paga-con").innerHTML = getParameterByName("paga-con");
document.getElementById("txt-tu-nombre").innerHTML = getParameterByName("tu-nombre");
document.getElementById("txt-numero-wp").innerHTML = getParameterByName("numero-wp");
document.getElementById("txt-aclaraciones").innerHTML = getParameterByName("aclaraciones");
document.getElementById("txt-calle").innerHTML = getParameterByName("calle");
document.getElementById("txt-numero-domicilio").innerHTML = getParameterByName("numero-domicilio");
document.getElementById("txt-entre-calles").innerHTML = getParameterByName("entre-calles");
document.getElementById("txt-forma-de-pago").innerHTML = getParameterByName("forma-de-pago");
document.getElementById("txt-forma-de-envio").innerHTML = getParameterByName("forma-de-envio");





let enviarPedido = document.getElementById("btn-enviar-pedido");
enviarPedido.addEventListener("click", () => {

  let numeroWhatsapp = "541166969916"
  let link = "https://wa.me/" + numeroWhatsapp + "?text=";
  let urlPedido = window.location.href;
  urlPedido.toString();
  let encode = encodeURIComponent(urlPedido);
  let textoAEnviar = link + encode;
  window.open(textoAEnviar, "Whatsapp");
});