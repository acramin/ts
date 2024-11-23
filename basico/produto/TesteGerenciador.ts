import { Gerenciador } from "./Gerenciador";

const g = new Gerenciador();

g.add('banana', 10);
g.add('maça', 5);
g.add('celular', 1200);

g.remove('maça');

console.log('\n*****Lista final****')
g.list();