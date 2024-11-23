"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Contabilidade_1 = require("./Contabilidade");
var cont = new Contabilidade_1.Contabilidade();
cont.addTransacao(1000, 'entrada');
cont.addTransacao(1000000, 'é pra dar errado');
cont.addTransacao(500, 'saida');
cont.saldo();
