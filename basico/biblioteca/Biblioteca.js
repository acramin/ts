"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
var Biblioteca = /** @class */ (function () {
    function Biblioteca() {
        this.livros = [];
    }
    Biblioteca.prototype.list = function () {
        console.log("Lista de Livros:");
        if (this.livros.length === 0) {
            console.log("Nenhum livro encontrado.");
        }
        else {
            this.livros.forEach(function (livro, index) {
                console.log("".concat(index, ": ").concat(livro.titulo, " | Autor: ").concat(livro.autor, " | Ano de publica\u00E7\u00E3o: ").concat(livro.anoPublicação));
            });
        }
    };
    Biblioteca.prototype.addLivro = function (titulo, autor, anoPublicação) {
        var novoLivro = {
            titulo: titulo,
            autor: autor,
            anoPublicação: anoPublicação,
        };
        this.livros.push(novoLivro);
        console.log("\n******** Atualização *******\n");
        this.list();
    };
    Biblioteca.prototype.buscarPorAutor = function (nomeAutor) {
        var livrosEncontrados = this.livros.filter(function (livro) { return livro.autor === nomeAutor; });
        return livrosEncontrados;
    };
    return Biblioteca;
}());
exports.Biblioteca = Biblioteca;
