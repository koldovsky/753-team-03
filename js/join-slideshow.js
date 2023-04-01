(function(){
    const slides =[
        '<div class="join__slideshow-photo"><img src="img/join-slideshow-photo1.png" alt="Yoga"></div>',
        '<div class="join__slideshow-photo"><img src="img/join-slideshow-photo2.png" alt="Yoga"></div>',
        '<div class="join__slideshow-photo"><img src="img/join-slideshow-photo3.png" alt="Yoga"></div>'
    ];
    const carousel =document.querySelector('.join__carousel');
    const slideContainer=carousel.querySelector('.join__carousel .join__slideshow ');
    let currentSlide=0;
    function renderSlides(slides){
        slideContainer.innerHTML =slides[currentSlide];
    }
    function nextSlide(){
        currentSlide++;
        if(currentSlide>=slides.length){
            currentSlide=0;
        }
        renderSlides(slides);
    }
    setInterval(nextSlide, 3000);
})();