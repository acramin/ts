function tipoDeDado(valor) {
    if (typeof valor === "string") { // typeof pega o tipo da variável
        return "Texto";
    }
    else if (typeof valor === "number") {
        return "Número";
    }
    else if (typeof valor === "boolean") {
        return "Booleano";
    }
    else {
        return "Outro tipo";
    }
}
// Testando a função
console.log(tipoDeDado("Olá")); // "Texto"
console.log(tipoDeDado(123)); // "Número"
console.log(tipoDeDado(true)); // "Booleano"
console.log(tipoDeDado(false)); // "Booleano"
console.log(tipoDeDado(undefined)); // "Outro tipo"
console.log(tipoDeDado({})); // "Outro tipo"
