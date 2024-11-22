import { Usuario } from "./Usuario";

export class SistemaAutenticacao {
    private usuarios: Usuario[] = [];

    // Adicionar usuário
    adicionarUsuario(email: string, nome: string, senha: string): void {
        // Verifica se já existe um usuário com o mesmo email
        const usuarioExistente = this.usuarios.filter(u => u.email === email);
        if (usuarioExistente.length > 0) {
            console.log("Erro: Já existe um usuário com este email.");
            return;
        }
        const user = { email, nome, senha, }
        this.usuarios.push(user);
        console.log(`Usuário ${nome} adicionado com sucesso.`);
    }

    // Autenticar usuário
    autenticar(email: string, senha: string): boolean {
        // Busca o usuário pelo email
        const usuariosEncontrados = this.usuarios.filter(u => u.email === email);
        if (usuariosEncontrados.length > 0 && usuariosEncontrados[0].senha === senha) {
            console.log(`\nBem-vindo, ${usuariosEncontrados[0].nome}!`);
            return true;
        } else {
            console.log("\nCredenciais inválidas.");
            return false;
        }
    }

    // Listar todos os usuários cadastrados (opcional para debug)
    listarUsuarios(): void {
        console.log("\nUsuários cadastrados:");
        this.usuarios.forEach(u => {
            console.log(`- ${u.nome} (${u.email})`);
        });
    }
}

