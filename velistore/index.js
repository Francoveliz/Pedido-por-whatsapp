let items = (function () {

  return {
    init: function () {
      this.setInputNames(this.items);
      this.render(this.items);
    },
    items: [
      ["smams", [
        ["galletita rellena chocolate", 75],
        ["galletita rellena frutilla", 75],
        ["galletita rellena vainilla", 75],
        ["crackers sin sal clásicas", 90],
        ["polvoron vainilla", 82],
        ["polvoron coco", 82],
        ["polvoron limón", 82],
        ["galletitas de vainilla con chips de chocolate", 120],
        ["grisines clásicos", 138],
        ["pepas 150g", 65],
      ]],
      ["santa maria", [
        ["galletita de chocolate/scons", 115],
        ["alfajor de chocolate con dulce de leche", 70],
        ["premezcla universal - 1kg", 310]
      ]],
      ["cerro azul", [
        ["alfajor con mousse de vainilla (vegano, sin azucar)", 78]
      ]],
      ["doña pacha", [
        ["harina de arroz", 90],
        ["premezcla de pizza", 145]
      ]],
      ["olienka", [
        ["trigo Sarraceno con alto contenido en fibra", 210],
      ]],
      ["delicel", [
        ["premezcla de bizcochuelo chocolate", 125],
        ["premezcla de bizcochuelo vainilla", 125],
      ]],
      ["egran", [
        ["barra crocante sabor chocolate", 30]
      ]],
      ["macritas", [
        ["nachos - 90gr.", 75]
      ]],
      ["cerealsol", [
        ["Cereal sabor miel (vegano)", 60],
        ["Cereal sabor vainilla (vegano)", 60],
        ["Cereal sabor chocolate (vegano)", 60],
      ]],
      ["lennys", [
        ["budín de vainilla marmolado/chips de chocolate", 115],
      ]],
      ["leiva", [
        ["Almohaditas de frutilla - 180gr.", 82],
      ]],
      ["julicroc", [
        ["tutucas - 90g", 50],
        ["maní tostado - 100g", 45],
        ["papás fritas - 70g", 55],
      ]],
      ["vrink", [
        ["leche de almendras (sin azúcar) - 1L", 180],
      ]],
      ["nina´s", [
        ["mantequilla de maní", 200],
      ]],
      ["macrozen", [
        ["sal marina fina", 115],
      ]],
      ["risky dit", [
        ["tostadas de arroz clásica, sin sal", 80],
      ]],
      ["arcor", [
        ["natural Break- Mix frutos secos", 75],
      ]],
      ["wakas", [
        ["pastas multicereal de quinoa - 250gr.", 135],
        ["pastas multicereal de chia - 250gr.", 135],
      ]],
      ["lulemu", [
        ["tostadas light", 55],
      ]],
      ["kapac", [
        ["premezcla universal - 500g", 126],
        ["polvo leudante - 400g", 180],
      ]],
      ["maní king", [
        ["pasta de maní natural", 270],
      ]],
      ["franks", [
        ["pan de hamburguesa", 60],
      ]],
      ["alicante", [
        ["esencia de vainilla", 110],
        ["coco rallado - 50gr", 70],
        ["bicarbonato de sodio - 50gr", 40],
      ]],
    ],
    setInputNames: function (array) {
      let contador = 0;
      array.sort()
      for (let i = 0; i < array.length; i++) {
        array[i][1].sort();
        for (let j = 0; j < array[i][1].length; j++) {
          array[i][1][j].push(contador + "");
          contador++;
          for (let k = 0; k < array[i][1][j].length; k++) {}
        }
      }

    },
    render: function (array) {
      for (let i = 0; i < array.length; i++) {
        let
          container = document.getElementById("items-container"),
          divItem = document.createElement("div"),
          h3 = document.createElement("h3"),
          selectorContainer = document.createElement("div");

        divItem.classList.add("item");
        selectorContainer.classList.add("selector__container");

        container.appendChild(divItem);
        divItem.appendChild(h3);
        divItem.appendChild(selectorContainer);

        h3.innerHTML = array[i][0];

        //repetir por item
        for (let j = 0; j < array[i][1].length; j++) {
          let
            selector = document.createElement("div"),
            selectorName = document.createElement("p"),
            selectorContador = document.createElement("div"),
            itemInput = document.createElement("input"),
            selectorBtns = document.createElement("div"),
            selectorMas = document.createElement("button"),
            plusIcon = document.createElement("i"),
            selectorMenos = document.createElement("button"),
            minusIcon = document.createElement("i");

          selector.classList.add("selector");
          selectorName.classList.add("selector__name");
          selectorContador.classList.add("selector__contador");
          itemInput.classList.add("item__input");
          selectorBtns.classList.add("selector__btns");
          selectorMas.classList.add("selector__mas");
          plusIcon.classList.add("fas");
          plusIcon.classList.add("fa-plus");
          selectorMenos.classList.add("selector__menos");
          minusIcon.classList.add("fas");
          minusIcon.classList.add("fa-minus");

          selectorContainer.appendChild(selector);
          selector.appendChild(selectorName);
          selector.appendChild(selectorContador);
          selectorContador.appendChild(itemInput);
          selectorContador.appendChild(selectorBtns);
          selectorBtns.appendChild(selectorMas);
          selectorMas.appendChild(plusIcon);
          selectorBtns.appendChild(selectorMenos);
          selectorMenos.appendChild(minusIcon);

          itemInput.setAttribute("name", array[i][1][j][2]);
          itemInput.setAttribute("type", "number");
          selectorMas.setAttribute("type", "button");
          selectorMenos.setAttribute("type", "button");

          selectorName.innerHTML = array[i][1][j][0] + " - $" + array[i][1][j][1];
        }
      }
    },
    setItems: function () {
      this.setInputNames(this.items);
      return this.items;
    }

  };
})();



