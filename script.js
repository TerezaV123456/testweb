let slideIndex = 1;
showSlides(slideIndex);

// Zobrazit snímky podle indexu
function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex - 1].style.display = "block";  
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

setInterval(function() {
    showSlides(slideIndex += 1);
}, 3000); 