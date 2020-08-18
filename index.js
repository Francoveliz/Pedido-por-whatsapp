// botones de suma y resta

let btnMas = document.querySelectorAll(".selector__mas");
let btnMenos = document.querySelectorAll(".selector__menos");
let inputs = document.querySelectorAll(".item__input");
// monto total
let montoTotalElement = document.getElementById("monto-total-index");
let montoTotal = 0;
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
let precios = Object.values(items);

let cont = [];
cont.length = inputs.length;
for (let i = 0; i < inputs.length; i++) {
  cont[i] = 0;
}


for (let index = 0; index < inputs.length; index++) {

  btnMas[index].addEventListener("click", () => {
    if (cont[index] < 99) {
      cont[index] += 1;
      inputs[index].value = cont[index];
      montoTotal += precios[index];
      montoTotalElement.innerHTML = montoTotal;
    }
  });

  btnMenos[index].addEventListener("click", () => {
    if (cont[index] > 0) {
      cont[index] -= 1;
      inputs[index].value = cont[index];
      montoTotalElement.innerHTML += inputs[index] * precios[index];
      montoTotal -= precios[index];
      montoTotalElement.innerHTML = montoTotal;
    }
  });
}