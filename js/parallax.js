// add the 'parallax' class to elements for this effect
const parallax = document.querySelector('.parallax');
 
window.addEventListener("DOMContentLoaded", scrollLoop, false);

function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
}

let xScrollPosition;
let yScrollPosition;

function scrollLoop() {
    xScrollPosition = window.scrollX;
    yScrollPosition = window.scrollY;
    // adjust the rate of the parallax effect in the second argument
    setTranslate(0, yScrollPosition * -0.3, parallax);

    requestAnimationFrame(scrollLoop);
}