/*

Objetivo: criação de interface 
          criação de objeto

*/

// interface para o objeto
interface Produto {
    nome : string;
    preco: number;
    estoque : boolean;
}

// função de exibição
function emEstoque(produto: Produto) : void{
    console.log('Produto: ' + produto.nome);
    console.log('Preço: ' + produto.preco);
    console.log('Em estoque: ' + (produto.estoque ? 'sim' : 'não'));
}

// objeto
let produto: Produto = {
    nome: 'celular',
    preco: 1200,
    estoque: true,
};

// chama função
emEstoque(produto);