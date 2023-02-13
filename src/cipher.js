const cipher = {
  encode: (offset, mensaje) => {
    if (typeof mensaje !== "string" || typeof offset !== "number") {
      throw new TypeError("Los Argumentos son invalidos");
    }
    let mensajeEncode = "";

    for (let i = 0; i < mensaje.length; i++) {
      const codigoLetra = mensaje.charCodeAt(i); //87 = W
      const codigoLetraOffset = codigoLetra + offset; // 87 + 7 = 94

      if (codigoLetraOffset >= 90) {
        // SI 94 ES MAYOR DE 90 HASME LCODIGO
        const codigoLetraAlgorotimo = ((codigoLetraOffset - 65) % 26) + 65; // (94 - 65)%26 +65 = 68
        const letraEncode = String.fromCharCode(codigoLetraAlgorotimo); // 68 = D
        mensajeEncode += letraEncode;
      } else {
        // si no es mayor de 90
        const letraEncode = String.fromCharCode(codigoLetraOffset); // Letra
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

    // console.log(mensaje, offset);
    for (let i = 0; i < mensaje.length; i++) {
      const codigoLetra = mensaje.charCodeAt(i); //65 = A
      const codigoLetraOffset = codigoLetra - offset; // 65-7 = 58

      if (codigoLetraOffset <= 65) {
        // SI 58 ES MENOR o igual DE 65 HASME ESTE CODIGO
        const codigoLetraAlgorotimo = ((codigoLetraOffset + 65) % 26) + 65; // (58 + 65)%26 +65 = 84
        const letraDecode = String.fromCharCode(codigoLetraAlgorotimo); // 84 = T
        mensajeDecode += letraDecode;
      } else {
        // si es mayor de 65
        const letraDecode = String.fromCharCode(codigoLetraOffset); // Letra
        mensajeDecode += letraDecode;
      }
    }
    return mensajeDecode;
  },
};

export default cipher;
