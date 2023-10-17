"use strict";

/* Crie um array chamado alunos contendo 3 objetos, cada objeto com um ID (1, 2 e 3) e um nome de um aluno (Joãozinho, Mariazinha, Giuseppezinho). */
const alunos = [
    {
        id: 1,
        nome: "Joãozinho"
    },
    {
        id: 2,
        nome: "Mariazinha"
    },
    {
        id: 3,
        nome: "Giuseppezinho"
    }
];

/* Faça um loop (qualquer um dos 3 que vimos) e mostre no console o nome de cada aluno. Exemplo de saída:

Aluno: Joãozinho
Aluno: Mariazinha
Aluno: Giuseppezinho */

let quantidadeAlunos = alunos.length;

for(let i = 0; i < quantidadeAlunos; i++){
    console.log(alunos[i].nome);
}

console.log("-----------");

let i = 0;
while( i < quantidadeAlunos ){
    console.log(alunos[i].nome);
    i++;
}