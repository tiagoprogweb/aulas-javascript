"use strict";

// Requisitos da escola para aprovação
const mediaMinima = 7;
const limiteDeFaltas = 10;

// Resultados do aluno
let aluno = "Jean";
let mediaFinal = 8.5;
let faltas = 3;
let resultado;

/* Operador lógico && (AND - E) */
if(mediaFinal >= mediaMinima && faltas <= limiteDeFaltas){
    resultado = "aprovado";
} else {
    resultado = "reprovado";
}

console.log(`O aluno ${aluno} está ${resultado}`);
console.log(`Média do aluno: ${mediaFinal}`);
console.log(`Faltas do aluno: ${faltas}`);
