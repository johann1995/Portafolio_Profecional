document.addEventListener("DOMContentLoaded", function() {
    const iconoMenu = document.querySelector(".icono-menu");
    const menuList = document.querySelector(".menu-list");
    const overlay = document.querySelector(".overlay");

    iconoMenu.addEventListener("click", function() {
        menuList.classList.toggle("active");
        overlay.classList.toggle("active");
    });

    overlay.addEventListener("click", function() {
        menuList.classList.remove("active");
        overlay.classList.remove("active");
    });
});
