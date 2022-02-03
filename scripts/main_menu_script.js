let menuButton = document.getElementById('menu-button')
let closeMenuButton = document.getElementById('close-button');
let sideMenu = document.getElementById('side-menu');



menuButton.addEventListener('click', () => sideMenu.style.width = "250px")
closeMenuButton.addEventListener('click', () => sideMenu.style.width = "0")

