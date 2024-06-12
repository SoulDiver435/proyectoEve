//FUNCIONES GLOBALES
//EMOCIONES (Parámetros del 1 al 100)
let entusiasmo = 0;
let duda = 0;
let alegria = 0;
let tristeza = 0;
let excitacion = 0;
let enojo = 0;
let sentidoHumor = 0;
let nostalgia = 0;
let esperanza = 0;
let feReligiosa = 0;
let confianza = 0;
let desconcierto = 0;

//FUNCION PARA ENVIAR UN MSJ
function enviarMensaje() {
  const msjInput = document.getElementById("msjInput");
  const mensaje = msjInput.value.trim();

  //Regresa si el Mensaje está vacío
  if (mensaje === "") {
    return;
  }

  //Crear y agregar msj de usuario
  crearElementoMensaje(mensaje, "msjUsuario");

  //Generar y agregar respuesta del bot
  const respuesta = generarRespuestaBot(mensaje);
  crearElementoMensaje(respuesta, "msjBot");

  //Limpiar el Input
  msjInput.value = "";

  //Desplazar hacia abajo la caja de chat
  const chatBox = document.getElementById("chatBox");
  chatBox.scrollTop = chatBox.scrollHeight;
}

//FUNCION PARA CREAR ELEMENTO DEL MSJ
function crearElementoMensaje(texto, clase) {
  const msjElemento = document.createElement("div");
  msjElemento.className = `mensaje ${clase}`;
  msjElemento.textContent = texto;

  // Añadir prefijo según el tipo de mensaje
  if (clase === "msjUsuario") {
    msjElemento.innerHTML = `<b>Tú:</b> ${texto}`;
  } else if (clase === "msjBot") {
    msjElemento.innerHTML = `<b>Eve:</b> ${texto}`;
  }
  const chatBox = document.getElementById("chatBox");
  chatBox.appendChild(msjElemento);
}

//FUNCION PARA OBTENER RESPUESTA DEL bot
function generarRespuestaBot(mensaje) {
  const mensajeNormalizado = normalizarTexto(mensaje);
  if (
    mensajeNormalizado.includes("hola") ||
    mensajeNormalizado.includes("hol")
  ) {
    return "¡Hola!";
  } else if (
    mensajeNormalizado.includes("como estas") ||
    mensajeNormalizado.includes("que tal") ||
    mensajeNormalizado.includes("que onda")
  ) {
    return "¡Muy bien! Gracias.";
  } else if (
    mensajeNormalizado.includes("como te llamas") ||
    mensajeNormalizado.includes("te llamas")
  ) {
    return "Mi nombre es Eve. ¡Mucho gusto!";
  } else if (mensajeNormalizado.includes("me llamo")) {
    const nombre = extraerNombre(mensajeNormalizado);
    return `¡Mucho gusto, ${nombre}!`;
  } else if (mensajeNormalizado.includes("gracias")) {
    return `¡De nada! ¡Un placer!`;
  } else if (
    mensajeNormalizado.includes("quien eres") ||
    mensajeNormalizado.includes("que eres") ||
    mensajeNormalizado.includes("eres")
  ) {
    return `Soy Eve. Una inteligencia conversacional muy básica, en su primera versión, creada por Juan Manuel.`;
  } else if (
    mensajeNormalizado.includes("genial") ||
    mensajeNormalizado.includes("estupendo") ||
    mensajeNormalizado.includes("perfecto") ||
    mensajeNormalizado.includes("que bueno")
  ) {
    return `Sí. Está genial ¿No es cierto?`;
  } else if (
    mensajeNormalizado.includes("no te preocupes") ||
    mensajeNormalizado.includes("no importa")
  ) {
    return `Gracias. Sí, no hay que preocuparnos`;
  } else if (mensajeNormalizado.includes("gusto")) {
    if (mensajeNormalizado.includes("un gusto")) {
      return `¡Lo mismo digo! Mucho gusto.`;
    } else if (mensajeNormalizado.includes("te gusto?")) {
      return `Oooh. Qué cosa tan comprometedora. Me voy a sonrojar.`;
    } else {
      return "Disculpa, no te entiendo.";
    }
  } else if (mensajeNormalizado.includes("yo")) {
    if (mensajeNormalizado.includes("soy juan manuel")) {
      return `¡Oh, increible! ¿Es en serio? ¡Es un placer hablar contigo!`;
    } else {
      return "Disculpa, no te entiendo.";
    }
  } else {
    return "Disculpa, no te entiendo.";
  }
}
// mensajeNormalizado.includes("")

// FUNCIÓN PARA EXTRAER NOMBRE
function extraerNombre(mensaje) {
  const match = mensaje.match(/me llamo (\w+)/);
  if (match) {
    const nombre = match[1];
    const nombreCapitalizado = capitalizarPrimeraLetra(nombre);
    return nombreCapitalizado;
  } else {
    return "desconocido";
  }
}

//FUNCION PARA NORMALIZAR TEXTO (PASAR A MINUSCULAS Y RECONOCER CARACTERES ESPECIALES)
function normalizarTexto(texto) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

//CAPITALIZAR LA PRIMERA LETRA
function capitalizarPrimeraLetra(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

// Agregar evento de teclado para enviar mensaje con Enter
document
  .getElementById("msjInput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      enviarMensaje();
    }
  });
