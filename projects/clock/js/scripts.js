const onBtn = document.querySelector('#startBtn')
const pauseBtn = document.querySelector('#pauseBtn')
const resumeBtn = document.querySelector('#resumeBtn')



function updateTime() {
    let agora = new Date();
    let seconds = agora.getSeconds().toString().padStart(2, '0');
    let minutes = agora.getMinutes().toString().padStart(2, '0');
    let hour = agora.getHours().toString().padStart(2, '0');
    let timeNow = `${hour}:${minutes}:${seconds}`
    document.getElementById('clock').textContent = timeNow

    dayTime(hour);
}

let title = document.getElementById('title')

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

const timeRunning = false
onBtn.addEventListener('click', startTimer)
    
function startTimer() {
    if(!timeRunning) {
        interval = setInterval(updateTime, 1000)
    }
}
