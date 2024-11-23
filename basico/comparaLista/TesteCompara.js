"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const compara_1 = require("./compara");
const l1 = ['teste', 10, 'vale tudo', 95];
const l2 = [50, 'teste', '95', 0];
console.log(`Itens comuns : ${(0, compara_1.compararListas)(l1, l2)}`);
