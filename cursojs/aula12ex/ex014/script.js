function carregar() {
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    hora = 15
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        // Bom dia
        imagem.src = 'imagens/morning.png'
        document.body.style.background = '#d5d6d1'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde 
        imagem.src = 'imagens/afternoon.png'
        document.body.style.background = '#6d8fa8'
    } else {
        // Boa noite
        imagem.src = 'imagens/night.png'
        document.body.style.background = '#ff644b'
    }
    //night #ff644b
    //aternoon #6d8fa8
    //morning #d5d6d1
}