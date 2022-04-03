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