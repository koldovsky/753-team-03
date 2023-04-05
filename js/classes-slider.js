(function () {
  let slidesToShow;
  const container = document.querySelector('.slider__container');
  const track = document.querySelector('.slider__track');
  const btnPrev = document.querySelector('.slider__btn-prev');
  const btnNext = document.querySelector('.slider__btn-next');
  let unitWidth;

  const setSlideDimensions = () => {
    const units = document.querySelectorAll('.slider__units');
    const imageClasses = document.querySelectorAll('.classes .slider__img');
    if (window.innerWidth >= 992) {
      slidesToShow = 4;
    } else if (window.innerWidth >= 768) {
      slidesToShow = 2;
    } else {
      slidesToShow = 1;
    }
    unitWidth = 100 / slidesToShow;
    units.forEach((unit) => {
      unit.style.width = `${unitWidth}%`;
    });
    const unitWidthNow = container.clientWidth * unitWidth / 100;
    console.log(container.clientWidth, ' ', unitWidth, ' ', unitWidthNow)
    imageClasses.forEach((imageClasses) => {
      imageClasses.style.height = `${unitWidthNow}px`;
    });
    track.style.transform = `translate3d(${unitWidth * -1}%, 0, 0)`;
  };

  setSlideDimensions();

  window.addEventListener('resize', () => {
    setSlideDimensions();
  });

  btnPrev.addEventListener('click', () => {
    track.classList.remove('active');
    const units = document.querySelectorAll('.slider__units');
    const lastClone = units[units.length - 1].cloneNode(true);
    track.insertBefore(lastClone, units[0]);
    track.style.transform = `translate3d(${unitWidth * -2}%, 0, 0)`;
    track.removeChild(units[units.length - 1]);
    setTimeout(() => {
      track.classList.add('active');
      track.style.transform = `translate3d(${unitWidth * -1}%, 0, 0)`;
    }, 100);
  });

  btnNext.addEventListener('click', () => {
    track.classList.remove('active');
    const units = document.querySelectorAll('.slider__units');
    const firstClone = units[0].cloneNode(true);
    track.appendChild(firstClone);
    track.style.transform = `translate3d(0, 0, 0)`;
    track.removeChild(units[0]);
    setTimeout(() => {
      track.classList.add('active');
      track.style.transform = `translate3d(${unitWidth * -1}%, 0, 0)`;
    }, 100);
  });
})();