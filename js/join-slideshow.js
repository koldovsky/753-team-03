(function () {
  const slides = [
    '<div class="join__slide-photo"><img src="img/join-slideshow-photo1.png" alt="Yoga"></div>',
    '<div class="join__slide-photo"><img src="img/join-slideshow-photo2-copy.jpg" alt="Yoga"></div>',
    '<div class="join__slide-photo"><img src="img/join-slideshow-photo3-copy.jpg" alt="Yoga"></div>',
  ];
    const carousel = document.querySelector(".join__carousel-container");
  const slideContainer = carousel.querySelector(
    ".join__carousel-container .join__slides-container "
  );
  let currentSlide = 0;
  function renderSlides(slides) {
    slideContainer.innerHTML = slides[currentSlide];
    if (window.innerWidth > 767) {
      const secondSlide =
        currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
      slideContainer.innerHTML += slides[secondSlide];
    }
  }
  function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    renderSlides(slides);
  }
  function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }
    renderSlides(slides);
  }

  renderSlides(slides);
  const buttonPrev = document.querySelector(
    ".join__carousel-container .join__slide-prev-btn"
  );
  buttonPrev.addEventListener("click", prevSlide);
  const buttonNext = document.querySelector(
    ".join__carousel-container .join__slide-next-btn"
  );
  buttonNext.addEventListener("click", nextSlide);
  window.addEventListener("resize", () => {
    renderSlides(slides);
  });
})();
