// 6- Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let imparesDoArray = 0;
for (let i = 0; i < numbers.length; i += 1){
  if (numbers[i] % 2 != 0) {
    imparesDoArray += 1;
  }
}
  if (imparesDoArray != 0) {
    console.log(imparesDoArray);
  } else {
    console.log("nenhum valor ímpar encontrado");
  }


