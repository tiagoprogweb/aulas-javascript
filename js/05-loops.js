"use strict";

/* Comandos de Repetição
Instruções para realizar ações
por uma quantidade específica de vezes.

Comandos tradicionais: 
- while         ->  ENQUANTO
- do/while      ->  FAÇA/ENQUANTO
- for           ->  PARA           

Obs.: normalmente o loop é controlado
através de uma variável contadora. */

// EXEMPLO WHILE (ENQUANTO)
/* let contador = 1;
while( contador <= 5 ){
    console.log(`Valor de contador: ${contador}`);
    contador++; // ++ incremento
} */


// EXEMPLO DO/WHILE (FAÇA/ENQUANTO)
// let i = 1;
// do {
//     console.log(`i vale: ${i}`);
//     i++;
// } while( i <= 3 )

/* Obs.: normalmente variáveis de controle
de repetição são chamadas de i, j ou k. */

// EXEMPLO FOR (PARA)
// for( let i = 1; i <= 10; i++ ){
//     console.log(`i vale ${i}`);
// }


/* Loop com array */
let clientes = ["Ozzy", "Dio", "Gillan", "Martin", "Hughes", "Fulano", "Beltrano"];

// "Cache/Memória" da quantidade de elementos do array
let quantidade = clientes.length;

for( let i = 0; i < quantidade; i++ ){
    console.log(`Cliente: ${clientes[i]}`);
}


console.log("---------");

// for/of -> para arrays
let bandas = ["Slayer", "Dream Theater", "Nightwish"];

for(let banda of bandas){
    console.log(banda);
}

// for/in -> para objetos
let livro = {
    titulo: "HTML5",
    autor: "Maujor",
    site: "http://maujor.com",
    ano: 2016,
    editora: "Novatec",
    edicao: 3
};

// para PROPRIEDADE dentro/em LIVRO
for(let propriedade in livro){
    // Acessar APENAS a propriedade
    // console.log(propriedade);

    // Acessar VALOR de cada propriedade
    // console.log(livro[propriedade]);

    console.log(`${propriedade} -> ${livro[propriedade]}`);
}




