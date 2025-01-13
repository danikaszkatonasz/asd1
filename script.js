function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

// Typewriter Effektus
const texts = [
    "FEJLESZTŐ",
    "DIÁK",
    "WEBDESIGNER",
    "PROGRAMOZÓ"
];
let speed = 100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    if (charcterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

// Az oldal betöltésekor indítjuk el a typewriter effektust
window.onload = function () {
    typeWriter(); // A typewriter effektust indítjuk
    scrollUpBtn.style.display = "none"; // Az oldal betöltésekor rejtve marad a scroll up gomb
};

// Get the button element
const scrollUpBtn = document.getElementById("scrollUpBtn");

// Function to show/hide the button based on scroll position
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollUpBtn.style.display = "block"; // Show the button
    } else {
        scrollUpBtn.style.display = "none"; // Hide the button
    }
};

// Funkció, hogy a gomb rejtve maradjon az oldal betöltésekor
// Ez az onload már le van kezelve, így itt eltávolítható

// Scroll to top function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top smoothly
}

// Typewriter effect function
document.addEventListener('DOMContentLoaded', function () {
    const typewriterText = document.querySelector('.typewriter-text');
    let i = 0;
    let speed = 100; // Speed of typing effect

    function type() {
        if (i < textToType.length) {
            typewriterText.innerHTML += textToType.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type(); // Start typing when the page loads
});

//MODALIS ABLAK
var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("close")[0];

var imgs = document.getElementsByClassName("gallery-img");
for (var i = 0; i < imgs.length; i++) {
  imgs[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.getAttribute('data-description');
  }
}

span.onclick = function() {
  modal.style.display = "none";
}