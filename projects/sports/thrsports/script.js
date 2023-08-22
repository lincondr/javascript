var butt = document.getElementById('button')
butt.addEventListener('mouseenter', entrou)
butt.addEventListener('mouseout', saiu)
function entrou() {
    butt.style.background = 'white'
    butt.style.color = 'black'
}

function saiu(){
    butt.style.background = 'black'
    butt.style.color = 'white'
}

function clicar() {
    var sport = document.getElementsByName('sports')
    var res = document.getElementById('res')
    var img = document.createElement('img')
    img.setAttribute('id', 'picture')
    var sportc = ''
    img.setAttribute('src', '')
    if (sport[0].checked) {
        sportc = '<p>BASKETBALL</p>'
        // alert('basketball escolhido')
        img.setAttribute('src', 'imagens/basketball.jpg')  
    }
    if (sport[1].checked) {
        sportc = '<p>FOOTBALL</p>'
        img.setAttribute('src', 'imagens/football.jpg')
    }
    if (sport[2].checked) {
        sportc = '<p>VOLEYBALL</p>'
        img.setAttribute('src','imagens/voleyball.jpg')
    }
    res.innerHTML = `${sportc}`
    res.style.textAlign = 'center'
    res.appendChild(img)
}

