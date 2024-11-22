/*

Objetivo: criação de interface
          criação de objeto

*/
// função de exibição
function emEstoque(produto) {
    console.log('Produto: ' + produto.nome);
    console.log('Preço: ' + produto.preco);
    console.log('Em estoque: ' + (produto.estoque ? 'sim' : 'não'));
}
// objeto
var produto = {
    nome: 'celular',
    preco: 1200,
    estoque: true,
};
// chama função
emEstoque(produto);
