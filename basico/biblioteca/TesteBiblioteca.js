"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Biblioteca_1 = require("./Biblioteca");
var b = new Biblioteca_1.Biblioteca();
b.addLivro('As vantagens de ser invisível', 'Stephen Chbosky', 1999);
b.addLivro('Jogos Vorazes', 'Suzanne Collins', 2008);
var livrosDoAutor = b.buscarPorAutor('Stephen Chbosky'); // busca livro -> retorna array de livros
// Exibir os livros encontrados
if (livrosDoAutor.length > 0) {
    console.log("\nLivros encontrados do autor Stephen Chbosky:");
    livrosDoAutor.forEach(function (livro) {
        console.log("- ".concat(livro.titulo, " (").concat(livro.anoPublicação, ")"));
    });
}
else {
    console.log("Nenhum livro encontrado para o autor Stephen Chbosky.");
}
