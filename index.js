const enviar = document.getElementById("enviar");
const texto = document.getElementById("texto");
let link = "https://wa.me/541166969916?text=";


enviar.addEventListener("click", () => {
  let inputValue = texto.value;
  let encode = encodeURI(inputValue);
  let textoAEnviar = link + encode;
  console.log(textoAEnviar);
  window.open(textoAEnviar, "Whatsapp");
});