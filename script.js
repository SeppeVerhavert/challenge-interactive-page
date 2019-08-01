let carousel = document.getElementsByClassName("photo")[0];
let buttonLeft = document.getElementById("button-1");
let buttonRight = document.getElementById("button-2");

let images = ['url("assets/carousel-stage.jpg")', 'url("assets/carousel-band-1.jpg")', 'url("assets/carousel-band-2.jpg")', 'url("assets/carousel-band-3.jpg")'];
let i = 0;

let carouselInterval = window.onload = setInterval(carouselSlideRight, 3000);

buttonLeft.addEventListener('click', carouselSlideLeft);
buttonRight.addEventListener('click', carouselSlideRight);

function carouselSlideLeft() {
    if (i < 1) {
        i = 4;
    }
    i -= 1;
    carousel.style.backgroundImage = images[i];
    carouselInterval;
}

function carouselSlideRight() {
    if (i > 2) {
        i = -1;
    }
    i += 1;
    carousel.style.backgroundImage = images[i];
    carouselInterval;
}





