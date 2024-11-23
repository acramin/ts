"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ListaDeTarefas_1 = require("./ListaDeTarefas");
var lista = new ListaDeTarefas_1.ListaDeTarefas();
// adicionando itens
lista.add('estudar para as provas');
lista.add('comer');
lista.add('dormir');
// marcar tarefa como completa
lista.completarTarefa(1);
// removendo item
lista.remove(1);
