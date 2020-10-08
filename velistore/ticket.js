import setItems from "./setItems.js";
import items from "./items.js";


let ticket = (function () {
 return {
  init: function (items) {
   this.items = items;
   this.setVariables();
   this.cacheDom();
   this.bindEvents();
   this.setPerosnalData(this.formInputs);
   this.setArticulosSeleccionados(this.items);
  },
  cacheDom: function () {
   this.articulos = document.getElementById("articulos-seleccionados");
   this.montoTotal = document.getElementById("monto-total");
   this.btnEnviarPedido = document.getElementById("btn-enviar-pedido");
  },
  bindEvents: function () {
   this.btnEnviarPedido.addEventListener("click", this.enviarPedido.bind(this));
  },
  setVariables: function () {
   this.montoTotalContainer = 0;
   this.formInputs = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
  },
  setMontoTotal: function (precio, itemsCantidad) {
   this.montoTotalContainer += precio * itemsCantidad;
   this.montoTotal.innerHTML = this.montoTotalContainer;
  },
  setArticulosSeleccionados: function (obj) {
   for (let brand in obj) {
    for (let j = 0; j < obj[brand].length; j++) {
     if (this.getParameterByName(obj[brand][j]["index"])) {
      let itemsCantidad = this.getParameterByName(obj[brand][j]["index"]),
       articuloSum = document.createElement("p");
      this.articulos.appendChild(articuloSum);
      articuloSum.innerHTML = obj[brand][j]["name"] + " - " + "X " + itemsCantidad;
      this.setMontoTotal(obj[brand][j]["price"], itemsCantidad);
     }
    }
   }
  },

  getParameterByName: function (name) {
   name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
   let regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
   return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  },
  setPerosnalData: function (inputs) {
   inputs.forEach((element) => {
    document.getElementById("txt-" + element).innerHTML = this.getParameterByName(element);
   });
  },
  enviarPedido: function () {
   let
    numeroWhatsapp = "541155725608",
    link = "https://wa.me/" + numeroWhatsapp + "?text=",
    urlPedido = window.location.href,
    encode = encodeURIComponent(urlPedido),
    textoAEnviar = link + encode;
   window.open(textoAEnviar, "Whatsapp");
  }
 };
})();

ticket.init(setItems.getItems(items));