import { Livro } from "./Livro";

export class Biblioteca {
    private livros : Livro[] = [];

    list(): void {
        console.log("Lista de Livros:");
        if (this.livros.length === 0) {
            console.log("Nenhum livro encontrado.");
        }
        else {
            this.livros.forEach((livro, index) => {
                console.log(
                    `${index}: ${livro.titulo} | Autor: ${livro.autor} | Ano de publicação: ${livro.anoPublicação}`
                );
            });
        }
    }

    addLivro(titulo : string, autor : string, anoPublicação : number) : void {
        const novoLivro = {
            titulo,
            autor,
            anoPublicação,
        };

        this.livros.push(novoLivro);
        console.log("\n******** Atualização *******\n");
        this.list();
    }

    buscarPorAutor(nomeAutor: string): Livro[] {
        const livrosEncontrados = this.livros.filter((livro) => livro.autor === nomeAutor);
        return livrosEncontrados;
    }

    
}