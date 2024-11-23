import { clientes } from "./Clintes";
import { filtro } from "./filtro";


const clientesAtivos = filtro(clientes, 'ativo');
console.log('Clientes Ativos:', clientesAtivos);

const clientesInativos = filtro(clientes, 'inativo');
console.log('Clientes Inativos:', clientesInativos);
