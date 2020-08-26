(function () {

  let marcasItems = [
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

  ];

  function prueba(array) {
    let contador = 0;
    array.sort()
    for (let i = 0; i < array.length; i++) {
      array[i][1].sort();
      for (let j = 0; j < array[i][1].length; j++) {
        array[i][1][j].push(contador);
        contador++;
        for (let k = 0; k < array[i][1][j].length; k++) {}
      }
    }
  };
  prueba(marcasItems);


  console.log(marcasItems);
  //repetir por marca

  function render(array) {

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
  };
  render(marcasItems);


})();