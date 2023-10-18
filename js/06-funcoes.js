"use strict";

/* Sobre funções

Funções são blocos de código que
podem ser executados e reaproveitados
em praticamente qualquer lugar de
uma aplicação/site.

Usar funções também é benéfico do
ponto de vista de organização de código.

O JS já possui centenas de funções prontas. 
Exemplos: log(), alert(), prompt(), toFixed() etc */

/* Como escrever funções no JS? */

// Forma 1: função anônima
const exemplo1 = function(){
    console.log("Função anônima");
};

// Forma 2: função nomeada/declarada
function exemplo2(){
    console.log("Função nomeada/declarada");
}

// Forma 3: arrow function
const exemplo3 = () => {
    console.log("Arrow Function");
};

// Chamada de função para execução
exemplo1();
exemplo2();
exemplo3();

/* Exemplos diversos */

/* Função com parâmetros e retorno
de dados/resultados */
function somar(valor1, valor2){
    return valor1 + valor2;
}

/* Chamamos a função diversas vezes
e passando valores diferentes como
parâmetros. */
console.log( somar(10, 20) );
console.log( somar(15, 50) );
console.log( somar(30, 47.8) );


/* Formatação de valores em Reais */
let preco = 5500;
let desconto = preco * 0.10; // 10%
let precoFinal = preco - desconto;

function formatarPreco(valor){
    let opcoes = {
        style: "currency",
        currency: "BRL"
    };

    return valor.toLocaleString("pt-br", opcoes);
}

console.log(`Preço: ${formatarPreco(preco)}`);
console.log(`Desconto: ${formatarPreco(desconto)}`);
console.log(`Preço final: ${formatarPreco(precoFinal)}`);

console.log("------------------");

/* Sobre Arrow Function
Sintaxe moderna para funções no JS,
bastante usada por bibliotecas, frameworks 
(React, Angular, Vue e etc). 

A sintaxe geral é:

const algumNome = () => {};

No entanto, esta sintaxe pode ser mais concisa. */

// Versão 1
// function dobra(valor){
//     return valor * 2;
// }

// Versão 2 (Arrow Function)
// const dobra = (valor) => {
//     return valor * 2;
// };

// Versão 3 (Arrow Function com retorno ímplicito)
const dobra = valor => valor * 2;

// Chamadas
console.log( dobra(10) );
console.log( dobra(1325) );
console.log( dobra(55.47) );