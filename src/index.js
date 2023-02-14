import cipher from "./cipher.js";
const botonCifrar = document.querySelector("#cifrar");
const botonDescifrar = document.querySelector("#descifrar");
const botonReiniciar = document.querySelector("#botonReiniciar");

botonCifrar.addEventListener("click", function () {
  const offset = document.querySelector("#offset").value;
  const mensajeI = document.querySelector("#mensajeI").value;
  const mensajeEncode = cipher.encode(parseInt(offset), mensajeI);
  document.querySelector("#mensajeF").value = mensajeEncode;
});

botonDescifrar.addEventListener("click", function () {
  const offset = document.querySelector("#offset").value;
  const mensajeI = document.querySelector("#mensajeI").value;
  const mensajeDecode = cipher.decode(parseInt(offset), mensajeI);
  document.querySelector("#mensajeF").value = mensajeDecode;
});

botonReiniciar.addEventListener("click", function () {
  document.querySelector("#offset").value = "";
  document.querySelector("#mensajeI").value = "";
  document.querySelector("#mensajeF").value = "";
});
