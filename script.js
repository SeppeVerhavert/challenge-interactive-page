//-------------------------------------     VARIABLES    --------------------------------------------//

let carousel = document.getElementsByClassName("photo")[0];
let buttonLeft = document.getElementById("button-1");
let buttonRight = document.getElementById("button-2");

let images = ['url("assets/carousel-stage.jpg")', 'url("assets/carousel-band-1.jpg")', 'url("assets/carousel-band-2.jpg")', 'url("assets/carousel-band-3.jpg")'];
let i = 0;

let carouselInterval = window.onload = setInterval(carouselSlideRight, 4000);

buttonLeft.addEventListener('click', carouselSlideLeft);
buttonRight.addEventListener('click', carouselSlideRight);

//------------------------------------------------------------------

let tabSummary = document.getElementById("summary");
let tabInfo = document.getElementById("info");
let tabContact = document.getElementById("contact-form");
let tabLineUp = document.getElementById("line-up");

let summaryBtn = document.getElementById("summary-button");
let infoBtn = document.getElementById("info-button");
let contactBtn = document.getElementById("contact-button");
let lineUpBtn = document.getElementById("lineupt-button");

summaryBtn.addEventListener('click', showSummary);
infoBtn.addEventListener('click', showInfo);
contactBtn.addEventListener('click', showContact);
lineUpBtn.addEventListener('click', showLineUp);

//------------------------------------------------------------------

let badgeN = document.getElementsByClassName("badge")[0];
let visitorsNumber = window.onload = setInterval(showVisitors, 50);

let badgeM = document.getElementsByClassName("badge")[1];
let artistsNumber = window.onload = setInterval(showArtists, 50);

//-------------------------------------     CAROUSEL    --------------------------------------------//

function carouselSlideLeft() {
    if (i < 1) { i = 4; }
    i -= 1;
    carousel.style.backgroundImage = images[i];
    carouselInterval;
}

function carouselSlideRight() {
    if (i > 2) { i = -1; }
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
    tabLineUp.style.display = "none";
}

function showInfo() {
    tabSummary.style.display = "none";
    tabInfo.style.display = "block";
    tabContact.style.display = "none";
    tabLineUp.style.display = "none";
}

function showContact() {
    tabSummary.style.display = "none";
    tabInfo.style.display = "none";
    tabContact.style.display = "block";
    tabLineUp.style.display = "none";
}

function showLineUp() {
    tabSummary.style.display = "none";
    tabInfo.style.display = "none";
    tabContact.style.display = "none";
    tabLineUp.style.display = "block";

}

//-------------------------------------     NUMBERS     ----------------------------------------//

let n = 0;

function showVisitors() {
    if (n < 5999) {
        let randomIntN = Math.floor(Math.random(1) * Math.floor(20));
        n += randomIntN + 137;
        badgeN.innerHTML = n;
    } else if (n > 5999 && n < 8999) {
        let randomIntN = Math.floor(Math.random(1) * Math.floor(10));
        n += randomIntN + 17;
        badgeN.innerHTML = n;
    }else if (n > 8999 && n < 9999) {
        let randomIntN = Math.floor(Math.random(1) * Math.floor(3));
        n += randomIntN;
        badgeN.innerHTML = n;
    } else {
        clearInterval(visitorsNumber);
    }
}

let m = 0;

function showArtists() {
    let randomIntM = Math.floor(Math.random(1) * Math.floor(5));
    if (m < 200) {
        m += randomIntM;
        badgeM.innerHTML = m;
    } else {
        clearInterval(artistsNumber);
    }
}

