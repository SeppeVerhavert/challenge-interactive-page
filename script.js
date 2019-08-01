let carousel = document.getElementsByClassName("photo");
let buttonLeft = document.getElementById("button-1");
let buttonRight = document.getElementById("button-2");

buttonLeft.addEventListener('click', carouselSlideLeft);
buttonRight.addEventListener('click', carouselSlideRight);

function carouselSlideLeft() {
    console.log("left");
}

function carouselSlideRight() {
    console.log("Right");
}




