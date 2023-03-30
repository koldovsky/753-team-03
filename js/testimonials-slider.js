let changePosition = 0;
const sliderBody = document.querySelector('.slider__body');
document.querySelector('.next-button').addEventListener('click', function () {
    changePosition -= 100;
    if (changePosition < -200) {
        changePosition = -200;
    }
    sliderBody.style.left = changePosition + '%';
})
document.querySelector('.prev-button').addEventListener('click', function () {
    changePosition += 100;
    if (changePosition > 0) {
        changePosition = 0;
    }
    sliderBody.style.left = changePosition + '%';
})