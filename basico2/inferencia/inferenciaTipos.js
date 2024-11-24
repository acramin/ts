// Função de exemplo que retorna um número
function minhaFuncao() {
    return 42;
}
// Função de exemplo que nunca retorna (lança um erro)
function funcaoComErro() {
    throw new Error("Erro!");
}
//type Resultado2 = TipoRetorno<typeof funcaoComErro>; // Tipo: never
// Exemplo de uso
var valor1 = minhaFuncao(); // Válido, tipo `number`
//const valor2: Resultado2 = funcaoComErro(); // Válido, tipo `never`
