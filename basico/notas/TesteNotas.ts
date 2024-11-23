// app.ts
import { Sistema } from "./SistemaDeNotas";
import { Aluno } from "./Aluno";

const sistema = new Sistema();

// Criar instâncias de alunos
const aluno1: Aluno = { nome: "Ana", nota1: 8, nota2: 7.5, nota3: 9 };
const aluno2: Aluno = { nome: "João", nota1: 6, nota2: 5, nota3: 8 };
const aluno3: Aluno = { nome: "Carlos", nota1: 10, nota2: 9, nota3: 9.5 };

// Adicionar alunos ao sistema
sistema.adicionarAluno(aluno1);
sistema.adicionarAluno(aluno2);
sistema.adicionarAluno(aluno3);
