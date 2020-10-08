let setDom = (function () {
 return {
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
  }
 }
})()

export default setDom;