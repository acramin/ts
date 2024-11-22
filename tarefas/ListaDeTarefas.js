"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListaDeTarefas = void 0;
var ListaDeTarefas = /** @class */ (function () {
    function ListaDeTarefas() {
        this.tarefas = [];
    }
    ListaDeTarefas.prototype.add = function (descrição) {
        var novaTarefa = {
            descrição: descrição,
            completa: false,
            dataDeCriação: new Date(),
        };
        this.tarefas.push(novaTarefa);
        //console.log(`Tarefa "${novaTarefa.descrição}" adicionada com sucesso!`);
        console.log("******** Atualização *******");
        this.list();
    };
    ListaDeTarefas.prototype.remove = function (index) {
        if (index < 0 || index > this.tarefas.length) {
            console.log('tarefa não encontrada');
        }
        else {
            var removida = this.tarefas.splice(index, 1)[0];
            //console.log(`Tarefa "${removida.descrição}" removida com sucesso!`);
        }
        console.log("******** Atualização *******");
        this.list();
    };
    ListaDeTarefas.prototype.list = function () {
        console.log("Lista de Tarefas:");
        if (this.tarefas.length === 0) {
            console.log("Nenhuma tarefa encontrada.");
        }
        else {
            this.tarefas.forEach(function (tarefa, index) {
                console.log("".concat(index, ": ").concat(tarefa.descrição, " | Completa: ").concat(tarefa.completa ? "Sim" : "Não", " | Criada em: ").concat(tarefa.dataDeCriação.toLocaleString()));
            });
        }
    };
    ListaDeTarefas.prototype.completarTarefa = function (index) {
        if (index < 0 || index > this.tarefas.length) {
            console.log('tarefa não encontrada');
        }
        else {
            this.tarefas[index].completa = true;
            //console.log(`Tarefa "${this.tarefas[index].descrição}" marcada como completa!`);
        }
        console.log("******** Atualização *******");
        this.list();
    };
    return ListaDeTarefas;
}());
exports.ListaDeTarefas = ListaDeTarefas;
