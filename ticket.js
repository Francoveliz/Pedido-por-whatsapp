function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


const montoTotal = document.getElementById("monto-total");

let items = {
  muzarellaChica: 200,
  muzarellaGrande: 300,
  muzarellaJamonChica: 250,
  muzarellaJamonGrande: 350,
  americanaChica: 375,
  americanaGrande: 450,
  verduraChica: 350,
  verduraGrande: 415
};

document.getElementById("txt-paga-con").innerHTML = getParameterByName("paga-con");
document.getElementById("txt-tu-nombre").innerHTML = getParameterByName("tu-nombre");
document.getElementById("txt-numero-wp").innerHTML = getParameterByName("numero-wp");
document.getElementById("txt-aclaraciones-pedido").innerHTML = getParameterByName("aclaraciones-pedido");
document.getElementById("txt-dir-de-entrega").innerHTML = getParameterByName("dir-de-entrega");
document.getElementById("txt-aclaraciones-entrega").innerHTML = getParameterByName("aclaraciones-entrega");
document.getElementById("txt-forma-de-pago").innerHTML = getParameterByName("forma-de-pago");
document.getElementById("txt-forma-de-envio").innerHTML = getParameterByName("forma-de-envio");


const enviarPedido = document.getElementById("btn-enviar-pedido");
let link = "https://wa.me/541166969916?text=";
let test = document.getElementById("test");

enviarPedido.addEventListener("click", () => {
  let urlPedido = window.location.href;
  urlPedido.toString();
  let encode = encodeURIComponent(urlPedido);
  let textoAEnviar = link + encode;
  window.open(textoAEnviar, "Whatsapp");
});