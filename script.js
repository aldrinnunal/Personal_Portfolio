// TOGGLE MENU MOBILE

var toggle = document.querySelector('#toggleBar');
var overlay = document.querySelector('.overlay');
var mobilelinks = document.querySelector('.mobilelinks');
toggle.addEventListener('click',function(){
    if (toggle.classList.contains('open')){
        toggle.classList.remove('open');
        overlay.style.display = "none";
        mobilelinks.style.right = "-1000px";
  
    }
    else{
        toggle.classList.add('open');
        overlay.style.display = "block";
        mobilelinks.style.right = "0px";
    }

});
// OVERLAY CLICK 
overlay.addEventListener('click',function(){
    if (toggle.classList.contains('open')){
        toggle.classList.remove('open');
        overlay.style.display = "none";
        mobilelinks.style.right = "-1000px";
  
    }
    else{
        toggle.classList.add('open');
        overlay.style.display = "block";
        mobilelinks.style.right = "0px";
    }

});


// CHECK TOP BAR
window.addEventListener('scroll',function(){
    var header = document.querySelector('header');
    if(window.scrollY==0){
        header.style.backgroundColor = "transparent";
    }
    else{
        header.style.backgroundColor = "rgb(15, 15, 15)";
 
    }
});