const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;

const dots = document.getElementsByClassName('dot');
let dotPosition = 0;

document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide)
document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide)

let myTimer;

window.onload = function () {
    slides[slidePosition].classList.add('carousel-item-visible');
    dots[dotPosition].classList.add('dot-active');
    myTimer = setTimeout(moveSlides, 3000, 'next');
}


function moveToNextSlide() {
    clearTimeout(myTimer);
    moveSlides('next');
}

function moveToPrevSlide() {
    clearTimeout(myTimer);
    moveSlides('prev');
}

function moveSlides(direction) {

    slides[slidePosition].classList.remove('carousel-item-visible');
    dots[dotPosition].classList.remove('dot-active');

    if (direction == 'next') {
        if (slidePosition === totalSlides - 1) {
            slidePosition = 0;
            dotPosition = 0;
        } else {
            slidePosition += 1;
            dotPosition++;
        }
    } else if (direction == 'prev') {
        if (slidePosition === 0) {
            slidePosition = totalSlides - 1;
            dotPosition = dots.length - 1;
        } else {
            slidePosition -= 1;
            dotPosition--;
        }
    } else {
        clearTimeout(myTimer);
        slidePosition = direction;
        dotPosition = direction;
    }

    slides[slidePosition].classList.add('carousel-item-visible');;
    dots[dotPosition].classList.add('dot-active');

    myTimer = setTimeout(moveSlides, 3000, 'next');
}


