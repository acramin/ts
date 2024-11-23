"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sistema = void 0;
function calcularMedia(a) {
    return (a.nota1 + a.nota2 + a.nota3) / 3;
}
var Sistema = /** @class */ (function () {
    function Sistema() {
        this.alunos = [];
    }
    Sistema.prototype.adicionarAluno = function (aluno) {
        aluno.media = calcularMedia(aluno); // Calcula e armazena a média do aluno
        this.alunos.push(aluno);
        console.log("Aluno ".concat(aluno.nome, " adicionado com m\u00E9dia ").concat(aluno.media.toFixed(2)));
    };
    return Sistema;
}());
exports.Sistema = Sistema;
