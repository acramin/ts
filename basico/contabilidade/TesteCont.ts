import { Contabilidade } from "./Contabilidade";

const cont = new Contabilidade();

cont.addTransacao(1000, 'entrada');
cont.addTransacao(1000000, 'é pra dar errado');
cont.addTransacao(500, 'saida');

cont.saldo();