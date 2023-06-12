let esposa = {nome: 'Sofia', 
sexo: 'F', 
olho: 'Castanho', 
cabelo: 'Castanho', 
altura: 1.60,
peso: 58,
engordar(p=0){
    console.log('Emagreceu!')
    this.peso -= p
}}
esposa.engordar(3)
console.log(`${esposa.nome} pesa ${esposa.peso} kilos`)