function verificar() {
    var ano = new Date()
    var anoa = ano.getFullYear()
    var year = document.getElementById('year')
    var res = document.getElementById('res')
    if (year.value.length == 0) {
        alert('Dados faltando')
    } else {
        var y = Number(year.value)
        var idade = anoa - y
        var sex = document.getElementsByName('sex')
        var genero = ''
        if (sex[0].checked) {
            genero = 'Homem'
            res.innerHTML = `Voce é um ${genero} com ${idade} anos`
        } else {
            genero = 'Mulher'
            res.innerHTML = `Voce é uma ${genero} com ${idade} anos`
        }
    }
}