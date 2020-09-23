let items = (function () {
  return {
    init: function () {
      this.render(this.setInputNames(this.setOrder(this.items)));
    },
    setOrder: function (obj) {
      let newObj = {};
      Object.keys(obj).sort().forEach(function (key) {
        newObj[key] = obj[key];
      });
      for (let item in newObj) {
        newObj[item].sort(function (a, b) {
          var textA = a.name.toUpperCase();
          var textB = b.name.toUpperCase();
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
      };
      return newObj;
    },
    setInputNames: function (obj) {
      let contador = 0;
      for (let item in obj) {
        obj[item].forEach(el => {
          el.index = contador;
          el.index = el.index + "";
          contador++;
        });
      }
      return obj;
    },
    render: function (obj) {
      //brand iterator
      for (let brand in obj) {
        //create brand elements
        let
          container = document.getElementById("items-container"),
          divItem = document.createElement("div"),
          h3 = document.createElement("h3"),
          selectorContainer = document.createElement("div");
        //add brand classes
        divItem.classList.add("item");
        selectorContainer.classList.add("selector__container");
        //add brand to Dom
        container.appendChild(divItem);
        divItem.appendChild(h3);
        divItem.appendChild(selectorContainer);
        //brand name
        h3.innerHTML = brand;
        //item iterator
        for (let j = 0; j < obj[brand].length; j++) {
          //create item elements
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
          //add item classes
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
          //add items to Dom
          selectorContainer.appendChild(selector);
          selector.appendChild(selectorName);
          selector.appendChild(selectorContador);
          selectorContador.appendChild(itemInput);
          selectorContador.appendChild(selectorBtns);
          selectorBtns.appendChild(selectorMas);
          selectorMas.appendChild(plusIcon);
          selectorBtns.appendChild(selectorMenos);
          selectorMenos.appendChild(minusIcon);
          //set items attributes
          itemInput.setAttribute("name", obj[brand][j]["index"]);
          itemInput.setAttribute("type", "number");
          selectorMas.setAttribute("type", "button");
          selectorMenos.setAttribute("type", "button");
          //filter empty labels function
          function labelFunction(labels) {
            if (labels == "") {
              return "";
            } else {
              let labelProcesado = [];
              for (let i = 0; i < labels.length; i++) {
                labelProcesado.push(" " + labels[i] + " ");
              }
              return " (" + labelProcesado + ")"
            }
          };
          //labels add class
          let labelStyle = "<span class='label-style'>" + labelFunction(obj[brand][j]["labels"]) + "</span>"
          //monto precio add class
          let preciosText = "<span class='monto-precio'>$" + obj[brand][j]["price"] + "</span"
          //set item text content
          selectorName.innerHTML = obj[brand][j]["name"] + labelStyle +
            " - " + preciosText;
        }
      }
    },
    setItems: function () {
      return this.setInputNames(this.setOrder(this.items));
    },
    items: {
      "smams": [{
          name: "galletita rellena chocolate - 105gr.",
          price: 75,
          labels: ["sin tacc"]
        },
        {
          name: "galletita rellena frutilla - 105gr.",
          price: 75,
          labels: ["sin tacc"]
        },
        {
          name: "galletita rellena vainilla - 105gr.",
          price: 75,
          labels: ["sin tacc"]
        },
        {
          name: "crackers sin sal - 150gr.",
          price: 90,
          labels: ["sin tacc", " sin sal"]
        },
        {
          name: "crackers clásicas - 150gr.",
          price: 90,
          labels: ["sin tacc"]
        },
        {
          name: "polvoron vainilla - 130gr.",
          price: 82,
          labels: ["sin tacc"]
        },
        {
          name: "polvoron coco - 130gr.",
          price: 82,
          labels: ["sin tacc"]
        },
        {
          name: "polvoron limón - 130gr.",
          price: 82,
          labels: ["sin tacc"]
        },
        {
          name: "galletitas de vainilla con chips de chocolate - 180gr.",
          price: 120,
          labels: ["sin tacc"]
        },
        {
          name: "pepas 150g",
          price: 65,
          labels: ["sin tacc"]
        },
      ],
      "santa maria": [{
          name: "alfajor de chocolate con dulce de leche",
          price: 70,
          labels: ["sin tacc"]
        },
        {
          name: "premezcla universal - 1kg",
          price: 310,
          labels: ["sin tacc"]
        },
        {
          name: "galletitas sabor vainilla",
          price: 110,
          labels: ["sin tacc"]
        },
      ],
      "doña pacha": [{
          name: "harina de arroz - 500gr.",
          price: 90,
          labels: ["sin tacc"]
        },
        {
          name: "premezcla de pizza - 500gr.",
          price: 145,
          labels: ["sin tacc"]
        }
      ],
      "olienka": [{
        name: "trigo Sarraceno con alto contenido en fibra - 500gr.",
        price: 210,
        labels: ["sin tacc"]
      }],
      "delicel": [{
          name: "premezcla de bizcochuelo chocolate",
          price: 125,
          labels: ["sin tacc"]
        },
        {
          name: "premezcla de bizcochuelo vainilla",
          price: 125,
          labels: ["sin tacc"]
        }
      ],
      "macritas": [{
        name: "nachos - 90gr.",
        price: 75,
        labels: ["sin tacc"]
      }],
      "cerealsol": [{
          name: "Cereal sabor miel - 130gr.",
          price: 60,
          labels: ["sin tacc", "vegano"]
        },
        {
          name: "Cereal sabor vainilla - 130gr.",
          price: 60,
          labels: ["sin tacc", "vegano"]
        },
        {
          name: "Cereal sabor chocolate - 130gr.",
          price: 60,
          labels: ["sin tacc", "vegano"]
        }
      ],
      "lennys": [{
        name: "budín de vainilla marmolado/chips de chocolate",
        price: 115,
        labels: ["sin tacc"]
      }],
      "leiva": [{
        name: "Almohaditas de frutilla - 180gr.",
        price: 80,
        labels: ["sin tacc"]
      }],
      "julicroc": [{
          name: "tutucas - 90gr.",
          price: 50,
          labels: ["sin tacc"]
        },
        {
          name: "maní tostado - 100gr.",
          price: 45,
          labels: ["sin tacc"]
        },
        {
          name: "papás fritas - 70gr.",
          price: 55,
          labels: ["sin tacc"]
        }
      ],
      "vrink": [{
          name: "leche de almendras original - 1L",
          price: 200,
          labels: ["sin tacc"]
        },
        {
          name: "leche de almendras sin azúcar - 1L",
          price: 200,
          labels: ["sin tacc", "sin azúcar"]
        },
        {
          name: "leche de almendras sabor chocolate - 1L",
          price: 200,
          labels: ["sin tacc"]
        }
      ],
      "nina´s": [{
        name: "mantequilla de maní",
        price: 200,
        labels: ["sin tacc"]
      }],
      "macrozen": [{
        name: "sal marina fina - 500gr.",
        price: 115,
        labels: ["sin tacc"]
      }],
      "risky dit": [{
          name: "tostadas de arroz clásica",
          price: 80,
          labels: ["sin tacc", "sin sal"]
        },
        {
          name: "galletas de arroz clásica",
          price: 65,
          labels: ["sin sal"]
        }
      ],
      "wakas": [{
          name: "pastas multicereal de quinoa - 250gr.",
          price: 135,
          labels: ["sin tacc", "vegano"]
        },
        {
          name: "pastas multicereal de chia - 250gr.",
          price: 135,
          labels: ["sin tacc", "vegano"]
        }
      ],
      "lulemu": [{
        name: "tostadas light - 120gr.",
        price: 55,
        labels: ["sin tacc"]
      }],
      "kapac": [{
        name: "premezcla universal - 500gr.",
        price: 126,
        labels: ["sin tacc"]
      }, ],
      "maní king": [{
        name: "pasta de maní natural - 485gr. ",
        price: 270,
        labels: ["sin tacc", "vegano"]
      }],
      "alicante": [{
          name: "esencia de vainilla",
          price: 110,
          labels: ["sin tacc"]
        },
        {
          name: "coco rallado - 50gr",
          price: 70,
          labels: ["sin tacc"]
        },
      ],
      "piache": [{
          name: "galletitas endulzado con Stevia sabor banana y nuez",
          price: 120,
          labels: ["sin azúcar"]
        },
        {
          name: "galletitas endulzado con Stevia sabor coco y avena",
          price: 120,
          labels: ["sin azúcar"]
        }
      ],
      "meltaim": [{
          name: "snack sabor : hierbas y queso",
          price: 75,
          labels: ["vegano"]
        },
        {
          name: "snack sabor : oliva y Orégano",
          price: 75,
          labels: ["vegano"]
        }
      ],
      "granja del sol": [{
          name: "medallón Veggies de quinoa y Espinaca",
          price: 120,
          labels: ["vegano"]
        },
        {
          name: "medallón Veggies de cebolla caramelizada y arroz yamani",
          price: 120,
          labels: ["vegano"]
        }
      ],
      "lucchetti": [{
        name: "milanesa de soja",
        price: 185,
        labels: ["vegetariano"]
      }],
      "granolas": [{
          name: "mix clásico - avena arrollada, maní, pasas de uva, coco rallado, canela, jarabe demaíz y vainilla - 100gr.",
          price: 40,
          labels: [""]
        },
        {
          name: "mix energético - copos de maíz, avena, maní, semillas de girasol, lino, sesamo, pasas de uva, frutas deshidratadas, almendras, vainilla, jarabe de maíz - 100gr.",
          price: 50,
          labels: [""]
        },
        {
          name: "granola tradicional (Copos de maíz, Avena, Almendras, Maní, Manzana deshidratada y Girasol) - 100gr.",
          price: 55,
          labels: [""]
        },
      ],
      "frutos secos": [{
          name: "mix Clásico - pasas negras, pasas rubias, almendras, nueces, avellanas, castañas de cajú, maní - 100gr.",
          price: 70,
          labels: [""]
        },
        {
          name: "nuez mariposa - 100gr.",
          price: 110,
          labels: [""]
        },
        {
          name: "bananas chips - 100gr.",
          price: 75,
          labels: [""]
        },
        {
          name: "pasas de uva - 100gr.",
          price: 28,
          labels: [""]
        },
        {
          name: "almendras nacionales - 100gr.",
          price: 150,
          labels: [""]
        },
        {
          name: "castañas de cajú - 100gr.",
          price: 135,
          labels: [""]
        },
        {
          name: "mix deportivo (Bananas chips, almendras, pasas de uva, castañas de cajú, maní tostado pelado) - 100 gr.",
          price: 70,
          labels: [""]
        },
      ],
      "cereales": [{
          name: "copos de maíz - 100gr.",
          price: 30,
          labels: ["sin azúcar"]
        },
        {
          name: "copos de maíz azucarados - 100gr.",
          price: 40,
          labels: [""]
        },
        {
          name: "avena Instantánea - 1Kg",
          price: 180,
          labels: [""]
        },
        {
          name: "avena tradicional - 1Kg",
          price: 180,
          labels: [""]
        },
        {
          name: "almohaditas sabor: chocolate - 100gr.",
          price: 50,
          labels: [""]
        },
        {
          name: "almohaditas sabor: avellana - 100gr.",
          price: 50,
          labels: [""]
        },
        {
          name: "almohaditas sabor: frutilla - 100gr.",
          price: 50,
          labels: [""]
        },
        {
          name: "aritos frutales - 100gr.",
          price: 40,
          labels: [""]
        },
        {
          name: "bolitas de chocolate - 100gr.",
          price: 40,
          labels: [""]
        },
      ],
      "harinas": [{
          name: "harina integral - 250gr.",
          price: 16,
          labels: [""]
        },
        {
          name: "harina de avena - 250gr.",
          price: 35,
          labels: [""]
        },
        {
          name: "fécula de mandioca - 250gr.",
          price: 45,
          labels: [""]
        },
        {
          name: "fécula de garbanzo - 1 Kg.",
          price: 110,
          labels: [""]
        },
        {
          name: "harina de garbanzo - 250gr.",
          price: 30,
          labels: [""]
        }
      ],
      "semillas": [{
          name: "chía - 100gr.",
          price: 30,
          labels: [""]
        },
        {
          name: "girasol - 100Gr.",
          price: 35,
          labels: [""]
        },
        {
          name: "lino - 100gr.",
          price: 15,
          labels: [""]
        },
        {
          name: "mix - 100gr.",
          price: 30,
          labels: [""]
        },
        {
          name: "sésamo integral - 100gr.",
          price: 30,
          labels: [""]
        }
      ],
      "legumbres": [{
          name: "soja texturizada - 100gr.",
          price: 25,
          labels: [""]
        },
        {
          name: "maní salado - 100gr.",
          price: 20,
          labels: [""]
        },
        {
          name: "maní - 100gr.",
          price: 18,
          labels: ["sin sal"]
        }
      ],
      "reposteria": [{
          name: "cacao amargo - 100gr.",
          price: 50,
          labels: [""]
        },
        {
          name: "azúcar mascabo - 250gr.",
          price: 55,
          labels: [""]
        },
        {
          name: "azúcar rubia - 250gr.",
          price: 40,
          labels: [""]
        },
        {
          name: "coco rallado - 100gr.",
          price: 40,
          labels: [""]
        }

      ],
      "san agustin": [{
        name: "aceite de oliva extra virgen con aceite de girasol - 1/2L",
        price: 150,
        labels: [""]
      }],
      "orali": [{
        name: "soja texturizada sustituto pollo - 250gr",
        price: 75,
        labels: [""]
      }],
      "mini arrocitas": [{
        name: "galletas de arroz con baño de chocolate semiamargo - 53gr",
        price: 60,
        labels: [""]
      }],
      "trevel": [{
        name: "stevia - 100ml.",
        price: 100,
        labels: [""]
      }],
      "loma verde": [{
        name: "milanesa de soja",
        price: 140,
        labels: [""]
      }],
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
//ticket page
let ticket = (function () {
  return {
    init: function () {
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
      this.items = items.setItems();
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