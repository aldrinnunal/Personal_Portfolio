// HEADER COLOR
var header = document.querySelector('header');

window.addEventListener('scroll',function(){
    var header = document.querySelector('header');
    if(window.scrollY==0){
        header.style.backgroundColor = "transparent";
        header.style.boxShadow = "none";
    }
    else{
        header.style.backgroundColor = "rgb(12, 12, 12)";
        header.style.boxShadow = " 0 0 5px black";
        
    }
});

// OWL PROGRAM CAROUSEL
$('.owl-carousel').owlCarousel({
    loop:false,
    margin: 80,
    nav:false,


    responsive:{
        0:{
            items:1,
       
        },
        600:{
            items:2,
    
        },
        1000:{
            items:3,
     
        }
    }
})
