import { ListaDeTarefas } from "./ListaDeTarefas";

const lista = new ListaDeTarefas();

// adicionando itens
lista.add('estudar para as provas');
lista.add('comer');
lista.add('dormir');

// marcar tarefa como completa
lista.completarTarefa(1);

// removendo item
lista.remove(1);