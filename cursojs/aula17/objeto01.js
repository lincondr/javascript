let amigo = {idade: 25, nome: 'Jose',
 sexo: 'M', 
 peso: 85.4,
 engordar(p=0) {
    console.log('engordou')
    this.peso += p
 },
 envelhecer(i=0) {
    console.log('Envelheceu')
    this.idade += i
 }
}
amigo.engordar(5)
amigo.envelhecer(2)
console.log(`${amigo.nome} tem ${amigo.idade} e pesa ${amigo.peso}Kg`)