(function () {
    const slidesToShow = 4;
    const container = document.querySelector('.slider__container');
    const track = document.querySelector('.slider__track');
    const btnPrev = document.querySelector('.btn-prev');
    const btnNext = document.querySelector('.btn-next');
    const units = document.querySelectorAll('.slider__units');
    const unitWidth = container.clientWidth / slidesToShow;

    units.forEach((unit) => {
        unit.style.width = `${unitWidth}px`;
    });

    track.style.transform = `translate3d(${unitWidth * -1}px, 0, 0)`;
    
    btnPrev.addEventListener('click', () => {
        track.classList.remove('active');
        const units = document.querySelectorAll('.slider__units');
        const lastClone = units[units.length - 1].cloneNode(true);
        track.insertBefore(lastClone, units[0]);
        track.style.transform = `translate3d(${unitWidth * -2}px, 0, 0)`;
        track.removeChild(units[units.length - 1]);
        setTimeout(() => {
            track.classList.add('active');
            track.style.transform = `translate3d(${unitWidth * -1}px, 0, 0)`;
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
            track.style.transform = `translate3d(${unitWidth * -1}px, 0, 0)`;
        }, 100);
    });
})();