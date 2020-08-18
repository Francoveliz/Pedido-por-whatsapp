function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

let items = {
  "muzarellaChica": 200,
  "muzarellaGrande": 300,
  "muzarellaJamonChica": 250,
  "muzarellaJamonGrande": 350,
  "americanaChica": 375,
  "americanaGrande": 450,
  "verduraChica": 350,
  "verduraGrande": 415
};

let montoTotalTxt = 0

for (let item in items) {
  if (getParameterByName(item) > 0) {
    montoTotalTxt += items[item] * getParameterByName(item);
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


const enviarPedido = document.getElementById("btn-enviar-pedido");
let link = "https://wa.me/541166969916?text=";

enviarPedido.addEventListener("click", () => {
  let urlPedido = window.location.href;
  urlPedido.toString();
  let encode = encodeURIComponent(urlPedido);
  let textoAEnviar = link + encode;
  window.open(textoAEnviar, "Whatsapp");
});