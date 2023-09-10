let title = document.getElementById('title')
const onBtn = document.querySelector('#startBtn')
const pauseBtn = document.querySelector('#pauseBtn')
const resumeBtn = document.querySelector('#resumeBtn')
const resetBtn = document.querySelector('#resetBtn')


function updateTime() {
    let agora = new Date();
    let seconds = agora.getSeconds().toString().padStart(2, '0');
    let minutes = agora.getMinutes().toString().padStart(2, '0');
    let hour = agora.getHours().toString().padStart(2, '0');
    let timeNow = `${hour}:${minutes}:${seconds}`
    document.getElementById('clock').textContent = timeNow

    dayTime(hour);
}



function dayTime(time) {
    if (time < 12) {
        document.body.style.background = '#ff6219bd'
        title.innerHTML = ''
        title.innerHTML += `<p>GOOD MORNING</p>`
    } else if (time < 18) {
        document.body.style.background = '#ffd900bd'
        title.innerHTML = ''
        title.innerHTML += `<p>GOOD AFTERNOON</p>`
    } else {
        document.body.style.background = '#0a2238;'
        title.innerHTML = ''
        title.innerHTML += `<p>GOOD NIGHT</p>`
    }
}

let timeRunning = false
onBtn.addEventListener('click', startTimer)
pauseBtn.addEventListener('click', pauseTimer)
resumeBtn.addEventListener('click', resumeTimer)
resetBtn.addEventListener('click', resetTimer)

function startTimer() {
    if (!timeRunning) {
        interval = setInterval(updateTime, 1000)

        timeRunning = true
        startBtn.style.display = 'none'
        pauseBtn.style.display = 'block'
    }
}

function pauseTimer() {
    if (timeRunning) {
        clearInterval(interval);
    }

    timeRunning = false
    pauseBtn.style.display = 'none'
    resumeBtn.style.display = 'block'

    document.body.style.background = '#0a2238'
    title.innerText = 'What time is it now'
}

function resumeTimer() {
    if (!timeRunning) {
        startTimer()

        resumeBtn.style.display = 'none'
        pauseBtn.style.display = 'block'
        timeRunning = true
    }
}

