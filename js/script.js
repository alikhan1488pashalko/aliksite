const menuButton = document.querySelector(".menu-button");
const closeButton = document.querySelector(".close-button");
const overlay = document.querySelector("#overlay");
const sideMenu = document.getElementById("side-menu");

menuButton.onclick = openMenu;
closeButton.onclick = closeMenu;
overlay.onclick = closeMenu;

function openMenu() {
    sideMenu.style.width = "250px";
    overlay.style.width = "100%";
    sideMenu.classList.add('animated'); // Добавляем класс animated
}

function closeMenu() {
    sideMenu.style.width = "0";
    overlay.style.width = "0";
    sideMenu.classList.remove('animated'); // Удаляем класс animated
}
