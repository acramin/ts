"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SistemaAutenticacao_1 = require("./SistemaAutenticacao");
const sistema = new SistemaAutenticacao_1.SistemaAutenticacao();
// Adicionando usuários
sistema.adicionarUsuario("joao@example.com", "João", "123456");
sistema.adicionarUsuario("maria@example.com", "Maria", "abcdef");
// tentando add ja existente
sistema.adicionarUsuario("joao@example.com", "João Silva", "novasenha");
// autenticando
sistema.autenticar("joao@example.com", "123456");
sistema.autenticar("maria@example.com", "abcdef");
sistema.autenticar("joao@example.com", "senhaerrada");
// lista tudo
sistema.listarUsuarios();
