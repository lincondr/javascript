function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert(`[ERRO] Verifique os dados e tente novamente`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/babym.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src','imagens/youngm.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/adultm.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/oldman.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/babyf.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/youngf.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/adultf.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/oldlady.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}