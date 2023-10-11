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

// if(mediaFinal >= mediaMinima && faltas <= limiteDeFaltas){
//     resultado = "aprovado";
// } else if(faltas > limiteDeFaltas){
//     resultado = "reprovado por faltas";
// } else {
//     resultado = "reprovado";
// }

if( faltas > limiteDeFaltas ){
    resultado = "reprovado por faltas";
} else if( mediaFinal >= mediaMinima ){
    resultado = "aprovado";
} else {
    resultado = "reprovado";
}


console.log(`O aluno ${aluno} está ${resultado}`);
console.log(`Média do aluno: ${mediaFinal}`);
console.log(`Faltas do aluno: ${faltas}`);

console.log("----------------");

/* Operador lógico || (OR - OU) */
let diaDaSemana = "sábado";

if(diaDaSemana == "sábado" || diaDaSemana == "domingo") {
    console.log("Final de semana :)");
} else {
    console.log("Vá trabalhar...");
}

console.log("-------------");

/* Operador lógico ! (NOT - NÃO/NEGAÇÃO) */
let blackFriday = false;

if( !blackFriday ){
    console.log("Preços normais...");
} else {
    console.log("Preços com desconto...");
}