let btnMas = document.querySelectorAll(".selector__mas");
let btnMenos = document.querySelectorAll(".selector__menos");
let inputs = document.querySelectorAll(".item__input");

let cont = [];
cont.length = inputs.length;
for (let i = 0; i < cont.length; i++) {
  cont[i] = 0;
}


for (let index = 0; index < inputs.length; index++) {

  btnMas[index].addEventListener("click", () => {
    if (cont[index] < 99) {
      cont[index] += 1;
      inputs[index].value = cont[index];
    }
  });

  btnMenos[index].addEventListener("click", () => {
    if (cont[index] > 0) {
      cont[index] -= 1;
      inputs[index].value = cont[index];
    }
  });
}