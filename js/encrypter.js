// Función para encriptar el texto
function getValue(){
    const texto = document.getElementById("input-texto").value;
      if (texto !== "") {
        document.getElementById("muñecoAlura").style.display = "none";
        document.getElementById("avisoIngreso").style.display = "none"
        document.getElementById("avisoIngreso2").style.display = "none"
        document.getElementById("boton3").style.display= "block"
        document.getElementById("texto-input-salida").style.display = "block";
        // Convierte todo el texto ingresado a minusculas
        textoMinusculas = texto.toLowerCase();
        // Reemplaza las letra asignadas por  la combinación de letras que le corresponde
        var textoCifrado = textoMinusculas.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
        // Cambia el valor del input de salida por la variable del texto cifrado
        var element = document.getElementById("texto-input-salida");
        element.innerHTML = textoCifrado;
        // Llama a la función para limpiar el input de entrada
        limpiarInput("input-texto");
      }
}

// Función para desencriptar el texto 
function desencriptar(){
  // Obtiene el valor del input del texto
  const texto = document.getElementById("input-texto").value;
  // Reemplaza de nuevo la combinación de letras por la letra asignada
  var textoCifrado = texto.replace(/enter/gi, "e").replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
  // Esta línea de código cambiar el valor del parrafo por la del texto cifrado
  var element = document.getElementById("texto-input-salida");
  element.innerHTML = textoCifrado;
}

// Función para limpiar el input del texto
function limpiarInput(variable) {
  document.getElementById(variable).value = "";
}

function copiar(){
  // Get the text field
  var copyText = document.getElementById("texto-input-salida").innerHTML
  alert(copyText)

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}

