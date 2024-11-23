"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SistemaAutenticacao = void 0;
class SistemaAutenticacao {
    constructor() {
        this.usuarios = [];
    }
    // Adicionar usuário
    adicionarUsuario(email, nome, senha) {
        // Verifica se já existe um usuário com o mesmo email
        const usuarioExistente = this.usuarios.filter(u => u.email === email);
        if (usuarioExistente.length > 0) {
            console.log("Erro: Já existe um usuário com este email.");
            return;
        }
        const user = { email, nome, senha, };
        this.usuarios.push(user);
        console.log(`Usuário ${nome} adicionado com sucesso.`);
    }
    // Autenticar usuário
    autenticar(email, senha) {
        // Busca o usuário pelo email
        const usuariosEncontrados = this.usuarios.filter(u => u.email === email);
        if (usuariosEncontrados.length > 0 && usuariosEncontrados[0].senha === senha) {
            console.log(`\nBem-vindo, ${usuariosEncontrados[0].nome}!`);
            return true;
        }
        else {
            console.log("\nCredenciais inválidas.");
            return false;
        }
    }
    // Listar todos os usuários cadastrados (opcional para debug)
    listarUsuarios() {
        console.log("\nUsuários cadastrados:");
        this.usuarios.forEach(u => {
            console.log(`- ${u.nome} (${u.email})`);
        });
    }
}
exports.SistemaAutenticacao = SistemaAutenticacao;
