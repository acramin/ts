"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SistemaAutenticacao = void 0;
var SistemaAutenticacao = /** @class */ (function () {
    function SistemaAutenticacao() {
        this.usuarios = [];
    }
    // Adicionar usuário
    SistemaAutenticacao.prototype.adicionarUsuario = function (email, nome, senha) {
        // Verifica se já existe um usuário com o mesmo email
        var usuarioExistente = this.usuarios.filter(function (u) { return u.email === email; });
        if (usuarioExistente.length > 0) {
            console.log("Erro: Já existe um usuário com este email.");
            return;
        }
        var user = { email: email, nome: nome, senha: senha, };
        this.usuarios.push(user);
        console.log("Usu\u00E1rio ".concat(nome, " adicionado com sucesso."));
    };
    // Autenticar usuário
    SistemaAutenticacao.prototype.autenticar = function (email, senha) {
        // Busca o usuário pelo email
        var usuariosEncontrados = this.usuarios.filter(function (u) { return u.email === email; });
        if (usuariosEncontrados.length > 0 && usuariosEncontrados[0].senha === senha) {
            console.log("\nBem-vindo, ".concat(usuariosEncontrados[0].nome, "!"));
            return true;
        }
        else {
            console.log("\nCredenciais inválidas.");
            return false;
        }
    };
    // Listar todos os usuários cadastrados (opcional para debug)
    SistemaAutenticacao.prototype.listarUsuarios = function () {
        console.log("\nUsuários cadastrados:");
        this.usuarios.forEach(function (u) {
            console.log("- ".concat(u.nome, " (").concat(u.email, ")"));
        });
    };
    return SistemaAutenticacao;
}());
exports.SistemaAutenticacao = SistemaAutenticacao;
