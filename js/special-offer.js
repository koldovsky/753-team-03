(function () {
const endDate = new Date("2023-04-16T00:00:00");
const countdownElement = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date();
  const diff = endDate.getTime() - now.getTime();
  const daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutesLeft = Math.floor((diff / (1000 * 60)) % 60);
  const secondsLeft = Math.floor((diff / 1000) % 60);

  countdownElement.innerHTML = `${daysLeft} DAYS and ${hoursLeft} : ${minutesLeft} : ${secondsLeft} `;
}

setInterval(updateCountdown, 1000);

})();