// 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
sumNumbers = 0;

for (let n of numbers){
sumNumbers += n
}
console.log (sumNumbers/numbers.length);
let mediaAritimeticaNumbers = (sumNumbers/numbers.length);
if (mediaAritimeticaNumbers > 20){
    console.log('valor maior que 20.')
}
else{
    console.log('valor menor ou igual a 20')
};