// index page
let index = (function () {
  return {
    init: function () {
      this.setVariables();
      this.cacheDom();
      this.bindEvents();
      this.setPrecios(this.items);
      this.btnSumarRestar();
      console.log(this.items);

    },

    cacheDom: function () {
      this.btnMas = document.querySelectorAll(".selector__mas");
      this.inputs = document.querySelectorAll(".item__input");
      this.btnMenos = document.querySelectorAll(".selector__menos");
      this.montoTotalElement = document.getElementById("monto-total-index");
      this.btnSubmit = document.getElementById("btn__submit");
      this.datosPersonales = document.querySelectorAll(".datos-personales__input");
    },
    bindEvents: function () {
      this.btnSubmit.addEventListener("click", this.submitEvent.bind(this));
    },
    setVariables: function () {
      this.items = items.setItems();
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
    setPrecios: function (array) {
      this.precios = [];
      for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i][1].length; j++) {
          this.precios.push(array[i][1][j][1]);
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



let ticket = (function () {
  return {
    init: function () {
      this.setVariables();
      this.cacheDom();
      this.bindEvents();
      this.setPerosnalData(this.formInputs);
      this.setArticulosSeleccionados();
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
      this.items = items.setItems();
      this.montoTotalContainer = 0;
      this.formInputs = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
    },
    setMontoTotal: function (item, itemsCantidad) {
      this.montoTotalContainer += item * itemsCantidad;
      this.montoTotal.innerHTML = this.montoTotalContainer;
    },
    setArticulosSeleccionados: function () {
      for (let i = 0; i < this.items.length; i++) {
        for (let j = 0; j < this.items[i][1].length; j++) {
          if (this.getParameterByName(this.items[i][1][j][2])) {
            let itemsCantidad = this.getParameterByName(this.items[i][1][j][2]),
              articuloSum = document.createElement("p");
            this.articulos.appendChild(articuloSum);
            articuloSum.innerHTML = this.items[i][1][j][0] + " - " + "X " + itemsCantidad;
            console.log(this.items[i][1][j][2]);
            console.log(itemsCantidad);
            this.setMontoTotal(this.items[i][1][j][1], itemsCantidad);
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
        numeroWhatsapp = "541166969916",
        link = "https://wa.me/" + numeroWhatsapp + "?text=",
        urlPedido = window.location.href,
        encode = encodeURIComponent(urlPedido),
        textoAEnviar = link + encode;
      window.open(textoAEnviar, "Whatsapp");
    }
  };
})();