// HEADER COLOR
var header = document.querySelector('header');

window.addEventListener('scroll',function(){
    var header = document.querySelector('header');
    if(window.scrollY==0){
        header.style.backgroundColor = "transparent";
        header.style.boxShadow = "none";
    }
    else{
        header.style.backgroundColor = "#F5F2E7";
        header.style.boxShadow = "0px 2px 6px #a2a09b";
 
    }
});