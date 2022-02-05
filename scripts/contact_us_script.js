let headerTopBarText = document.getElementById('top-bar-text');
let headerTopBar = document.getElementById('top-bar');
let headerBottomBar = document.getElementById('bottom-bar');
let changingSection = document.getElementById('contact-us')

window.onscroll = function() {
    if(window.pageYOffset >= (changingSection.offsetTop)) {
        headerTopBar.style.backgroundColor = "var(--color-01)";
        headerTopBarText.style.color = "var(--color-04)"
        headerBottomBar.style.backgroundColor = 'var(--color-04)';
        menuButton.style.border = 'solid 1px var(--color-01)';
        headerBottomBar.style.boxShadow = '0 5px 5px var(--color-shadow)';
        
    } else {
        headerTopBar.style.backgroundColor = "var(--color-light-03)";
        headerTopBarText.style.color = "var(--color-01)";
        headerBottomBar.style.backgroundColor = 'transparent';
        menuButton.style.border = 'none';
        headerBottomBar.style.boxShadow = 'none';
    }
}