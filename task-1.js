// Завдання №1
// const startBtn = document.querySelector(".js-startBtn");
// const stopBtn = document.querySelector(".js-stopBtn");

// let interval;

// startBtn.addEventListener("click", startBtnFunc);

// function startBtnFunc() {
//   startBtn.disabled = true;
//   stopBtn.disabled = false;

//     interval = setInterval(() => {
//     const colors = ["#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFC107", "#FF9800", "#FF5722"];
//     const randomColor = Math.floor(Math.random() * colors.length);
//     document.body.style.backgroundColor = colors[randomColor];
//   }, 1000);
// }


// stopBtn.addEventListener("click", stopBtnFunc);

// function stopBtnFunc() {
//   startBtn.disabled = false;
//   stopBtn.disabled = true;

//   clearInterval(interval);
// }

// Завдання №2
new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2019'),
});

/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
const secs = Math.floor((time % (1000 * 60)) / 1000);