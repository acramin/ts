export interface Cliente {
    nome : string;
    status : 'ativo' | 'inativo';
    email : string;
}

export const clientes: Cliente[] = [
    { nome: 'Ana Silva', status: 'ativo', email: 'ana@gmail.com' },
    { nome: 'Carlos Pereira', status: 'inativo', email: 'carlos@hotmail.com' },
    { nome: 'Maria Souza', status: 'ativo', email: 'maria@yahoo.com' },
    { nome: 'João Oliveira', status: 'inativo', email: 'joao@gmail.com' },
];

