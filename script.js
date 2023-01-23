const inputTexto = document.querySelector(".input-texto");

const mensaje = document.querySelector(".mensaje");
const texto = document.querySelector(".textos")

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar () {
    const textoEncriptado = encriptar(inputTexto.value);
    texto.style.display = "none";
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";
}

function encriptar (stringEncriptada) {
    let matrizCodigo = [["e","enter"],["i","imes"], ["a","ai"], ["o","over"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase(); // para que estén todas en minúscula

    for (let i = 0 ; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }

    return stringEncriptada;
}