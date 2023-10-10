/* Habilitando o modo estrito do JS */
"use strict";

// 3) crie duas variáveis: nota1 e nota2
let nota1 = 7; // valor de 0 a 10
let nota2 = 6; // valor de 0 a 10

// 4) variável média que é calculada
let media = (nota1 + nota2) / 2;
console.log(media);


let resultado;

// 5) Condicional (aprovado, recuperação ou reprovado)
if(media >= 7){
    resultado = "aprovado";
} else if(media >= 5){
    resultado = "recuperação";
} else {
    resultado = "reprovado";
}

console.log(resultado);





