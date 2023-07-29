//    IDEA DE  ASISTENTE VIRTUAL DEL SITIO WEB QUE RECOMIENDA ACERCA DE QUE COLCHON SERIA EL IDEAL PARA DETERMINADO TIPO DE USUARIO


//Creo la funcio para validar la respuesta que inciaria o no el programa//creamos la respuesta en minuscula / en el  caso de respoder cualquier cosa que avise 
function validarRespuesta(respuesta) {
  respuesta = respuesta.toLowerCase();
  if (respuesta === "si" || respuesta === "no") {
    return true;
  }
  else {
    return false;
  }
}

//Creo funcion para solicitar mediante prompt el tipo de uso si es personal o para alquiler , nosotros recomendamos  espuma para alquiler o para peso mayor a 80 kilogramos
function pedirTipoDeUsuario() {
  let tipoDeUsuario = prompt("¿Queremos saber si es para uso personal o para alquiler?");
  let tipoDeColchon;

//Creo switch para que a cada tipo de usuario le arroje mediante alert una respuesta determinada, creando un case por cada usuario y en el caso que responda otra cosa avise que no esta correcto. Mostrar por alert opcion recomendada
  switch (tipoDeUsuario) {
    case "personal":
      alert("Por el momento puede ser Espumna o Resorte , seamos mas especificos");
      tipoDeColchon = pedirPeso();
      break;
    case "alquiler":
      alert("Te recomendamos Espuma De Alta Densidad");
      tipoDeColchon = "Espuma De Alta Densidad";
      break;
    default:
      alert("Por favor, ingresa un tipo de usuario válido");
      tipoDeColchon = null;
      break;
  }
  return tipoDeColchon;
}

//Creamos una funcion que solicite el peso aproximado del usuario,segun las caracteristicas solicitadas para +de80kg espuma para menos resorte / muestra en alert sujerencia de colchon elegido

function pedirPeso() {
  let peso = parseInt(prompt("Ingrese el peso aproximado a soportar (si es para mas de 1 usuario elegir el mayor peso)"));
  let tipoDeColchon;
  if (peso >= 80) {
    alert("Te recomendamos Espuma De Alta Densidad");
    tipoDeColchon = "Espuma De Alta Densidad";
  }
  else {
    alert("Te recomendamos Resosrtes Continuos");
    tipoDeColchon = "Resosrtes Continuos";
  }
  return tipoDeColchon;
}

// Pedimos la respuesta inicial al usuario, mietras sea si continua nuevamente el proceso de preguntas , LLamando a la función que pida el tipo de usuario y que se almacene en una variable
    // Si la variable no es nula, mostramos el resultado final.

let respuesta = prompt("Tenemos una recomendacion par cada USUARIO las 24hs ¿queres saber que colchon seria tu ideal? Responde si o no");
while (!validarRespuesta(respuesta)) {
  alert("Por favor, responde si o no");
  respuesta = prompt("Tenemos una recomendacion par cada USUARIO las 24hs ¿queres saber que colchon seria tu ideal? Responde si o no");
}
if (respuesta === "si"){
    alert(`Excelente, solo seran 2 preguntas personales para cada usuario`);
       let colchonRecomendado = pedirTipoDeUsuario();       
    if (colchonRecomendado !== null) {
      alert(`Tu colchón ideal es ${colchonRecomendado}`);
    }
}

