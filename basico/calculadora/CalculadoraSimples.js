"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculadoraSimples = void 0;
var CalculadoraSimples = /** @class */ (function () {
    function CalculadoraSimples() {
    }
    CalculadoraSimples.prototype.soma = function (a, b) {
        return a + b;
    };
    CalculadoraSimples.prototype.subtrai = function (a, b) {
        return a - b;
    };
    CalculadoraSimples.prototype.multiplica = function (a, b) {
        return a * b;
    };
    CalculadoraSimples.prototype.divide = function (a, b) {
        return a / b;
    };
    return CalculadoraSimples;
}());
exports.CalculadoraSimples = CalculadoraSimples;
