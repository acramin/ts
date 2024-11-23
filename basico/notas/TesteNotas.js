"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// app.ts
var SistemaDeNotas_1 = require("./SistemaDeNotas");
var sistema = new SistemaDeNotas_1.Sistema();
// Criar instâncias de alunos
var aluno1 = { nome: "Ana", nota1: 8, nota2: 7.5, nota3: 9 };
var aluno2 = { nome: "João", nota1: 6, nota2: 5, nota3: 8 };
var aluno3 = { nome: "Carlos", nota1: 10, nota2: 9, nota3: 9.5 };
// Adicionar alunos ao sistema
sistema.adicionarAluno(aluno1);
sistema.adicionarAluno(aluno2);
sistema.adicionarAluno(aluno3);
