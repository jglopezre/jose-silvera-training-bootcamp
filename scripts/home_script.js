document.getElementById('hero-button').addEventListener('click', () => location.href = "shop_by_c.html");
document.getElementById('best-seller-button').addEventListener('click', () => location.href = "shop_by_c.html");
document.getElementById('about-us-button').addEventListener('click', () => location.href = "about_us.html");
document.getElementById('our-services-button').addEventListener('click', () => location.href = "shop_by_c.html");


let headerTopBarText = document.getElementById('top-bar-text');
let headerTopBar = document.getElementById('top-bar');
let headerBotoomBar = document.getElementById('bottom-bar');
let changingSection = document.getElementById('best-sellers')

window.onscroll = function() {
    if(window.pageYOffset >= changingSection.offsetTop) {
        headerTopBar.style.backgroundColor = "var(--color-01)";
        headerTopBarText.style.color = "var(--color-04)"
        headerBotoomBar.style.backgroundColor = 'var(--color-04)';
        menuButton.style.border = 'solid 1px var(--color-01)';
        
    } else {
        headerTopBar.style.backgroundColor = "var(--color-light-03)";
        headerTopBarText.style.color = "var(--color-01)";
        headerBotoomBar.style.backgroundColor = 'transparent';
        menuButton.style.border = 'none';
    }
}

