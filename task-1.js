const startBtn = document.querySelector(".js-startBtn");
const stopBtn = document.querySelector(".js-stopBtn");

let interval;

startBtn.addEventListener("click", startBtnFunc);

function startBtnFunc() {
  startBtn.disabled = true;
  stopBtn.disabled = false;

    interval = setInterval(() => {
    const colors = ["#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFC107", "#FF9800", "#FF5722"];
    const randomColor = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomColor];
  }, 1000);
}


stopBtn.addEventListener("click", stopBtnFunc);

function stopBtnFunc() {
  startBtn.disabled = false;
  stopBtn.disabled = true;

  clearInterval(interval);
}