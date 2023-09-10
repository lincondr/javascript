const startBtn = document.querySelector('#startBtn');
let cube = document.querySelector('#cube');
let colors = ['#f33939', '#00fff2', '#0051ff']
const images = document.querySelector('#images')
let crew = ['imagens/luffy.png', 'imagens/zoro.png', 'imagens/nami.png', 'imagens/usopp.png', 'imagens/sanji.png']

startBtn.addEventListener('click', () => {
    let seq = 0
// Color Changer   
    // function changeColor() {
    //     cube.style.background = colors[seq]
    //     seq = (seq + 1) % colors.length;
    //     if(seq === 0) {
    //         clearInterval(interval)
    //     }
    // }
    function changeColor() {
        cube.style.background = colors[seq]
        seq++;
        if(seq > colors.length) {
            seq = 0
            cube.style.background = colors[seq];
        }
    }

    let interval = setInterval(changeColor, 2000)
// Images Changer
    let seqImg = 0
    
    function addImages() {
        let img = document.createElement('img')
        img.setAttribute('id', 'fotin')
        img.setAttribute('src', crew[seqImg])

        images.innerHTML = ''

        images.appendChild(img)
        seqImg++;

        if(seqImg >= crew.length) {
            seqImg = 0;
        }
    }

   
    let itervalImg = setInterval(addImages, 2000);
})