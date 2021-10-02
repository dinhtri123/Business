/// slider show
var slideIndex = 1;
slideshow(slideIndex);

function plusSlides(n) {
    slideshow(slideIndex += n);
  }

function dot(n){
    slideshow(slideIndex = n);
}
function slideshow(n){
    var i;
    var slides = document.querySelectorAll(".header__banner--slider-items");
    var dots = document.querySelectorAll(".dot");
    if (slideIndex > slides.length){
        slideIndex = 1
    }
    if(n < 1){
        slideIndex = slides.length;
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = " none";
    }
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active"; 
}


///dot slide client
var client = document.querySelectorAll(".btnClient");
var i;
        for (i = 0; i < client.length; i++){
            client[i].addEventListener('click', function(){
                var client_dot = document.getElementsByClassName("acClient");
                
                client_dot[0].className = client_dot[0].className.replace("acClient", "");
                this.className += " acClient";
               
            });
            
        } 
       
    