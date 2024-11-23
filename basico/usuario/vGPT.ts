// versão do GPT -> não roda no pc pq o map não ta configurado ; funciona no https://www.typescriptlang.org/pt/play/?#

class SistemaAutenticacao {
    private tabela = new Map<string, { senha: string, nome: string }>();

    // Adicionar usuário
    adicionarUsuario(email: string, nome: string, senha: string): void {
        this.tabela.set(email, { senha, nome });
        console.log(`Usuário ${nome} adicionado com sucesso.`);
    }

    // Autenticar usuário
    autenticar(email: string, senha: string): boolean {
        const usuario = this.tabela.get(email);
        if (usuario && usuario.senha === senha) {
            console.log(`Bem-vindo, ${usuario.nome}!`);
            return true;
        } else {
            console.log("Credenciais inválidas.");
            return false;
        }
    }
}

const sistema = new SistemaAutenticacao();
sistema.adicionarUsuario("joao@example.com", "João", "123456");
sistema.autenticar("joao@example.com", "123456"); // Bem-vindo, João!
sistema.autenticar("joao@example.com", "senhaerrada"); // Credenciais inválidas.
