
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


var productsCarousel = $('.products-carousel').owlCarousel({
    center: true,
    items: 1,
    margin: -100,
    loop: false,
    dots: false,
    responsive:{
        600:{
            items:1
        },
        
    }
}) 

$('.services-carousel').owlCarousel({
    center: true,
    items:1,
    loop:false,
    margin:10,
    doots: false,
    
});

let productCardsArr = Array.from(document.querySelectorAll('.product-card'));           //Products card getting

const prodActiveDetection = () => { 
    productCardsArr.forEach((d) => {
        if( d.offsetParent.className.indexOf('active') >= 0 ) {
            d.style.transform = 'scale(1.2)';
            d.firstElementChild.style.display = "block";
            d.lastElementChild.style.display = "block" ;
        } else {
            d.style.transform = 'scale(1)';
            d.firstElementChild.style.display = "none";
            d.lastElementChild.style.display = "none";
        }
    })
}


prodActiveDetection(productCardsArr);
productsCarousel.on('dragged.owl.carousel', prodActiveDetection);


