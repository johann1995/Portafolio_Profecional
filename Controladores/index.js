/*boton de watsapp */
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});


/*para el formulario de contacto*/


// Obtén una referencia a los elementos del formulario
const form = document.querySelector('.contact__form-wrapper');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');

// Agrega un evento de escucha para el envío del formulario
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Evita que se envíe el formulario de manera predeterminada

  // Obtén los valores de los campos de entrada
  const name = nameInput.value;
  const email = emailInput.value;
  const subject = subjectInput.value;
  const message = messageInput.value;

  // Haz lo que necesites con los datos (por ejemplo, mostrarlos en la consola)
  console.log('Nombre:', name);
  console.log('Correo Electrónico:', email);
  console.log('Asunto:', subject);
  console.log('Mensaje:', message);
 

  // Puedes enviar los datos a un servidor o realizar otras acciones aquí

  // Limpia los campos de entrada
  nameInput.value = '';
  emailInput.value = '';
  subjectInput.value = '';
  messageInput.value = '';
});
