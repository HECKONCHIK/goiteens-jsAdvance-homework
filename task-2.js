refs = {
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]')
}

const countTimer = {
    start() {
        const targetDate = new Date("feb 28 2023");
        setInterval(() => {
            const totalTimeLeft = targetDate - new Date();
            const timeComponent = getTimeComponent(totalTimeLeft)
            updateCountTimer(timeComponent);
        }, 1000);

    }
}

function getTimeComponent(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    return {days, hours, mins, secs}
}

function updateCountTimer({days, hours, mins, secs}) {
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;
}
 countTimer()