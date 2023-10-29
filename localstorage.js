function almacenarInformacion() {
    let nombre;
    let pais;
    
  
    do {
      nombre = prompt("Ingresa tu nombre:");
    } while (!esTexto(nombre));
  
    do {
      pais = prompt("¿Qué país nos visitas?");
    } while (!esTexto(pais));
  

 // Función para verificar si una cadena es texto
 //la cadena toma el valor de lo que fue ingresado en el prompt
 function esTexto(cadena) {
  return isNaN(cadena); 
}

// Función para verificar si una cadena es un número
function esNumero(cadena) {
  return !isNaN(cadena); 
}


    // Crear un objeto para almacenar la información del usuario
    const usuario = {
      nombre: nombre,
      pais: pais,
    };
  
    // Almacenar el objeto usuario en un array
    const usuarios = [];
  
    // Agregar el objeto usuario al array
    usuarios.push(usuario);
  
    // Convertir el array de objetos a formato JSON
    const usuariosJSON = JSON.stringify(usuarios);
  
    // Almacenar el JSON en localStorage con una clave llamada "usuarios"
    localStorage.setItem("usuarios", usuariosJSON);
  
    // Mostrar la información almacenada en alert o console.log
    alert(`¡Hola, ${nombre}! ¡Bienvenida/o a la pagina!`);
    console.log("Estos fueron los datos ingresados")
    console.log(`Nombre: ${nombre}`);
    console.log(`País: ${pais}`);


  
    console.log("Datos almacenados en formato JSON:");
    console.log(usuariosJSON);
  }
  
 
  // Llamar a la función para almacenar la información
  almacenarInformacion();
 
  