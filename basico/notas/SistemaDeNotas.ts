import { Aluno } from "./Aluno";

function calcularMedia(a : Aluno){
    return (a.nota1+a.nota2+a.nota3)/3;
}

export class Sistema {
    private alunos: Aluno[] = [];

    adicionarAluno(aluno: Aluno): void {
        aluno.media = calcularMedia(aluno); // Calcula e armazena a média do aluno
        this.alunos.push(aluno);
        console.log(`Aluno ${aluno.nome} adicionado com média ${aluno.media.toFixed(2)}`);
    }
}