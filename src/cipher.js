const cipher = {
  encode: (offset, mensaje) => {
    if (typeof mensaje !== "string" || typeof offset !== "number") {
      throw new TypeError("Los Argumentos son invalidos");
    }
    let mensajeEncode = "";

    for (let i = 0; i < mensaje.length; i++) {
      const codigoLetra = mensaje.charCodeAt(i);
      const codigoLetraOffset = codigoLetra + offset;

      if (codigoLetraOffset >= 90) {
        const codigoLetraAlgorotimo = ((codigoLetraOffset - 65) % 26) + 65;
        const letraEncode = String.fromCharCode(codigoLetraAlgorotimo);
        mensajeEncode += letraEncode;
      } else {
        const letraEncode = String.fromCharCode(codigoLetraOffset);
        mensajeEncode += letraEncode;
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

      if (codigoLetraOffset <= 65) {
        const codigoLetraAlgorotimo = ((codigoLetraOffset + 65) % 26) + 65;
        const letraDecode = String.fromCharCode(codigoLetraAlgorotimo);
        mensajeDecode += letraDecode;
      } else {
        const letraDecode = String.fromCharCode(codigoLetraOffset);
        mensajeDecode += letraDecode;
      }
    }
    return mensajeDecode;
  },
};

export default cipher;
