"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filtro = filtro;
function filtro(cliente, status) {
    return cliente.filter(function (cliente) { return cliente.status === status; });
}
