"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contabilidade = void 0;
var Contabilidade = /** @class */ (function () {
    function Contabilidade() {
        this.transações = [];
        this.tipos = ['entrada', 'saida'];
    }
    Contabilidade.prototype.addTransacao = function (valor, tipo) {
        if (this.tipos.filter(function (tp) { return tp === tipo; }).length === 0) {
            console.log("Transa\u00E7\u00E3o do tipo \"".concat(tipo, "\" \u00E9 inv\u00E1lida!"));
            return;
        }
        var transação = {
            valor: valor,
            tipo: tipo,
            data: new Date()
        };
        this.transações.push(transação);
        console.log("Tipo: ".concat(transação.tipo, " | Valor: ").concat(transação.valor, " | Data: ").concat(transação.data));
    };
    Contabilidade.prototype.saldo = function () {
        var entradas = this.transações.filter(function (t) { return t.tipo === 'entrada'; });
        var saidas = this.transações.filter(function (t) { return t.tipo === 'saida'; });
        var saldoP, saldoN;
        for (var i = 0; i < entradas.length; i++) {
            saldoP = entradas[i].valor;
        }
        for (var i = 0; i < saidas.length; i++) {
            saldoN = saidas[i].valor;
        }
        console.log("O saldo da conta \u00E9 ".concat(saldoP - saldoN));
    };
    return Contabilidade;
}());
exports.Contabilidade = Contabilidade;
