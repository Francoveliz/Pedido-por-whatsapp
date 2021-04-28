let setIndex = (function () {
 return {
  init: function (items) {
   this.items = items;
   this.setVariables();
   this.cacheDom();
   this.bindEvents();
   this.setPrecios(this.items);
   this.btnSumarRestar();
  },
  cacheDom: function () {
   this.btnMas = document.querySelectorAll(".selector__mas");
   this.inputs = document.querySelectorAll(".item__input");
   this.btnMenos = document.querySelectorAll(".selector__menos");
   this.montoTotalElement = document.getElementById("monto-total-index");
   this.btnSubmit = document.getElementById("enviar");
   this.datosPersonales = document.querySelectorAll(".datos-personales__input");
  },
  bindEvents: function () {
   this.btnSubmit.addEventListener("submit", this.submitEvent.bind(this));
  },
  setVariables: function () {

   this.montoTotal = 0;
  },
  submitEvent: function () {
   this.submitFilter();
  },
  submitFilter: function () {
   for (let i = 0; i < this.inputs.length; i++) {
    if (!(this.inputs[i].value)) {
     this.inputs[i].disabled = true;
    }
   }
   for (let i = 0; i < this.datosPersonales.length; i++) {
    if (!(this.datosPersonales[i].value)) {
     this.datosPersonales[i].disabled = true;
    }
   }
  },
  setPrecios: function (obj) {
   this.precios = [];
   for (let brand in obj) {
    for (let j = 0; j < obj[brand].length; j++) {
     this.precios.push(obj[brand][j]["price"]);
    }
   }
  },
  montoTotalSumar: function () {
   this.montoTotal += this.precios[this.index];
   this.montoTotalElement.innerHTML = this.montoTotal;
  },
  montoTotalRestar: function () {
   this.montoTotal -= this.precios[this.index];
   this.montoTotalElement.innerHTML = this.montoTotal;
  },
  btnSumar: function () {
   if (this.cont[this.index] < 99) {
    this.cont[this.index] += 1;
    this.inputs[this.index].value = this.cont[this.index];
    this.montoTotalSumar();
   }
  },
  btnRestar: function () {
   if (this.cont[this.index] > 0) {
    this.cont[this.index] -= 1;
    this.inputs[this.index].value = this.cont[this.index];
    this.montoTotalRestar();
   }
  },
  btnSumarRestar: function () {
   let cont = [];
   //generar array cont
   for (let i = 0; i < this.inputs.length; i++) {
    cont[i] = 0;
   };
   //agregar event listener a todos  los botones
   for (let index = 0; index < this.inputs.length; index++) {
    //sumar
    this.btnMas[index].addEventListener("click", () => {
     this.index = index;
     this.cont = cont;
     this.btnSumar();
    });
    //restar
    this.btnMenos[index].addEventListener("click", () => {
     this.index = index;
     this.cont = cont;
     this.btnRestar();
    });
   }
  },
 };
})();

export default setIndex;