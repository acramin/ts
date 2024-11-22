import { Biblioteca }  from "./Biblioteca";

const b = new Biblioteca();

b.addLivro('As vantagens de ser invisível', 'Stephen Chbosky', 1999);
b.addLivro('Jogos Vorazes', 'Suzanne Collins', 2008);

const livrosDoAutor = b.buscarPorAutor('Stephen Chbosky'); // busca livro -> retorna array de livros

// Exibir os livros encontrados
if (livrosDoAutor.length > 0) {
    console.log(`\nLivros encontrados do autor Stephen Chbosky:`);
    livrosDoAutor.forEach((livro) => {
      console.log(`- ${livro.titulo} (${livro.anoPublicação})`);
    });
} else {
    console.log("Nenhum livro encontrado para o autor Stephen Chbosky.");
}