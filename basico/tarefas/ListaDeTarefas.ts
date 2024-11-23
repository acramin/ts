import { Tarefa } from "./Tarefa";

export class ListaDeTarefas{
    private tarefas: Tarefa[] = [];

    add(descrição : string) : void {
        const novaTarefa = { // criando objeto tarefa
            descrição,
            completa : false,
            dataDeCriação : new Date(),
        };
        this.tarefas.push(novaTarefa);
        //console.log(`Tarefa "${novaTarefa.descrição}" adicionada com sucesso!`);
        console.log("******** Atualização *******");
        this.list();
    }

    remove(index : number) : void{
        if (index < 0 || index > this.tarefas.length){
            console.log('tarefa não encontrada');
        } else {
            const removida = this.tarefas.splice(index, 1)[0];
            //console.log(`Tarefa "${removida.descrição}" removida com sucesso!`);
        }
        console.log("******** Atualização *******");
        this.list();
    }

    list(): void {
        console.log("Lista de Tarefas:");
        if (this.tarefas.length === 0) {
            console.log("Nenhuma tarefa encontrada.");
        }
        else {
            this.tarefas.forEach((tarefa, index) => {
                console.log(
                    `${index}: ${tarefa.descrição} | Completa: ${tarefa.completa ? "Sim" : "Não"} | Criada em: ${tarefa.dataDeCriação.toLocaleString()}`
                );
            });
        }
    }

    completarTarefa(index : number) : void{
        if (index < 0 || index > this.tarefas.length){
            console.log('tarefa não encontrada');
        } else {
            this.tarefas[index].completa = true;
            //console.log(`Tarefa "${this.tarefas[index].descrição}" marcada como completa!`);
        }
        console.log("******** Atualização *******");
        this.list();
    }

}