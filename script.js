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

let summaryBtn = document.getElementById("summary-button");
let infoBtn = document.getElementById("info-button");
let contactBtn = document.getElementById("contact-button");

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

showSummary();

function showSummary() {
    tabSummary.style.display = "block";
    tabInfo.style.display = "none";
    tabContact.style.display = "none";
    console.log("summary");
}

function showInfo() {
    tabSummary.style.display = "none";
    tabInfo.style.display = "block";
    tabContact.style.display = "none";
    console.log("info");
}

function showContact() {
    tabSummary.style.display = "none";
    tabInfo.style.display = "none";
    tabContact.style.display = "block";
    console.log("contact");
}