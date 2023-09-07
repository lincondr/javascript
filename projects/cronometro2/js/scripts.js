const minutesEl = document.querySelector('#minutes')
const secondsEl = document.querySelector('#seconds')
const milisecondsEl = document.querySelector('#miliseconds')
const startBtn = document.querySelector('#startBtn')
const resumeBtn = document.querySelector('#resumeBtn')
const pauseBtn = document.querySelector('#pauseBtn')
const resetBtn = document.querySelector('#resetBtn')

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resumeBtn.addEventListener('click', resumeTimer);
resetBtn.addEventListener('click', resetTimer);


let isPaused = false;
let miliseconds = 0;
let seconds = 0;
let minutes = 0;

function startTimer() {
    interval = setInterval(() => {
        if (!isPaused) {
            miliseconds += 10;

            if (miliseconds === 1000) {
                seconds++;
                miliseconds = 0;
            }
            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }

            milisecondsEl.textContent = formatMiliseconds(miliseconds);
            secondsEl.textContent = formatTime(seconds);
            minutesEl.textContent = formatTime(minutes);

            pauseBtn.style.display = 'block'
            startBtn.style.display = 'none'
        }
    }, 10)
}

function pauseTimer() {
    isPaused = true
    pauseBtn.style.display = 'none'
    resumeBtn.style.display = 'block'
}

function resumeTimer() {
    isPaused = false
    pauseBtn.style.display = 'block'
    resumeBtn.style.display = 'none'
}

function resetTimer() {
    clearInterval(interval);
    miliseconds = 0;
    seconds = 0;
    minutes = 0;

    milisecondsEl.textContent = '000'
    secondsEl.textContent = '00'
    minutesEl.textContent = '00'

    startBtn.style.display = 'block'
    pauseBtn.style.display = 'none'
    resumeBtn.style.display = 'none'
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMiliseconds(time) {
    return time < 100 ? `${time}`.padStart(3, '0') : time;
}
