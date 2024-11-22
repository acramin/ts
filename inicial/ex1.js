/*

Objetivo: criação de variável

*/
// função que verifica se a pessoa está ativa ou não
function ativo(ativo, nome, idade) {
    if (ativo) {
        console.log(nome + " " + idade);
    }
    else {
        console.log(nome + " está inativo");
    }
}
// casos de teste
ativo(true, 'amanda', 20);
ativo(false, 'leticia', 22);
// definição de variável
var nome = 'teste';
var idade = 0;
var ativ = true;
// chama de função
ativo(ativ, nome, idade);
