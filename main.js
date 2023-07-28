//    IDEA DE PROMT QUE DIGA QUE ES UN ASISTENTE VIRTUAL DEL SITIO WEB QUE SI QUIERE SABER SU RECOMENDACION ACERCA DE QUE COLCHON SERIA EL IDEAL PARA DETERMINADO TIPO DE USUARIO

let respuesta = prompt("Tenemos una recomendacion par cada USUARIO las 24hs ¿queres saber que colchon seria tu ideal? Responde si o no")
while (respuesta === "si"){
    alert(`Excelente, solo seran 3 preguntas personales para cada usuario`);
    let tipoDeUsuario = (prompt("¿Queremos saber si es para uso personal o para alquiler?"));
    if (tipoDeUsuario === ("personal")){
      alert("Por el momento puede ser Espumna o Resorte , seamos mas especificos")
    }else{alert ("Te recomendamos Espuma De Alta Densidad") 
    break;}    
    
    let peso = parseInt (prompt("Ingrese el peso aproximado a soportar (si es para mas de 1 usuario elegir el mayor peso)"));
     if (peso >= 80) {
      alert("Te recomendamos Espuma De Alta Densidad")
    }else{alert ("Te recomendamos Resosrtes Continuos") }  
    break;  

}

