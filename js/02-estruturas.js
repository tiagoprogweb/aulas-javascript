/* Estruturas de Dados 

- Arrays (Vetores/Matrizes): 
Lista de dados indexados, sequenciais e acessíveis por um
índice numérico.

- Objetos
Lista de dados não indexados e formados por propriedades
e valores. */

// Arrays (os índices sempre começam no zero)
let cursos = ["Node.js", "React", "SQL", "UX/UI Design"];

console.log(cursos); // saída direta/estruturada (APENAS NO console)
console.log(cursos[2]); // SQL

/* Exercícios
1) Crie uma constante chamada "dados" e coloque nela
os dados de uma pessoa: nome, sobrenome, idade, telefone e cidade */
const dados = ["Fulano", "Silva", 25, "11-2135-0300", "São Paulo"];

/* 2) Mostre no console uma mensagem contendo somente o nome e a idade
da pessoa. Exemplo: "Fulano tem 25 anos." */
console.log(dados);
console.log(`${dados[0]} tem ${dados[2]} anos.`);