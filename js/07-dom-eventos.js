"use strict";

/* Funções de seleção no DOM

-getElementById()
Seleciona UM elemento através de um id.

-querySelector()
Seleciona UM elemento através de um seletor.

-querySelectorAll()
Seleciona VÁRIOS elementos através de um/vários seletor(es) */

/* Exemplos */

// Acessando o DOM
const subtitulo = document.getElementById("subtitulo-dom");
const desenho = document.querySelector("figure");
const descricao = document.querySelector("#descricao");

console.log(desenho);
console.log(descricao);

const variosElementos = document.querySelectorAll("h3, a");
console.log(variosElementos);
console.log(variosElementos[1]);

// Modificando o DOM
const titulo = document.querySelector("h1");
titulo.textContent = "Olá JavaScript!";
titulo.style.textAlign = "center";  // CSS inline via JS
titulo.classList.add("destaque"); // Classe CSS via JS

/* Selecionando os links contidos na lista */
const linksReferencia = document.querySelectorAll("ul li a");
console.log(linksReferencia);

let quantidadeDeLinks = linksReferencia.length;

for(let link of linksReferencia){
    link.setAttribute("target", "_blank");
}

// for( let i = 0; i < quantidadeDeLinks; i++ ){
//     linksReferencia[i].setAttribute("target", "_blank");
// }


/* Manipulando Eventos */
const pagina = document.querySelector("body");
const exemplo01 = document.querySelector("#exemplo01");
const mensagem = document.querySelector("#mensagem");

// Ouvinte de evento
exemplo01.addEventListener("click", function(){
    pagina.style.fontFamily = "Verdana";
    mensagem.textContent = "Fonte alterada!";
    mensagem.style.backgroundColor = "yellow";
});
