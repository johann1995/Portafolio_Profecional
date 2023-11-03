

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


/*funcionalidad para el formulario de contacto*/
















/*js para el manejo del boton de retorno a parte superior de interfaz principal*/ 

const topButton = document.getElementById('topButton');

window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = 'block';
    } else {
        topButton.style.display = 'none';
    }
};

topButton.addEventListener('click', function () {
    document.body.scrollTop = 0; // Para navegadores antiguos
    document.documentElement.scrollTop = 0; // Para navegadores modernos
});

