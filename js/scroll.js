// get all links that have similar href attributes
const links = document.querySelectorAll('a[href^="#"]');

// Smooth scroll links
for (const link of links) {
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");

    document.querySelector(href).scrollIntoView({
        behavior: "smooth"
    });
}