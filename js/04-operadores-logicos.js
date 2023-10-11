"use strict";

// Requisitos da escola para aprovação
const mediaMinima = 7;
const limiteDeFaltas = 10;

// Resultados do aluno
let aluno = "Jean";
let mediaFinal = 6;
let faltas = 11;
let resultado;

/* Operador lógico && (AND - E) */
// if(mediaFinal >= mediaMinima && faltas <= limiteDeFaltas){
//     resultado = "aprovado";
// } else {
//     resultado = "reprovado";
// }

if(mediaFinal >= mediaMinima && faltas <= limiteDeFaltas){
    resultado = "aprovado";
} else if(faltas > limiteDeFaltas){
    resultado = "reprovado por faltas";
} else {
    resultado = "reprovado";
}


console.log(`O aluno ${aluno} está ${resultado}`);
console.log(`Média do aluno: ${mediaFinal}`);
console.log(`Faltas do aluno: ${faltas}`);
