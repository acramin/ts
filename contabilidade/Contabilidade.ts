import { Transação } from "./Trasacao";

export class Contabilidade{
    transações : Transação[] = [];
    tipos = ['entrada', 'saida'];

    addTransacao(valor : number, tipo : string){
        if(this.tipos.filter((tp) => tp === tipo).length === 0){
            console.log(`Transação do tipo "${tipo}" é inválida!`)
            return;
        }
        const transação = {
            valor,
            tipo,
            data: new Date()
        }
        this.transações.push(transação);
        console.log(`Tipo: ${transação.tipo} | Valor: ${transação.valor} | Data: ${transação.data}`)
    }

    saldo(){
        const entradas = this.transações.filter((t) => t.tipo === 'entrada');
        const saidas = this.transações.filter((t) => t.tipo === 'saida');
        let saldoP, saldoN;

        for(let i = 0; i < entradas.length; i ++){
            saldoP = entradas[i].valor;
        }
        for(let i = 0; i < saidas.length; i ++){
            saldoN= saidas[i].valor;
        }
        console.log(`O saldo da conta é ${saldoP - saldoN}`)
    }

}