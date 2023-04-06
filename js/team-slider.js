(function () {
    let slidesToShow;
    const container = document.querySelector('.slider__container');
    const track = document.querySelector('.slider__track');
    const btnPrev = document.querySelector('.slider__btn-prev');
    const btnNext = document.querySelector('.slider__btn-next');
    let unitWidth;

    const setSlideDimensions = () => {
        const units = document.querySelectorAll('.slider__units');
        const imageTeam = document.querySelectorAll('.team .slider__img');
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
        const unitWidthNow = container.clientWidth * unitWidth / 100;;
        imageTeam.forEach((imageTeam) => {
            imageTeam.style.height = `${unitWidthNow * 1.2}px`;
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

    container.addEventListener('click', (event) => {
        if (event.target.classList.contains('accordion__icon')) {
            if (!event.target.classList.contains('active')) {
                event.target.classList.add('active');
                event.target.parentNode.parentNode.querySelector('.slider__units-text').classList.add('active');
            } else {
                event.target.classList.remove('active');
                event.target.parentNode.parentNode.querySelector('.slider__units-text').classList.remove('active');
            }
        }
    })
})();