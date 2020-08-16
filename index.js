const enviar = document.getElementById("enviar");
const pizza = document.getElementById("pizza");
const empanada = document.getElementById("empanada");
const montoTotal = document.getElementById("monto-total");
let link = "https://wa.me/541166969916?text=";


enviar.addEventListener("load", () => {

  let pizzaPrecio = pizza.value * 50;
  var empanadaPrecio = 5;
  let precioTotal = pizzaPrecio + empanadaPrecio;
  montoTotal.innerHTML = precioTotal;
});