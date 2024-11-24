// Tipo genérico que captura o tipo de retorno de uma função
type TipoRetorno<T> = T extends (...args: any[]) => infer R ? R : never;

// Função de exemplo que retorna um número
function minhaFuncao(): number {
    return 42;
}

// Função de exemplo que nunca retorna (lança um erro)
function funcaoComErro(): never {
    throw new Error("Erro!");
}

// Usando o tipo `TipoRetorno` para inferir os tipos
type Resultado1 = TipoRetorno<typeof minhaFuncao>;  // Tipo: number
//type Resultado2 = TipoRetorno<typeof funcaoComErro>; // Tipo: never

// Exemplo de uso
const valor1: Resultado1 = minhaFuncao();  // Válido, tipo `number`
//const valor2: Resultado2 = funcaoComErro(); // Válido, tipo `never`
