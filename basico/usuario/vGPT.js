"use strict";
class SistemaAutenticacao {
    constructor() {
        this.tabela = new Map();
    }
    // Adicionar usuário
    adicionarUsuario(email, nome, senha) {
        this.tabela.set(email, { senha, nome });
        console.log(`Usuário ${nome} adicionado com sucesso.`);
    }
    // Autenticar usuário
    autenticar(email, senha) {
        const usuario = this.tabela.get(email);
        if (usuario && usuario.senha === senha) {
            console.log(`Bem-vindo, ${usuario.nome}!`);
            return true;
        }
        else {
            console.log("Credenciais inválidas.");
            return false;
        }
    }
}
const sistema = new SistemaAutenticacao();
sistema.adicionarUsuario("joao@example.com", "João", "123456");
sistema.autenticar("joao@example.com", "123456"); // Bem-vindo, João!
sistema.autenticar("joao@example.com", "senhaerrada"); // Credenciais inválidas.
