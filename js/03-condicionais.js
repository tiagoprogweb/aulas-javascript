/* Estruturas de Controle Condicional
Comandos que permitem analisar uma ou mais condições.
E a partir do resultado desta análise (verdadeiro ou falso),
o programa pode executar ações diferentes. 

Comandos mais comuns: 
if (se), else (senão), else if (senão se) */

let usuario = "Juean";
let idade = 25;
let mensagem; // indefinida/undefined

// Verificar a idade e determinar se é menor ou maior
if( idade >= 18 ){
    mensagem = "maior";
} else {
    mensagem = "menor";
}

// Apresentando os resultados APÓS a condicional
console.log(`${usuario} é ${mensagem} de idade!`);







