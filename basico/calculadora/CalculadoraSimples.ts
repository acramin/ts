import { Calculadora } from "./Calculadora";

export class CalculadoraSimples implements Calculadora{

    constructor(){}

    soma(a: number, b: number): number {
        return a + b
    }

    subtrai(a: number, b: number): number {
        return a - b;
    }

    multiplica(a: any, b: any): number {
        return a * b;
    }

    divide(a: number, b: number): number {
        return a / b;
    }

}

