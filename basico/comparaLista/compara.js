"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compararListas = compararListas;
function compararListas(lista1, lista2) {
    return lista1.filter((item) => lista2.includes(item));
}
