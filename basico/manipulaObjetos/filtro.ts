import { Cliente } from "./Clintes"

export function filtro(cliente : Cliente[], status : 'ativo' | 'inativo'){
    return cliente.filter((cliente) => cliente.status === status);
}