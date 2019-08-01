//-------------------------------------     VARIABLES    --------------------------------------------//

let carousel = document.getElementsByClassName("photo")[0];
let buttonLeft = document.getElementById("button-1");
let buttonRight = document.getElementById("button-2");

let images = ['url("assets/carousel-stage.jpg")', 'url("assets/carousel-band-1.jpg")', 'url("assets/carousel-band-2.jpg")', 'url("assets/carousel-band-3.jpg")'];
let i = 0;

let carouselInterval = window.onload = setInterval(carouselSlideRight, 3000);

buttonLeft.addEventListener('click', carouselSlideLeft);
buttonRight.addEventListener('click', carouselSlideRight);

let tabSummary = document.getElementById("summary");
let tabInfo = document.getElementById("info");
let tabContact = document.getElementById("contact-form");

let summaryBtn = document.getElementById("");
let infoBtn = document.getElementById("");
let contactBtn = document.getElementById("");

summaryBtn.addEventListener('click', showSummary);
infoBtn.addEventListener('click', showInfo);
contactBtn.addEventListener('click', showContact);

//-------------------------------------     CAROUSEL    --------------------------------------------//

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

//-------------------------------------     TABS    --------------------------------------------//

function showSummary() {

}

function showInfo() {

}

function showContact() {
    
}