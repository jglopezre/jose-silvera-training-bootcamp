let headerTopBarText = document.getElementById('top-bar-text');
let headerTopBar = document.getElementById('top-bar');
let headerBotoomBar = document.getElementById('bottom-bar');
let changingSection = document.getElementById('contact-us-sect')

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