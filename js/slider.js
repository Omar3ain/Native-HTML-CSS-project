var slidePosition = 1;
SlideShow(slidePosition);
function plusSlides(n) {
  SlideShow(slidePosition += n);
}
function SlideShow(n) {
    var i;
    var slides = document.getElementsByClassName("Containers");
    if (n > slides.length) {slidePosition = 1}
    if (n < 1) {slidePosition = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slidePosition-1].style.display = "block";
} 

function toggleMenu(){
  const menuToggle = document.querySelector('.menuToggle');
  const navigation = document.querySelector('.navigation');
  menuToggle.classList.toggle('active')
  navigation.classList.toggle('active')
  
}