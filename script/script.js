const countdown = document.getElementById("countdown");

const targetDate = new Date("2026-05-01 18:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) {
    countdown.innerHTML = "Le site est en ligne ! 🚀";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  countdown.innerHTML = `${days}j ${hours}h ${minutes}m`;
}

setInterval(updateCountdown, 1000);
updateCountdown();