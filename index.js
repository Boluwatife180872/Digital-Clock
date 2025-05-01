function updateClock() {
  const now = new Date();

  const time = document.querySelector(".time");
  const date = document.querySelector(".date");

  timeString = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  dateString = now.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  time.textContent = timeString;
  date.textContent = dateString;

  setInterval(updateClock, 1000);
}

updateClock();

setInterval(updateClock, 1000);
