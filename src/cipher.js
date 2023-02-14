const cipher = {
  encode: (offset, mensaje) => {
    if (typeof mensaje !== "string" || typeof offset !== "number") {
      throw new TypeError("Los Argumentos son invalidos");
    }

    let mensajeEncode = "";

    for (let i = 0; i < mensaje.length; i++) {
      const codigoLetra = mensaje.charCodeAt(i);
      const codigoLetraOffset = codigoLetra + offset;
      const esMayuscula = codigoLetra >= 65 && codigoLetra <= 90;
      const esMinuscula = codigoLetra >= 97 && codigoLetra <= 122;
      if (esMayuscula) {
        const codigoLetraAlgorotimo = ((codigoLetraOffset - 65) % 26) + 65;
        const letraEncode = String.fromCharCode(codigoLetraAlgorotimo);
        mensajeEncode += letraEncode;
      } else if (esMinuscula) {
        const codigoLetraAlgorotimo = ((codigoLetraOffset - 97) % 26) + 97;
        const letraEncode = String.fromCharCode(codigoLetraAlgorotimo);
        mensajeEncode += letraEncode;
      } else {
        mensajeEncode += mensaje[i];
      }
    }
    return mensajeEncode;
  },

  decode: (offset, mensaje) => {
    if (typeof mensaje !== "string" || typeof offset !== "number") {
      throw new TypeError("Los Argumentos son invalidos");
    }

    let mensajeDecode = "";

    for (let i = 0; i < mensaje.length; i++) {
      const codigoLetra = mensaje.charCodeAt(i);
      const codigoLetraOffset = codigoLetra - offset;
      const esMayuscula = codigoLetra >= 65 && codigoLetra <= 90;
      const esMinuscula = codigoLetra >= 97 && codigoLetra <= 122;
      if (esMayuscula) {
        const codigoLetraAlgorotimo = ((codigoLetraOffset + 65) % 26) + 65;
        const letraDecode = String.fromCharCode(codigoLetraAlgorotimo);
        mensajeDecode += letraDecode;
      } else if (esMinuscula) {
        const codigoLetraAlgorotimo =
          ((codigoLetraOffset + 97) % 26) +
          97; /*averiguar esta parte, no pasa el test */
        const letraDecode = String.fromCharCode(codigoLetraAlgorotimo);
        mensajeDecode += letraDecode;
      } else {
        mensajeDecode += mensaje[i];
      }
    }
    return mensajeDecode;
  },
};

export default cipher;
