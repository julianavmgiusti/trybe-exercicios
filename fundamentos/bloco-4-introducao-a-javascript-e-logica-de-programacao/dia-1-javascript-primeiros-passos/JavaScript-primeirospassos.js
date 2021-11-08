//JavaScript-primeirospassos
// programa 1
const a = 4;
const b = 20;

console.log('Soma: ' + (a+b));
console.log('Subtração: ' + (a-b));
console.log('Multiplicação: ' + (a*b));
console.log('Divisão: ' + (a/b));
console.log('Módulo: ' + (a%b));

// programa 2 Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.
const a = 2;
const b = 3;

if (a > b) {
  console.log("'a' é maior que 'b'");
} else {
  console.log("'b' é maior que 'a'");
};

// programa 3 Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

const a = 4;
const b = 9;
const c = 12;

if (a > b && a > c) {
  console.log('O maior número é: ' + a + ' (a)');
} else if (b > a && b > c) {
  console.log('O maior número é: ' + b + ' (b)');
} else {
  console.log('O maior número é: ' + c + ' (c)');
};

//programa 4 Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero", caso contrário.
const a = 3;
