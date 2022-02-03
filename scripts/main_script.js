/*---SIDE MENU SECTION---*/

const openMenu = () => {
    sideMenu.style.width = "250px";
}

const closeMenu = () => {
    sideMenu.style.width = "0";
}

const menuButton = document.getElementById('menu-button').addEventListener('click', openMenu);
const closeMenuButton = document.getElementById('close-button').addEventListener('click', closeMenu);
const sideMenu = document.getElementById('side-menu');