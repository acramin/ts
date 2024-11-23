import { compararListas } from "./compara";

const l1 = ['teste', 10, 'vale tudo', 95];
const l2 = [50, 'teste', '95', 0];

console.log(`Itens comuns : ${compararListas(l1, l2)}`);