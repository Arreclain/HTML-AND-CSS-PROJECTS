function openModal() {
  document.getElementById("natureModal").style.display = "block";
}

function closeModal() {
  document.getElementById("natureModal").style.display = "none";

}

var slideIndex = 1;
showSlides(slideIndex);

//Current Slide calls in a clicked slide as the starting slide.
function currentSlide(x) {
  showSlides(slideIndex = x);
}

function plusSlides(x) {
  showSlides(slideIndex += x);
}

function showSlides(x) {
  var i;
  var slides = document.getElementsByClassName("shownSlide");
  var dots = document.getElementsByClassName("slideInBanner");
  //var captionText = document.getElementById("caption");
  if (x > slides.length) { slideIndex = 1 }
  if (x < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  //captionText.innerHTML = dots[slideIndex - 1].alt;
}