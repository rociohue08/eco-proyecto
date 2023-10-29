// Esta función se ejecutará cuando se envíe el formulario
/*function almacenarInformacion(event) {
  event.preventDefault(); // Evita el envío predeterminado del formulario

  const nombre = document.getElementById("inputnombre").value;
  const apellido = document.getElementById("inputapellido").value;
  const email = document.getElementById("inputEmail").value;
  const cel = document.getElementById("inputcel").value;
  const ciudad = document.getElementById("inputciudad").value;
  const provincia = document.getElementById("inputprovincia").value;
  const consulta = document.getElementById("inputconsulta").value;

  // Verificar si algún campo está vacío
  if (nombre === "" || apellido === "" || email === "" || cel === "" || ciudad === "" || provincia === "" || consulta === "") {
    alert("Por favor, complete todos los campos antes de enviar el formulario.");
    return; // Detiene la función si falta algún campo.
  }

  // Crear un objeto para almacenar la información del usuario
  const usuario = {
    nombre: nombre,
    apellido: apellido,
    email: email,
    cel: cel,
    ciudad: ciudad,
    provincia: provincia,
    consulta: consulta,
  };

  // Almacenar el objeto usuario en un array
  const usuarios = [];

  // Agregar el objeto usuario al array
  usuarios.push(usuario);

  // Convertir el array de objetos a formato JSON
  const usuariosJSON = JSON.stringify(usuarios);

  // Almacenar el JSON en localStorage con una clave llamada "usuarios"
  localStorage.setItem("usuarios", usuariosJSON);

  console.log("nombre: " + nombre);
  console.log("apellido: " + apellido);
  console.log("email: " + email);
  console.log("cel: " + cel);
  console.log("ciudad: " + ciudad);
  console.log("provincia: " + provincia);
  console.log("consulta: " + consulta);
  console.log("formato json: " + usuariosJSON);

  // Mostrar la información almacenada en un elemento HTML
  const infoUsuarioDiv = document.getElementById("info-usuario");
  infoUsuarioDiv.innerHTML = `
    <h2>ESTOS FUERON LOS DATOS ENVIADOS:</h2>
    <p><strong>Nombre:</strong> ${nombre}</p>
    <p><strong>Apellido:</strong> ${apellido}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Cel:</strong> ${cel}</p>
    <p><strong>Ciudad:</strong> ${ciudad}</p>
    <p><strong>Provincia:</strong> ${provincia}</p>
    <p><strong>Consulta:</strong> ${consulta}</p>
  `;
}

// Obtener el formulario por su ID
const formulario = document.getElementById("formulario-contacto");

/* Agregar un evento de envío de formulario, cuando el usuario envía 
el formulario, se ejecuta la función almacenarInformacion */
//formulario.addEventListener("submit", almacenarInformacion);



// Esta función se ejecutará cuando se envíe el formulario
function almacenarInformacion(event) {
  event.preventDefault(); // Evita el envío predeterminado del formulario

  const nombre = document.getElementById("inputnombre").value;
  const apellido = document.getElementById("inputapellido").value;
  const email = document.getElementById("inputEmail").value;
  const cel = document.getElementById("inputcel").value;
  const ciudad = document.getElementById("inputciudad").value;
  const provincia = document.getElementById("inputprovincia").value;
  const consulta = document.getElementById("inputconsulta").value;

  // Verificar si algún campo está vacío o no cumple con el formato esperado
 // ...
if (
  nombre === "" || !/^[A-Za-z\s'-]+$/.test(nombre) || 
  apellido === "" || !/^[A-Za-z\s'-]+$/.test(apellido) || 
  email === "" || !/^\S+@\S+\.\S+$/.test(email) || 
  cel === "" || !/^\d{10}$/.test(cel) || // Verificar si el número de teléfono celular tiene 10 dígitos
  ciudad === "" || !/^[A-Za-z\s'-]+$/.test(ciudad) ||
  provincia === "" || !/^[A-Za-z\s'-]+$/.test(provincia) ||  
  consulta === "" || !/^[A-Za-z\s]+$/.test(consulta) 
  ) 
{
  alert("Por favor, complete todos los campos correctamente antes de enviar el formulario.");
  return; // Detiene la función si falta algún campo o el formato no es correcto.
}




// ...


  // Resto del código para almacenar la información
  // ...

  // Crear un objeto para almacenar la información del usuario
  const usuario = {
    nombre: nombre,
    apellido: apellido,
    email: email,
    cel: cel,
    ciudad: ciudad,
    provincia: provincia,
    consulta: consulta,
  };

  // Almacenar el objeto usuario en un array
  const usuarios = [];

  // Agregar el objeto usuario al array
  usuarios.push(usuario);

  // Convertir el array de objetos a formato JSON
  const usuariosJSON = JSON.stringify(usuarios);

  // Almacenar el JSON en localStorage con una clave llamada "usuarios"
  localStorage.setItem("usuarios", usuariosJSON);

  console.log("nombre: " + nombre);
  console.log("apellido: " + apellido);
  console.log("email: " + email);
  console.log("cel: " + cel);
  console.log("ciudad: " + ciudad);
  console.log("provincia: " + provincia); 
  console.log("consulta: " + consulta);

  // Mostrar la información almacenada en un elemento HTML
  const infoUsuarioDiv = document.getElementById("info-usuario");
  infoUsuarioDiv.innerHTML = `
    <h2>ESTOS FUERON LOS DATOS ENVIADOS:</h2>
    <p><strong>Nombre:</strong> ${nombre}</p>
    <p><strong>Apellido:</strong> ${apellido}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Cel:</strong> ${cel}</p>
    <p><strong>Ciudad:</strong> ${ciudad}</p>
    <p><strong>Provincia:</strong> ${provincia}</p>
    <p><strong>Consulta:</strong> ${consulta}</p>
  `;
}

// Obtener el formulario por su ID
const formulario = document.getElementById("formulario-contacto");

/* Agregar un evento de envío de formulario, cuando el usuario envía 
el formulario, se ejecuta la función almacenarInformacion */
formulario.addEventListener("submit", almacenarInformacion);
