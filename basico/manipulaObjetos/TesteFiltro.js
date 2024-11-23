"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Clintes_1 = require("./Clintes");
var filtro_1 = require("./filtro");
var clientesAtivos = (0, filtro_1.filtro)(Clintes_1.clientes, 'ativo');
console.log('Clientes Ativos:', clientesAtivos);
var clientesInativos = (0, filtro_1.filtro)(Clintes_1.clientes, 'inativo');
console.log('Clientes Inativos:', clientesInativos);
