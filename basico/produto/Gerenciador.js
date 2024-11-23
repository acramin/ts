"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gerenciador = void 0;
var Gerenciador = /** @class */ (function () {
    function Gerenciador() {
        this.produtos = [];
    }
    Gerenciador.prototype.add = function (nome, preco) {
        var prod = {
            nome: nome,
            preco: preco,
            estoque: true,
        };
        this.produtos.push(prod);
        console.log('\n****Atualição****');
        this.list();
    };
    Gerenciador.prototype.remove = function (nome) {
        this.produtos = this.produtos.filter(function (prod) { return prod.nome !== nome; });
        console.log('\n****Atualição****');
        this.list();
    };
    Gerenciador.prototype.list = function () {
        console.log("Lista de Produtos:");
        if (this.produtos.length === 0) {
            console.log("Nenhum produto encontrado.");
        }
        else {
            this.produtos.forEach(function (produto, index) {
                console.log("".concat(index, ": ").concat(produto.nome, " | Pre\u00E7o: ").concat(produto.preco, " | Em estoque: ").concat(produto.estoque ? 'sim' : 'não'));
            });
        }
    };
    return Gerenciador;
}());
exports.Gerenciador = Gerenciador;
