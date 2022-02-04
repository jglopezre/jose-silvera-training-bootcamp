/*---------------------------------------------------------------------------------*/
/*---ACTIONS BUTTON SECTION--------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/


document.getElementById('hero-button').addEventListener('click', () => location.href = "shop_by_c.html");
document.getElementById('best-seller-button').addEventListener('click', () => location.href = "shop_by_c.html");
document.getElementById('about-us-button').addEventListener('click', () => location.href = "about_us.html");
document.getElementById('our-services-button').addEventListener('click', () => location.href = "shop_by_c.html");


/*---------------------------------------------------------------------------------*/
/*---SIDE MENU SECTION-------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/


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

/*---------------------------------------------------------------------------------*/
/*---PRODUCTS CAROUSEL SECTION-----------------------------------------------------*/
/*---------------------------------------------------------------------------------*/



let productsCarousel = $('.products-carousel').owlCarousel({
    center: true,
    items: 2,
    margin: -50,
    loop: false,
    dots: false,
    responsive:{
        400: {
            items:1
        },
        700:{
            items:2
        },
        
    }
}) 

let productCardsArr = Array.from(document.querySelectorAll('.product-card'));           //Products card getting

const prodActiveDetection = () => { 
    productCardsArr.forEach((d) => {
        if( d.offsetParent.className.indexOf('center') >= 0 ) {
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

prodActiveDetection(productCardsArr);                                                  //Make a call function on first page load

productsCarousel.on('translated.owl.carousel', prodActiveDetection);

/*---------------------------------------------------------------------------------*/
/*---SERVICE CAROUSEL SECTION------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/
let indicatorDotsArr = Array.from(document.querySelectorAll('.indicator-dot'));


let serviceCarousel = $('.services-carousel').owlCarousel({
    center: true,
    items:1,
    loop:false,
    margin:10,
    doots: false,
    
});



serviceCarousel.on('changed.owl.carousel', function(event) {
    let spot = event.item.index;

    for(let i = 0; i < indicatorDotsArr.length; i ++) {
        indicatorDotsArr[i].style.backgroundColor = 'var(--color-05)';
    }

    indicatorDotsArr[spot].style.backgroundColor = 'var(--color-04)';

    
});


/*---------------------------------------------------------------------------------*/
/*---TESTIMONIAL SECTION-------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/

/* const testimonialNextButton = document.getElementById('testimonial-button') */
const testimonialIndicator = document.getElementById('testimonial-indicator');


let testimonialCarousel = $('.testimonials-carousel').owlCarousel({
    center: true,
    items:1,
    loop:false,
    margin: 10,
    doots: false,
});

$('.testimonial-button').click(function() {
    console.log('button pressed');
    testimonialCarousel.trigger('next.owl.carousel');
});

testimonialCarousel.on('initialized.owl.carousel changed.owl.carousel', function(event) {
    let itemCount = event.item.count;
    let spot = event.item.index;

    testimonialIndicator.firstElementChild.innerText = (spot + 1) + "/" + itemCount;
});


