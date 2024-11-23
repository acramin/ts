import { Produto } from "./Produto";

export class Gerenciador{
    produtos : Produto[] = [];

    add(nome : string, preco : number){
        const prod = {
            nome,
            preco,
            estoque : true,
        }
        this.produtos.push(prod);
        console.log('\n****Atualição****');
        this.list();
    }

    remove(nome : string){
        this.produtos = this.produtos.filter((prod) => prod.nome !== nome);
        console.log('\n****Atualição****');
        this.list();
    }

    list(): void {
        console.log("Lista de Produtos:");
        if (this.produtos.length === 0) {
            console.log("Nenhum produto encontrado.");
        }
        else {
            this.produtos.forEach((produto, index) => {
                console.log(
                    `${index}: ${produto.nome} | Preço: ${produto.preco} | Em estoque: ${produto.estoque ? 'sim' : 'não'}`
                );
            });
        }
    }
}