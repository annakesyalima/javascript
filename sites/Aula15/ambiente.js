let num = [8, 7, 3, 5]
num.sort()
num[4] = 50
num.push(20)
console.log(`Os nossos números são ${num}`)
console.log(num.length)
console.log(`O array em ordem crescente é ${num} e o primeiro elemento é ${num[0]}`)
for (var c = 0; c <= num.length; c++) {
    console.log(num[c]) 
}

for (let c in num) {
    console.log(num[c])
}

console.log(` O valor 8 está na ${num.indexOf(8)} posição`)