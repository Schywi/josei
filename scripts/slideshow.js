var slideIndex = 0;
showSlides();

function showSlides() {
  var cont;
  /**
   * ! slides  e dots retorna um array
   */
  var slides = document.getElementsByClassName("mySlides"); 
  var dots = document.getElementsByClassName("dot");

  for (cont = 0; cont < slides.length; cont++) {
    slides[cont].style.display = "none";  
  }

  slideIndex++;

  if (slideIndex > slides.length) {slideIndex = 1}  

  for (cont = 0; cont < dots.length; cont++) {
    dots[cont].className = dots[cont].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 6666.666667); // Change image every 2 seconds
}