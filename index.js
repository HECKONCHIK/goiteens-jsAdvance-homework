const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

let intervalId;

startBtn.addEventListener("click", function () {
  startBtn.disabled = true;
  stopBtn.disabled = false;

  intervalId = setInterval(function () {
    const colors = ["#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFC107", "#FF9800", "#FF5722"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
  }, 1000);
});

stopBtn.addEventListener("click", function () {
  startBtn.disabled = false;
  stopBtn.disabled = true;

  clearInterval(intervalId);
});
