// 8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let array = [];
for (i = 0; i <= 25; i +=1){
    array.push(i)
}
console.log(array)
// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
let arrayMetade = [];
for(let index = 0; index < array.length; index +=1){
    arrayMetade.push((array[index])/2)
}
console.log(arrayMetade);