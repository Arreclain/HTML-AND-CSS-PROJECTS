function openModal(){
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
 document.getElementById("myModal").style.display = "none";

}

function showSlides(x) {
  var i;
  var slides = document.getElementsByClassName("slidesInBanner");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (x > slides.length) {slideIndex = 1}
  if (x < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}